import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SiMARA | Sistem Manajemen Asrama",
    template: "%s | SiMARA",
  },
  description: "Panel admin SiMARA untuk pengelolaan data asrama mahasiswa.",
};

const stripBrowserInjectedHydrationAttrs = `
  (() => {
    const attributeName = "fdprocessedid";
    const selector = "[" + attributeName + "]";

    const stripAttribute = (node) => {
      if (!(node instanceof Element)) {
        return;
      }

      if (node.hasAttribute(attributeName)) {
        node.removeAttribute(attributeName);
      }

      node.querySelectorAll(selector).forEach((element) => {
        element.removeAttribute(attributeName);
      });
    };

    stripAttribute(document.documentElement);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.target instanceof Element &&
          mutation.attributeName === attributeName
        ) {
          mutation.target.removeAttribute(attributeName);
        }

        mutation.addedNodes.forEach((node) => {
          stripAttribute(node);
        });
      });
    });

    observer.observe(document.documentElement, {
      subtree: true,
      childList: true,
      attributes: true,
      attributeFilter: [attributeName],
    });

    window.addEventListener(
      "load",
      () => {
        window.setTimeout(() => observer.disconnect(), 0);
      },
      { once: true }
    );
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <Script
          id="strip-browser-hydration-attrs"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: stripBrowserInjectedHydrationAttrs,
          }}
        />
      </head>
      <body className="min-h-full bg-gray-50 font-sans text-gray-800 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
