import fs from 'fs';

// ── Shared JSX conversion function ─────────────────────────────────────────
function toJsx(content) {
  content = content.replace(/\r/g, '');                                        // normalize CRLF → LF
  content = content.replace(/<!--[\s\S]*?-->/g, '');                          // strip HTML comments
  content = content.replace(/\bclass=/g, 'className=');                        // class → className
  content = content.replace(/\btabindex=/g, 'tabIndex=');                      // tabindex → tabIndex
  content = content.replace(/tabIndex="(\d+)"/g, (_, n) => `tabIndex={${n}}`); // tabIndex str → num
  content = content.replace(/\bfor=/g, 'htmlFor=');                            // for → htmlFor
  content = content.replace(/ onclick="[^"]*"/g, '');                          // remove onclick
  content = content.replace(/ onchange="[^"]*"/g, '');                         // remove onchange

  // style="..." → style={{ ... }}
  content = content.replace(/style="([^"]*)"/g, (_, val) => {
    const pairs = val.split(';').map(s => s.trim()).filter(Boolean);
    const obj = pairs.map(pair => {
      const ci = pair.indexOf(':');
      const prop = pair.slice(0, ci).trim();
      const value = pair.slice(ci + 1).trim();
      const camel = prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
      return `${camel}: '${value}'`;
    }).join(', ');
    return `style={{ ${obj} }}`;
  });

  // Self-close true void elements only
  ['input', 'img', 'br', 'hr'].forEach(tag => {
    const re = new RegExp(`<(${tag})((?:\\s[^>]*)?)(?<!/)>`, 'g');
    content = content.replace(re, (_, t, attrs) => `<${t}${attrs} />`);
  });


  // HTML entities
  const entityMap = {
    '&mdash;': '\u2014', '&ndash;': '\u2013', '&bull;': '\u2022',
    '&copy;': '\u00A9', '&rarr;': '\u2192', '&larr;': '\u2190',
    '&hellip;': '\u2026', '&amp;': "{'&'}", '&lt;': "{'<'}",
    '&gt;': "{'>'}", '&nbsp;': '\u00A0', '&middot;': '\u00B7',
    '&times;': '\u00D7',
  };
  Object.entries(entityMap).forEach(([e, r]) => { content = content.split(e).join(r); });

  // Fix source HTML bug: <div></div> followed by <p> (should be <div> to wrap the <p> elements)
  // The original HTML had <div></div>\n<p>...\n</div> instead of <div>\n<p>...\n</div>
  content = content.replace(/<div><\/div>\n(\s+<p )/g, '<div>\n$1');

  return content;
}

// ── Find content boundaries ─────────────────────────────────────────────────
// Strategy: find the OPENING of the max-w-screen-2xl inner div,
// then take everything from the line AFTER that until the line BEFORE </main>
// (the </div> that closes max-w-screen-2xl and </main> itself are excluded).
// We track nesting depth to find the correct closing </div> for max-w div.
function extractContent(src) {
  const lines = fs.readFileSync(src, 'utf8').split('\n');
  let mainIdx = -1, innerDivIdx = -1, innerDivCloseIdx = -1;

  // Find <main> and the max-w-screen-2xl div
  for (let i = 0; i < lines.length; i++) {
    if (mainIdx === -1 && /<main\b/.test(lines[i])) { mainIdx = i; continue; }
    if (mainIdx > -1 && innerDivIdx === -1 && /max-w-screen-2xl/.test(lines[i])) {
      innerDivIdx = i;
      break;
    }
  }

  if (innerDivIdx === -1) throw new Error('Could not find max-w-screen-2xl in ' + src);

  // Track depth to find matching </div> for the max-w div
  let depth = 0;
  for (let i = innerDivIdx; i < lines.length; i++) {
    const l = lines[i];
    const opens = (l.match(/<div\b/g) || []).length;
    const closes = (l.match(/<\/div>/g) || []).length;
    depth += opens - closes;
    if (i > innerDivIdx && depth === 0) {
      innerDivCloseIdx = i; // this is the closing </div> for max-w div
      break;
    }
  }

  if (innerDivCloseIdx === -1) {
    // fallback: find </main> and go 2 lines before  
    for (let i = lines.length - 1; i >= 0; i--) {
      if (/<\/main>/.test(lines[i])) { innerDivCloseIdx = i - 1; break; }
    }
  }

  // Content is from innerDivIdx+1 to innerDivCloseIdx-1 (exclusive of closing </div></main>)
  const contentLines = lines.slice(innerDivIdx + 1, innerDivCloseIdx);
  // Strip Windows \r to prevent <div>\r</div> collapsing into empty <div></div>
  return contentLines.map(l => l.replace(/\r$/, '')).join('\n');
}

const adminDir = 'c:/MY FOLDER/LIVE PROJECT/ASRAMA-PROJECT/admin/';
const dstBase  = 'c:/MY FOLDER/LIVE PROJECT/ASRAMA-PROJECT/frontend-asrama/';

const pages = [
  { src: 'checkPoint.html',      dst: 'app/(admin)/check-point/page.tsx',      fn: 'CheckPointPage',      title: 'Check Point | SiMARA' },
  { src: 'masterKamar.html',     dst: 'app/(admin)/master-data/kamar/page.tsx', fn: 'MasterKamarPage',     title: 'Master Data Kamar | SiMARA' },
  { src: 'pendaftaran.html',     dst: 'app/(admin)/pendaftaran/page.tsx',       fn: 'PendaftaranPage',     title: 'Pendaftaran | SiMARA' },
  { src: 'penghuniAsrama.html',  dst: 'app/(admin)/penghuni-asrama/page.tsx',   fn: 'PenghuniAsramaPage',  title: 'Penghuni Asrama | SiMARA' },
  { src: 'poinPelanggaran.html', dst: 'app/(admin)/poin-pelanggaran/page.tsx',  fn: 'PoinPelanggaranPage', title: 'Poin Pelanggaran | SiMARA' },
  { src: 'laporan.html',         dst: 'app/(admin)/laporan/page.tsx',           fn: 'LaporanPage',         title: 'Laporan | SiMARA' },
  { src: 'pengaturan.html',      dst: 'app/(admin)/pengaturan/page.tsx',        fn: 'PengaturanPage',      title: 'Pengaturan | SiMARA' },
];

// ── Also fix dashboard (strip outer main+div wrappers) ──────────────────────
{
  const dstPath = dstBase + 'app/(admin)/dashboard/page.tsx';

  // Use the same extractContent approach on the original index.html
  const rawContent = extractContent(adminDir + 'index.html');
  let content = toJsx(rawContent);
  
  // Dashboard also needs the footer from original (already included if innerDivClose is right)
  const output = `import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard Admin | SiMARA",
};

export default function DashboardPage() {
  return (
    <>
${content}
    </>
  );
}
`;
  fs.writeFileSync(dstPath, output, 'utf8');
  const dO = (content.match(/<div\b/g)||[]).length;
  const dC = (content.match(/<\/div>/g)||[]).length;
  console.log(`✓ index.html → dashboard/page.tsx (${output.split('\n').length} lines, divs: ${dO}/${dC})`);
}

// ── Migrate each remaining page ─────────────────────────────────────────────
pages.forEach(({ src, dst, fn, title }) => {
  const srcPath = adminDir + src;
  const dstPath = dstBase + dst;

  const rawContent = extractContent(srcPath);
  let content = toJsx(rawContent);

  const dO = (content.match(/<div\b/g)||[]).length;
  const dC = (content.match(/<\/div>/g)||[]).length;

  const output = `import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "${title}",
};

export default function ${fn}() {
  return (
    <>
${content}
    </>
  );
}
`;

  fs.writeFileSync(dstPath, output, 'utf8');
  console.log(`✓ ${src} → ${dst} (${output.split('\n').length} lines, divs: ${dO}/${dC})`);
});

console.log('\nDone! Run: npx tsc --noEmit');
