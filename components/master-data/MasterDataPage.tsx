"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export type MasterDataTab = "mahasiswa" | "kamar" | "pelanggaran" | "aturan";

type MasterDataTabItem = {
  id: MasterDataTab;
  label: string;
  icon: string;
  count: string;
};

export type MasterDataTabDetail = {
  heading: string;
  breadcrumb: string;
  addLabel: string;
};

export const masterDataTabDetails: Record<MasterDataTab, MasterDataTabDetail> = {
  mahasiswa: {
    heading: "Data Mahasiswa",
    breadcrumb: "Data Mahasiswa",
    addLabel: "Tambah Mahasiswa",
  },
  kamar: {
    heading: "Data Kamar",
    breadcrumb: "Data Kamar",
    addLabel: "Tambah Kamar",
  },
  pelanggaran: {
    heading: "Jenis Pelanggaran",
    breadcrumb: "Jenis Pelanggaran",
    addLabel: "Tambah Jenis Pelanggaran",
  },
  aturan: {
    heading: "Aturan Poin",
    breadcrumb: "Aturan Poin",
    addLabel: "Tambah Aturan Poin",
  },
};


const activeTabButtonClass =
  "tab-btn flex items-center gap-2.5 px-5 py-4 text-sm font-semibold border-b-2 whitespace-nowrap shrink-0 border-indigo-600 text-indigo-600 bg-indigo-50/60";

const inactiveTabButtonClass =
  "tab-btn flex items-center gap-2.5 px-5 py-4 text-sm font-medium border-b-2 whitespace-nowrap shrink-0 border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50";

const activeTabBadgeClass =
  "bg-indigo-100 text-indigo-700 text-[10px] font-bold px-1.5 py-0.5 rounded-full";

const inactiveTabBadgeClass =
  "bg-gray-100 text-gray-600 text-[10px] font-bold px-1.5 py-0.5 rounded-full";

const tabs: MasterDataTabItem[] = [
  {
    id: "mahasiswa",
    label: masterDataTabDetails.mahasiswa.heading,
    icon: "fa-solid fa-user-graduate",
    count: "247",
  },
  {
    id: "kamar",
    label: masterDataTabDetails.kamar.heading,
    icon: "fa-solid fa-door-open",
    count: "45",
  },
  {
    id: "pelanggaran",
    label: masterDataTabDetails.pelanggaran.heading,
    icon: "fa-solid fa-triangle-exclamation",
    count: "5",
  },
  {
    id: "aturan",
    label: masterDataTabDetails.aturan.heading,
    icon: "fa-solid fa-scale-balanced",
    count: "4",
  },
];

export function getMasterDataTabDetail(tab: MasterDataTab) {
  return masterDataTabDetails[tab];
}

export function normalizeMasterDataTab(tab: string | null): MasterDataTab {
  switch (tab) {
    case "kamar":
    case "pelanggaran":
    case "aturan":
      return tab;
    default:
      return "mahasiswa";
  }
}

function DataMahasiswaView() {
  return (
    <div id="content-mahasiswa" className="block">
                            
                            <div
                                className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-3 mb-5"
                            >
                                <div
                                    className="stat-card bg-white rounded-xl p-3.5 shadow-sm border border-gray-100"
                                >
                                    <p
                                        className="text-[10px] text-gray-400 font-medium uppercase tracking-wider mb-1"
                                    >
                                        Total
                                    </p>
                                    <p className="text-2xl font-bold text-gray-900">
                                        247
                                    </p>
                                </div>
                                <div
                                    className="stat-card bg-white rounded-xl p-3.5 shadow-sm border border-gray-100"
                                >
                                    <p
                                        className="text-[10px] text-gray-400 font-medium uppercase tracking-wider mb-1"
                                    >
                                        Aktif Tinggal
                                    </p>
                                    <p className="text-2xl font-bold text-emerald-600">
                                        198
                                    </p>
                                </div>
                                <div
                                    className="stat-card bg-white rounded-xl p-3.5 shadow-sm border border-gray-100"
                                >
                                    <p
                                        className="text-[10px] text-gray-400 font-medium uppercase tracking-wider mb-1"
                                    >
                                        Menunggu
                                    </p>
                                    <p className="text-2xl font-bold text-amber-500">
                                        18
                                    </p>
                                </div>
                                <div
                                    className="stat-card bg-white rounded-xl p-3.5 shadow-sm border border-gray-100"
                                >
                                    <p
                                        className="text-[10px] text-gray-400 font-medium uppercase tracking-wider mb-1"
                                    >
                                        Diterima
                                    </p>
                                    <p className="text-2xl font-bold text-blue-500">
                                        8
                                    </p>
                                </div>
                                <div
                                    className="stat-card bg-white rounded-xl p-3.5 shadow-sm border border-gray-100"
                                >
                                    <p
                                        className="text-[10px] text-gray-400 font-medium uppercase tracking-wider mb-1"
                                    >
                                        Ditolak
                                    </p>
                                    <p className="text-2xl font-bold text-rose-500">
                                        20
                                    </p>
                                </div>
                                <div
                                    className="stat-card bg-white rounded-xl p-3.5 shadow-sm border border-gray-100"
                                >
                                    <p
                                        className="text-[10px] text-gray-400 font-medium uppercase tracking-wider mb-1"
                                    >
                                        Keluar
                                    </p>
                                    <p className="text-2xl font-bold text-slate-500">
                                        3
                                    </p>
                                </div>
                            </div>

                            
                            <div
                                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                            >
                                
                                <div
                                    className="flex flex-col sm:flex-row items-start sm:items-center gap-3 px-5 py-4 border-b border-gray-100"
                                >
                                    <div
                                        className="relative flex-1 min-w-0 sm:max-w-xs"
                                    >
                                        <i
                                            className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"
                                        ></i>
                                        <input
                                            type="text"
                                            placeholder="Cari NIM atau nama mahasiswa..."
                                            className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50/80"
                                        />
                                    </div>
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <select
                                            className="text-xs border border-gray-200 text-gray-600 rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500 bg-white cursor-pointer"
                                        >
                                            <option value="">Semua Status</option>
                                            <option>Aktif Tinggal</option>
                                            <option>Menunggu Verifikasi</option>
                                            <option>Diterima</option>
                                            <option>Ditolak</option>
                                            <option>Keluar Asrama</option>
                                        </select>
                                        <select
                                            className="text-xs border border-gray-200 text-gray-600 rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500 bg-white cursor-pointer"
                                        >
                                            <option value="">Semua Angkatan</option>
                                            <option>2024</option>
                                            <option>2023</option>
                                            <option>2022</option>
                                            <option>2021</option>
                                            <option>2020</option>
                                        </select>
                                        <select
                                            className="text-xs border border-gray-200 text-gray-600 rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500 bg-white cursor-pointer"
                                        >
                                            <option value="">Semua Gender</option>
                                            <option>Laki-laki</option>
                                            <option>Perempuan</option>
                                        </select>
                                    </div>
                                </div>

                                
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr
                                                className="bg-gray-50/80 border-b border-gray-100"
                                            >
                                                <th
                                                    className="px-5 py-3 text-left w-10"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        className="w-4 h-4 rounded border-gray-300 text-indigo-600 cursor-pointer"
                                                    />
                                                </th>
                                                <th
                                                    className="px-4 py-3 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider"
                                                >
                                                    NIM
                                                </th>
                                                <th
                                                    className="px-4 py-3 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider"
                                                >
                                                    Nama Mahasiswa
                                                </th>
                                                <th
                                                    className="px-4 py-3 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider hidden lg:table-cell"
                                                >
                                                    Fakultas / Prodi
                                                </th>
                                                <th
                                                    className="px-4 py-3 text-center text-[11px] font-bold text-gray-500 uppercase tracking-wider hidden sm:table-cell"
                                                >
                                                    JK
                                                </th>
                                                <th
                                                    className="px-4 py-3 text-center text-[11px] font-bold text-gray-500 uppercase tracking-wider hidden md:table-cell"
                                                >
                                                    Angkatan
                                                </th>
                                                <th
                                                    className="px-4 py-3 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider"
                                                >
                                                    Status
                                                </th>
                                                <th
                                                    className="px-4 py-3 text-center text-[11px] font-bold text-gray-500 uppercase tracking-wider hidden xl:table-cell"
                                                >
                                                    Kamar
                                                </th>
                                                <th
                                                    className="px-4 py-3 text-center text-[11px] font-bold text-gray-500 uppercase tracking-wider"
                                                >
                                                    Poin
                                                </th>
                                                <th
                                                    className="px-4 py-3 text-center text-[11px] font-bold text-gray-500 uppercase tracking-wider"
                                                >
                                                    Aksi
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-50">
                                            
                                            <tr
                                                className="table-row hover:bg-indigo-50/25"
                                            >
                                                <td className="px-5 py-3.5">
                                                    <input
                                                        type="checkbox"
                                                        className="w-4 h-4 rounded border-gray-300 text-indigo-600 cursor-pointer"
                                                    />
                                                </td>
                                                <td className="px-4 py-3.5">
                                                    <span
                                                        className="text-sm font-mono font-semibold text-gray-700"
                                                        >2021310045</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5">
                                                    <div
                                                        className="flex items-center gap-2.5"
                                                    >
                                                        <div
                                                            className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center shrink-0"
                                                        >
                                                            <span
                                                                className="text-indigo-700 text-[10px] font-bold"
                                                                >BS</span
                                                            >
                                                        </div>
                                                        <div>
                                                            <p
                                                                className="text-sm font-semibold text-gray-800"
                                                            >
                                                                Budi Santoso
                                                            </p>
                                                            <p
                                                                className="text-[10.5px] text-gray-400"
                                                            >
                                                                081234567890
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td
                                                    className="px-4 py-3.5 hidden lg:table-cell"
                                                >
                                                    <p
                                                        className="text-sm text-gray-700"
                                                    >
                                                        Teknik
                                                    </p>
                                                    <p
                                                        className="text-[10.5px] text-gray-400"
                                                    >
                                                        Teknik Informatika
                                                    </p>
                                                </td>
                                                <td
                                                    className="px-4 py-3.5 text-center hidden sm:table-cell"
                                                >
                                                    <span
                                                        className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full text-[10px] font-bold text-blue-700"
                                                        title="Laki-laki"
                                                        >L</span
                                                    >
                                                </td>
                                                <td
                                                    className="px-4 py-3.5 text-center hidden md:table-cell"
                                                >
                                                    <span
                                                        className="text-sm font-semibold text-gray-700"
                                                        >2021</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5">
                                                    <span
                                                        className="inline-flex items-center gap-1.5 text-[10.5px] font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200"
                                                        ><span
                                                            className="w-1.5 h-1.5 bg-emerald-500 rounded-full"
                                                        ></span
                                                        >Aktif Tinggal</span
                                                    >
                                                </td>
                                                <td
                                                    className="px-4 py-3.5 text-center hidden xl:table-cell"
                                                >
                                                    <span
                                                        className="text-sm font-semibold text-gray-700 bg-gray-100 px-2 py-0.5 rounded-md"
                                                        >A-101</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5 text-center">
                                                    <span
                                                        className="inline-flex items-center gap-1 text-sm font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200"
                                                        ><i
                                                            className="fa-solid fa-triangle-exclamation text-[9px]"
                                                        ></i
                                                        >52</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5 text-center">
                                                    <div
                                                        className="flex items-center justify-center gap-1"
                                                    >
                                                        <button
                                                            title="Detail"
                                                            className="p-1.5 rounded-lg hover:bg-indigo-50 text-gray-400 hover:text-indigo-600 transition-colors"
                                                        >
                                                            <i
                                                                className="fa-solid fa-eye text-sm"
                                                            ></i>
                                                        </button>
                                                        <button
                                                            title="Edit"
                                                           
                                                            className="p-1.5 rounded-lg hover:bg-amber-50 text-gray-400 hover:text-amber-600 transition-colors"
                                                        >
                                                            <i
                                                                className="fa-solid fa-pen text-sm"
                                                            ></i>
                                                        </button>
                                                        <button
                                                            title="Hapus"
                                                           
                                                            className="p-1.5 rounded-lg hover:bg-rose-50 text-gray-400 hover:text-rose-600 transition-colors"
                                                        >
                                                            <i
                                                                className="fa-solid fa-trash text-sm"
                                                            ></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>

                                            
                                            <tr
                                                className="table-row hover:bg-indigo-50/25"
                                            >
                                                <td className="px-5 py-3.5">
                                                    <input
                                                        type="checkbox"
                                                        className="w-4 h-4 rounded border-gray-300 text-indigo-600 cursor-pointer"
                                                    />
                                                </td>
                                                <td className="px-4 py-3.5">
                                                    <span
                                                        className="text-sm font-mono font-semibold text-gray-700"
                                                        >2022410012</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5">
                                                    <div
                                                        className="flex items-center gap-2.5"
                                                    >
                                                        <div
                                                            className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center shrink-0"
                                                        >
                                                            <span
                                                                className="text-purple-700 text-[10px] font-bold"
                                                                >AR</span
                                                            >
                                                        </div>
                                                        <div>
                                                            <p
                                                                className="text-sm font-semibold text-gray-800"
                                                            >
                                                                Ahmad Rizky
                                                            </p>
                                                            <p
                                                                className="text-[10.5px] text-gray-400"
                                                            >
                                                                082345678901
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td
                                                    className="px-4 py-3.5 hidden lg:table-cell"
                                                >
                                                    <p
                                                        className="text-sm text-gray-700"
                                                    >
                                                        Ekonomi {'&'} Bisnis
                                                    </p>
                                                    <p
                                                        className="text-[10.5px] text-gray-400"
                                                    >
                                                        Manajemen
                                                    </p>
                                                </td>
                                                <td
                                                    className="px-4 py-3.5 text-center hidden sm:table-cell"
                                                >
                                                    <span
                                                        className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full text-[10px] font-bold text-blue-700"
                                                        >L</span
                                                    >
                                                </td>
                                                <td
                                                    className="px-4 py-3.5 text-center hidden md:table-cell"
                                                >
                                                    <span
                                                        className="text-sm font-semibold text-gray-700"
                                                        >2022</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5">
                                                    <span
                                                        className="inline-flex items-center gap-1.5 text-[10.5px] font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200"
                                                        ><span
                                                            className="w-1.5 h-1.5 bg-emerald-500 rounded-full"
                                                        ></span
                                                        >Aktif Tinggal</span
                                                    >
                                                </td>
                                                <td
                                                    className="px-4 py-3.5 text-center hidden xl:table-cell"
                                                >
                                                    <span
                                                        className="text-sm font-semibold text-gray-700 bg-gray-100 px-2 py-0.5 rounded-md"
                                                        >B-203</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5 text-center">
                                                    <span
                                                        className="text-sm font-semibold text-gray-600"
                                                        >8</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5 text-center">
                                                    <div
                                                        className="flex items-center justify-center gap-1"
                                                    >
                                                        <button
                                                            className="p-1.5 rounded-lg hover:bg-indigo-50 text-gray-400 hover:text-indigo-600 transition-colors"
                                                        >
                                                            <i
                                                                className="fa-solid fa-eye text-sm"
                                                            ></i>
                                                        </button>
                                                        <button
                                                           
                                                            className="p-1.5 rounded-lg hover:bg-amber-50 text-gray-400 hover:text-amber-600 transition-colors"
                                                        >
                                                            <i
                                                                className="fa-solid fa-pen text-sm"
                                                            ></i>
                                                        </button>
                                                        <button
                                                           
                                                            className="p-1.5 rounded-lg hover:bg-rose-50 text-gray-400 hover:text-rose-600 transition-colors"
                                                        >
                                                            <i
                                                                className="fa-solid fa-trash text-sm"
                                                            ></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>

                                            
                                            <tr
                                                className="table-row hover:bg-indigo-50/25"
                                            >
                                                <td className="px-5 py-3.5">
                                                    <input
                                                        type="checkbox"
                                                        className="w-4 h-4 rounded border-gray-300 text-indigo-600 cursor-pointer"
                                                    />
                                                </td>
                                                <td className="px-4 py-3.5">
                                                    <span
                                                        className="text-sm font-mono font-semibold text-gray-700"
                                                        >2023110087</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5">
                                                    <div
                                                        className="flex items-center gap-2.5"
                                                    >
                                                        <div
                                                            className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center shrink-0"
                                                        >
                                                            <span
                                                                className="text-emerald-700 text-[10px] font-bold"
                                                                >DP</span
                                                            >
                                                        </div>
                                                        <div>
                                                            <p
                                                                className="text-sm font-semibold text-gray-800"
                                                            >
                                                                Dewi Puspita
                                                            </p>
                                                            <p
                                                                className="text-[10.5px] text-gray-400"
                                                            >
                                                                083456789012
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td
                                                    className="px-4 py-3.5 hidden lg:table-cell"
                                                >
                                                    <p
                                                        className="text-sm text-gray-700"
                                                    >
                                                        Kedokteran
                                                    </p>
                                                    <p
                                                        className="text-[10.5px] text-gray-400"
                                                    >
                                                        Pendidikan Dokter
                                                    </p>
                                                </td>
                                                <td
                                                    className="px-4 py-3.5 text-center hidden sm:table-cell"
                                                >
                                                    <span
                                                        className="inline-flex items-center justify-center w-6 h-6 bg-pink-100 rounded-full text-[10px] font-bold text-pink-700"
                                                        >P</span
                                                    >
                                                </td>
                                                <td
                                                    className="px-4 py-3.5 text-center hidden md:table-cell"
                                                >
                                                    <span
                                                        className="text-sm font-semibold text-gray-700"
                                                        >2023</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5">
                                                    <span
                                                        className="inline-flex items-center gap-1.5 text-[10.5px] font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200"
                                                        ><span
                                                            className="w-1.5 h-1.5 bg-emerald-500 rounded-full"
                                                        ></span
                                                        >Aktif Tinggal</span
                                                    >
                                                </td>
                                                <td
                                                    className="px-4 py-3.5 text-center hidden xl:table-cell"
                                                >
                                                    <span
                                                        className="text-sm font-semibold text-gray-700 bg-gray-100 px-2 py-0.5 rounded-md"
                                                        >C-115</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5 text-center">
                                                    <span
                                                        className="inline-flex items-center gap-1 text-sm font-bold text-orange-600 bg-orange-50 px-2.5 py-0.5 rounded-full border border-orange-200"
                                                        ><i
                                                            className="fa-solid fa-triangle-exclamation text-[9px]"
                                                        ></i
                                                        >38</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5 text-center">
                                                    <div
                                                        className="flex items-center justify-center gap-1"
                                                    >
                                                        <button
                                                            className="p-1.5 rounded-lg hover:bg-indigo-50 text-gray-400 hover:text-indigo-600 transition-colors"
                                                        >
                                                            <i
                                                                className="fa-solid fa-eye text-sm"
                                                            ></i>
                                                        </button>
                                                        <button
                                                           
                                                            className="p-1.5 rounded-lg hover:bg-amber-50 text-gray-400 hover:text-amber-600 transition-colors"
                                                        >
                                                            <i
                                                                className="fa-solid fa-pen text-sm"
                                                            ></i>
                                                        </button>
                                                        <button
                                                           
                                                            className="p-1.5 rounded-lg hover:bg-rose-50 text-gray-400 hover:text-rose-600 transition-colors"
                                                        >
                                                            <i
                                                                className="fa-solid fa-trash text-sm"
                                                            ></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>

                                            
                                            <tr
                                                className="table-row hover:bg-indigo-50/25"
                                            >
                                                <td className="px-5 py-3.5">
                                                    <input
                                                        type="checkbox"
                                                        className="w-4 h-4 rounded border-gray-300 text-indigo-600 cursor-pointer"
                                                    />
                                                </td>
                                                <td className="px-4 py-3.5">
                                                    <span
                                                        className="text-sm font-mono font-semibold text-gray-700"
                                                        >2021210033</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5">
                                                    <div
                                                        className="flex items-center gap-2.5"
                                                    >
                                                        <div
                                                            className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center shrink-0"
                                                        >
                                                            <span
                                                                className="text-blue-700 text-[10px] font-bold"
                                                                >MF</span
                                                            >
                                                        </div>
                                                        <div>
                                                            <p
                                                                className="text-sm font-semibold text-gray-800"
                                                            >
                                                                Muhammad Faiz
                                                            </p>
                                                            <p
                                                                className="text-[10.5px] text-gray-400"
                                                            >
                                                                084567890123
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td
                                                    className="px-4 py-3.5 hidden lg:table-cell"
                                                >
                                                    <p
                                                        className="text-sm text-gray-700"
                                                    >
                                                        Hukum
                                                    </p>
                                                    <p
                                                        className="text-[10.5px] text-gray-400"
                                                    >
                                                        Ilmu Hukum
                                                    </p>
                                                </td>
                                                <td
                                                    className="px-4 py-3.5 text-center hidden sm:table-cell"
                                                >
                                                    <span
                                                        className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full text-[10px] font-bold text-blue-700"
                                                        >L</span
                                                    >
                                                </td>
                                                <td
                                                    className="px-4 py-3.5 text-center hidden md:table-cell"
                                                >
                                                    <span
                                                        className="text-sm font-semibold text-gray-700"
                                                        >2021</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5">
                                                    <span
                                                        className="inline-flex items-center gap-1.5 text-[10.5px] font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200"
                                                        ><span
                                                            className="w-1.5 h-1.5 bg-emerald-500 rounded-full"
                                                        ></span
                                                        >Aktif Tinggal</span
                                                    >
                                                </td>
                                                <td
                                                    className="px-4 py-3.5 text-center hidden xl:table-cell"
                                                >
                                                    <span
                                                        className="text-sm font-semibold text-gray-700 bg-gray-100 px-2 py-0.5 rounded-md"
                                                        >A-302</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5 text-center">
                                                    <span
                                                        className="inline-flex items-center gap-1 text-sm font-bold text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200"
                                                        ><i
                                                            className="fa-solid fa-triangle-exclamation text-[9px]"
                                                        ></i
                                                        >25</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5 text-center">
                                                    <div
                                                        className="flex items-center justify-center gap-1"
                                                    >
                                                        <button
                                                            className="p-1.5 rounded-lg hover:bg-indigo-50 text-gray-400 hover:text-indigo-600 transition-colors"
                                                        >
                                                            <i
                                                                className="fa-solid fa-eye text-sm"
                                                            ></i>
                                                        </button>
                                                        <button
                                                           
                                                            className="p-1.5 rounded-lg hover:bg-amber-50 text-gray-400 hover:text-amber-600 transition-colors"
                                                        >
                                                            <i
                                                                className="fa-solid fa-pen text-sm"
                                                            ></i>
                                                        </button>
                                                        <button
                                                           
                                                            className="p-1.5 rounded-lg hover:bg-rose-50 text-gray-400 hover:text-rose-600 transition-colors"
                                                        >
                                                            <i
                                                                className="fa-solid fa-trash text-sm"
                                                            ></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>

                                            
                                            <tr
                                                className="table-row hover:bg-indigo-50/25"
                                            >
                                                <td className="px-5 py-3.5">
                                                    <input
                                                        type="checkbox"
                                                        className="w-4 h-4 rounded border-gray-300 text-indigo-600 cursor-pointer"
                                                    />
                                                </td>
                                                <td className="px-4 py-3.5">
                                                    <span
                                                        className="text-sm font-mono font-semibold text-gray-700"
                                                        >2022310056</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5">
                                                    <div
                                                        className="flex items-center gap-2.5"
                                                    >
                                                        <div
                                                            className="w-8 h-8 bg-rose-100 rounded-lg flex items-center justify-center shrink-0"
                                                        >
                                                            <span
                                                                className="text-rose-700 text-[10px] font-bold"
                                                                >NA</span
                                                            >
                                                        </div>
                                                        <div>
                                                            <p
                                                                className="text-sm font-semibold text-gray-800"
                                                            >
                                                                Nurul Aini
                                                            </p>
                                                            <p
                                                                className="text-[10.5px] text-gray-400"
                                                            >
                                                                085678901234
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td
                                                    className="px-4 py-3.5 hidden lg:table-cell"
                                                >
                                                    <p
                                                        className="text-sm text-gray-700"
                                                    >
                                                        Teknik
                                                    </p>
                                                    <p
                                                        className="text-[10.5px] text-gray-400"
                                                    >
                                                        Teknik Informatika
                                                    </p>
                                                </td>
                                                <td
                                                    className="px-4 py-3.5 text-center hidden sm:table-cell"
                                                >
                                                    <span
                                                        className="inline-flex items-center justify-center w-6 h-6 bg-pink-100 rounded-full text-[10px] font-bold text-pink-700"
                                                        >P</span
                                                    >
                                                </td>
                                                <td
                                                    className="px-4 py-3.5 text-center hidden md:table-cell"
                                                >
                                                    <span
                                                        className="text-sm font-semibold text-gray-700"
                                                        >2022</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5">
                                                    <span
                                                        className="inline-flex items-center gap-1.5 text-[10.5px] font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200"
                                                        ><span
                                                            className="w-1.5 h-1.5 bg-emerald-500 rounded-full"
                                                        ></span
                                                        >Aktif Tinggal</span
                                                    >
                                                </td>
                                                <td
                                                    className="px-4 py-3.5 text-center hidden xl:table-cell"
                                                >
                                                    <span
                                                        className="text-sm font-semibold text-gray-700 bg-gray-100 px-2 py-0.5 rounded-md"
                                                        >D-201</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5 text-center">
                                                    <span
                                                        className="text-sm font-semibold text-gray-700"
                                                        >15</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5 text-center">
                                                    <div
                                                        className="flex items-center justify-center gap-1"
                                                    >
                                                        <button
                                                            className="p-1.5 rounded-lg hover:bg-indigo-50 text-gray-400 hover:text-indigo-600 transition-colors"
                                                        >
                                                            <i
                                                                className="fa-solid fa-eye text-sm"
                                                            ></i>
                                                        </button>
                                                        <button
                                                           
                                                            className="p-1.5 rounded-lg hover:bg-amber-50 text-gray-400 hover:text-amber-600 transition-colors"
                                                        >
                                                            <i
                                                                className="fa-solid fa-pen text-sm"
                                                            ></i>
                                                        </button>
                                                        <button
                                                           
                                                            className="p-1.5 rounded-lg hover:bg-rose-50 text-gray-400 hover:text-rose-600 transition-colors"
                                                        >
                                                            <i
                                                                className="fa-solid fa-trash text-sm"
                                                            ></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>

                                            
                                            <tr
                                                className="table-row hover:bg-indigo-50/25"
                                            >
                                                <td className="px-5 py-3.5">
                                                    <input
                                                        type="checkbox"
                                                        className="w-4 h-4 rounded border-gray-300 text-indigo-600 cursor-pointer"
                                                    />
                                                </td>
                                                <td className="px-4 py-3.5">
                                                    <span
                                                        className="text-sm font-mono font-semibold text-gray-700"
                                                        >2024110098</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5">
                                                    <div
                                                        className="flex items-center gap-2.5"
                                                    >
                                                        <div
                                                            className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center shrink-0"
                                                        >
                                                            <span
                                                                className="text-amber-700 text-[10px] font-bold"
                                                                >SS</span
                                                            >
                                                        </div>
                                                        <div>
                                                            <p
                                                                className="text-sm font-semibold text-gray-800"
                                                            >
                                                                Siti Salimah
                                                            </p>
                                                            <p
                                                                className="text-[10.5px] text-gray-400"
                                                            >
                                                                086789012345
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td
                                                    className="px-4 py-3.5 hidden lg:table-cell"
                                                >
                                                    <p
                                                        className="text-sm text-gray-700"
                                                    >
                                                        Teknik
                                                    </p>
                                                    <p
                                                        className="text-[10.5px] text-gray-400"
                                                    >
                                                        Teknik Informatika
                                                    </p>
                                                </td>
                                                <td
                                                    className="px-4 py-3.5 text-center hidden sm:table-cell"
                                                >
                                                    <span
                                                        className="inline-flex items-center justify-center w-6 h-6 bg-pink-100 rounded-full text-[10px] font-bold text-pink-700"
                                                        >P</span
                                                    >
                                                </td>
                                                <td
                                                    className="px-4 py-3.5 text-center hidden md:table-cell"
                                                >
                                                    <span
                                                        className="text-sm font-semibold text-gray-700"
                                                        >2024</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5">
                                                    <span
                                                        className="inline-flex items-center gap-1.5 text-[10.5px] font-bold px-2.5 py-1 rounded-full bg-amber-100 text-amber-700 border border-amber-200"
                                                        ><span
                                                            className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"
                                                        ></span
                                                        >Menunggu Verifikasi</span
                                                    >
                                                </td>
                                                <td
                                                    className="px-4 py-3.5 text-center hidden xl:table-cell"
                                                >
                                                    <span
                                                        className="text-gray-300 text-base"
                                                        >—</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5 text-center">
                                                    <span
                                                        className="text-sm text-gray-400"
                                                        >0</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5 text-center">
                                                    <div
                                                        className="flex items-center justify-center gap-1"
                                                    >
                                                        <button
                                                            className="p-1.5 rounded-lg hover:bg-indigo-50 text-gray-400 hover:text-indigo-600 transition-colors"
                                                        >
                                                            <i
                                                                className="fa-solid fa-eye text-sm"
                                                            ></i>
                                                        </button>
                                                        <button
                                                           
                                                            className="p-1.5 rounded-lg hover:bg-amber-50 text-gray-400 hover:text-amber-600 transition-colors"
                                                        >
                                                            <i
                                                                className="fa-solid fa-pen text-sm"
                                                            ></i>
                                                        </button>
                                                        <button
                                                           
                                                            className="p-1.5 rounded-lg hover:bg-rose-50 text-gray-400 hover:text-rose-600 transition-colors"
                                                        >
                                                            <i
                                                                className="fa-solid fa-trash text-sm"
                                                            ></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>

                                            
                                            <tr
                                                className="table-row hover:bg-indigo-50/25"
                                            >
                                                <td className="px-5 py-3.5">
                                                    <input
                                                        type="checkbox"
                                                        className="w-4 h-4 rounded border-gray-300 text-indigo-600 cursor-pointer"
                                                    />
                                                </td>
                                                <td className="px-4 py-3.5">
                                                    <span
                                                        className="text-sm font-mono font-semibold text-gray-700"
                                                        >2024210045</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5">
                                                    <div
                                                        className="flex items-center gap-2.5"
                                                    >
                                                        <div
                                                            className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center shrink-0"
                                                        >
                                                            <span
                                                                className="text-teal-700 text-[10px] font-bold"
                                                                >AW</span
                                                            >
                                                        </div>
                                                        <div>
                                                            <p
                                                                className="text-sm font-semibold text-gray-800"
                                                            >
                                                                Andi Wijaya
                                                            </p>
                                                            <p
                                                                className="text-[10.5px] text-gray-400"
                                                            >
                                                                087890123456
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td
                                                    className="px-4 py-3.5 hidden lg:table-cell"
                                                >
                                                    <p
                                                        className="text-sm text-gray-700"
                                                    >
                                                        Ekonomi {'&'} Bisnis
                                                    </p>
                                                    <p
                                                        className="text-[10.5px] text-gray-400"
                                                    >
                                                        Manajemen
                                                    </p>
                                                </td>
                                                <td
                                                    className="px-4 py-3.5 text-center hidden sm:table-cell"
                                                >
                                                    <span
                                                        className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full text-[10px] font-bold text-blue-700"
                                                        >L</span
                                                    >
                                                </td>
                                                <td
                                                    className="px-4 py-3.5 text-center hidden md:table-cell"
                                                >
                                                    <span
                                                        className="text-sm font-semibold text-gray-700"
                                                        >2024</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5">
                                                    <span
                                                        className="inline-flex items-center gap-1.5 text-[10.5px] font-bold px-2.5 py-1 rounded-full bg-amber-100 text-amber-700 border border-amber-200"
                                                        ><span
                                                            className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"
                                                        ></span
                                                        >Menunggu Verifikasi</span
                                                    >
                                                </td>
                                                <td
                                                    className="px-4 py-3.5 text-center hidden xl:table-cell"
                                                >
                                                    <span
                                                        className="text-gray-300 text-base"
                                                        >—</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5 text-center">
                                                    <span
                                                        className="text-sm text-gray-400"
                                                        >0</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5 text-center">
                                                    <div
                                                        className="flex items-center justify-center gap-1"
                                                    >
                                                        <button
                                                            className="p-1.5 rounded-lg hover:bg-indigo-50 text-gray-400 hover:text-indigo-600 transition-colors"
                                                        >
                                                            <i
                                                                className="fa-solid fa-eye text-sm"
                                                            ></i>
                                                        </button>
                                                        <button
                                                           
                                                            className="p-1.5 rounded-lg hover:bg-amber-50 text-gray-400 hover:text-amber-600 transition-colors"
                                                        >
                                                            <i
                                                                className="fa-solid fa-pen text-sm"
                                                            ></i>
                                                        </button>
                                                        <button
                                                           
                                                            className="p-1.5 rounded-lg hover:bg-rose-50 text-gray-400 hover:text-rose-600 transition-colors"
                                                        >
                                                            <i
                                                                className="fa-solid fa-trash text-sm"
                                                            ></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>

                                            
                                            <tr
                                                className="table-row hover:bg-indigo-50/25"
                                            >
                                                <td className="px-5 py-3.5">
                                                    <input
                                                        type="checkbox"
                                                        className="w-4 h-4 rounded border-gray-300 text-indigo-600 cursor-pointer"
                                                    />
                                                </td>
                                                <td className="px-4 py-3.5">
                                                    <span
                                                        className="text-sm font-mono font-semibold text-gray-700"
                                                        >2020510071</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5">
                                                    <div
                                                        className="flex items-center gap-2.5"
                                                    >
                                                        <div
                                                            className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center shrink-0"
                                                        >
                                                            <span
                                                                className="text-slate-600 text-[10px] font-bold"
                                                                >RP</span
                                                            >
                                                        </div>
                                                        <div>
                                                            <p
                                                                className="text-sm font-semibold text-gray-800"
                                                            >
                                                                Rizki Pratama
                                                            </p>
                                                            <p
                                                                className="text-[10.5px] text-gray-400"
                                                            >
                                                                088901234567
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td
                                                    className="px-4 py-3.5 hidden lg:table-cell"
                                                >
                                                    <p
                                                        className="text-sm text-gray-700"
                                                    >
                                                        Ekonomi {'&'} Bisnis
                                                    </p>
                                                    <p
                                                        className="text-[10.5px] text-gray-400"
                                                    >
                                                        Ekonomi Pembangunan
                                                    </p>
                                                </td>
                                                <td
                                                    className="px-4 py-3.5 text-center hidden sm:table-cell"
                                                >
                                                    <span
                                                        className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full text-[10px] font-bold text-blue-700"
                                                        >L</span
                                                    >
                                                </td>
                                                <td
                                                    className="px-4 py-3.5 text-center hidden md:table-cell"
                                                >
                                                    <span
                                                        className="text-sm font-semibold text-gray-700"
                                                        >2020</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5">
                                                    <span
                                                        className="inline-flex items-center gap-1.5 text-[10.5px] font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200"
                                                        ><span
                                                            className="w-1.5 h-1.5 bg-emerald-500 rounded-full"
                                                        ></span
                                                        >Aktif Tinggal</span
                                                    >
                                                </td>
                                                <td
                                                    className="px-4 py-3.5 text-center hidden xl:table-cell"
                                                >
                                                    <span
                                                        className="text-sm font-semibold text-gray-700 bg-gray-100 px-2 py-0.5 rounded-md"
                                                        >B-105</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5 text-center">
                                                    <span
                                                        className="text-sm font-semibold text-gray-700"
                                                        >11</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5 text-center">
                                                    <div
                                                        className="flex items-center justify-center gap-1"
                                                    >
                                                        <button
                                                            className="p-1.5 rounded-lg hover:bg-indigo-50 text-gray-400 hover:text-indigo-600 transition-colors"
                                                        >
                                                            <i
                                                                className="fa-solid fa-eye text-sm"
                                                            ></i>
                                                        </button>
                                                        <button
                                                           
                                                            className="p-1.5 rounded-lg hover:bg-amber-50 text-gray-400 hover:text-amber-600 transition-colors"
                                                        >
                                                            <i
                                                                className="fa-solid fa-pen text-sm"
                                                            ></i>
                                                        </button>
                                                        <button
                                                           
                                                            className="p-1.5 rounded-lg hover:bg-rose-50 text-gray-400 hover:text-rose-600 transition-colors"
                                                        >
                                                            <i
                                                                className="fa-solid fa-trash text-sm"
                                                            ></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>

                                            
                                            <tr
                                                className="table-row hover:bg-indigo-50/25"
                                            >
                                                <td className="px-5 py-3.5">
                                                    <input
                                                        type="checkbox"
                                                        className="w-4 h-4 rounded border-gray-300 text-indigo-600 cursor-pointer"
                                                    />
                                                </td>
                                                <td className="px-4 py-3.5">
                                                    <span
                                                        className="text-sm font-mono font-semibold text-gray-700"
                                                        >2023210043</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5">
                                                    <div
                                                        className="flex items-center gap-2.5"
                                                    >
                                                        <div
                                                            className="w-8 h-8 bg-violet-100 rounded-lg flex items-center justify-center shrink-0"
                                                        >
                                                            <span
                                                                className="text-violet-700 text-[10px] font-bold"
                                                                >PR</span
                                                            >
                                                        </div>
                                                        <div>
                                                            <p
                                                                className="text-sm font-semibold text-gray-800"
                                                            >
                                                                Putri Rahayu
                                                            </p>
                                                            <p
                                                                className="text-[10.5px] text-gray-400"
                                                            >
                                                                089012345678
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td
                                                    className="px-4 py-3.5 hidden lg:table-cell"
                                                >
                                                    <p
                                                        className="text-sm text-gray-700"
                                                    >
                                                        Psikologi
                                                    </p>
                                                    <p
                                                        className="text-[10.5px] text-gray-400"
                                                    >
                                                        Psikologi
                                                    </p>
                                                </td>
                                                <td
                                                    className="px-4 py-3.5 text-center hidden sm:table-cell"
                                                >
                                                    <span
                                                        className="inline-flex items-center justify-center w-6 h-6 bg-pink-100 rounded-full text-[10px] font-bold text-pink-700"
                                                        >P</span
                                                    >
                                                </td>
                                                <td
                                                    className="px-4 py-3.5 text-center hidden md:table-cell"
                                                >
                                                    <span
                                                        className="text-sm font-semibold text-gray-700"
                                                        >2023</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5">
                                                    <span
                                                        className="inline-flex items-center gap-1.5 text-[10.5px] font-bold px-2.5 py-1 rounded-full bg-blue-100 text-blue-700 border border-blue-200"
                                                        ><span
                                                            className="w-1.5 h-1.5 bg-blue-500 rounded-full"
                                                        ></span
                                                        >Diterima</span
                                                    >
                                                </td>
                                                <td
                                                    className="px-4 py-3.5 text-center hidden xl:table-cell"
                                                >
                                                    <span
                                                        className="text-gray-300 text-base"
                                                        >—</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5 text-center">
                                                    <span
                                                        className="text-sm text-gray-400"
                                                        >0</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5 text-center">
                                                    <div
                                                        className="flex items-center justify-center gap-1"
                                                    >
                                                        <button
                                                            className="p-1.5 rounded-lg hover:bg-indigo-50 text-gray-400 hover:text-indigo-600 transition-colors"
                                                        >
                                                            <i
                                                                className="fa-solid fa-eye text-sm"
                                                            ></i>
                                                        </button>
                                                        <button
                                                           
                                                            className="p-1.5 rounded-lg hover:bg-amber-50 text-gray-400 hover:text-amber-600 transition-colors"
                                                        >
                                                            <i
                                                                className="fa-solid fa-pen text-sm"
                                                            ></i>
                                                        </button>
                                                        <button
                                                           
                                                            className="p-1.5 rounded-lg hover:bg-rose-50 text-gray-400 hover:text-rose-600 transition-colors"
                                                        >
                                                            <i
                                                                className="fa-solid fa-trash text-sm"
                                                            ></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>

                                            
                                            <tr
                                                className="table-row hover:bg-indigo-50/25 opacity-70"
                                            >
                                                <td className="px-5 py-3.5">
                                                    <input
                                                        type="checkbox"
                                                        className="w-4 h-4 rounded border-gray-300 text-indigo-600 cursor-pointer"
                                                    />
                                                </td>
                                                <td className="px-4 py-3.5">
                                                    <span
                                                        className="text-sm font-mono font-semibold text-gray-500"
                                                        >2021410022</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5">
                                                    <div
                                                        className="flex items-center gap-2.5"
                                                    >
                                                        <div
                                                            className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center shrink-0"
                                                        >
                                                            <span
                                                                className="text-gray-500 text-[10px] font-bold"
                                                                >DS</span
                                                            >
                                                        </div>
                                                        <div>
                                                            <p
                                                                className="text-sm font-semibold text-gray-500"
                                                            >
                                                                Doni Setiawan
                                                            </p>
                                                            <p
                                                                className="text-[10.5px] text-gray-400"
                                                            >
                                                                081123456789
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td
                                                    className="px-4 py-3.5 hidden lg:table-cell"
                                                >
                                                    <p
                                                        className="text-sm text-gray-500"
                                                    >
                                                        Teknik
                                                    </p>
                                                    <p
                                                        className="text-[10.5px] text-gray-400"
                                                    >
                                                        Teknik Sipil
                                                    </p>
                                                </td>
                                                <td
                                                    className="px-4 py-3.5 text-center hidden sm:table-cell"
                                                >
                                                    <span
                                                        className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full text-[10px] font-bold text-blue-700"
                                                        >L</span
                                                    >
                                                </td>
                                                <td
                                                    className="px-4 py-3.5 text-center hidden md:table-cell"
                                                >
                                                    <span
                                                        className="text-sm font-semibold text-gray-500"
                                                        >2021</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5">
                                                    <span
                                                        className="inline-flex items-center gap-1.5 text-[10.5px] font-bold px-2.5 py-1 rounded-full bg-gray-100 text-gray-500 border border-gray-200"
                                                        ><span
                                                            className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                                                        ></span
                                                        >Keluar Asrama</span
                                                    >
                                                </td>
                                                <td
                                                    className="px-4 py-3.5 text-center hidden xl:table-cell"
                                                >
                                                    <span
                                                        className="text-gray-300 text-base"
                                                        >—</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5 text-center">
                                                    <span
                                                        className="text-sm text-gray-400"
                                                        >8</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5 text-center">
                                                    <div
                                                        className="flex items-center justify-center gap-1"
                                                    >
                                                        <button
                                                            className="p-1.5 rounded-lg hover:bg-indigo-50 text-gray-400 hover:text-indigo-600 transition-colors"
                                                        >
                                                            <i
                                                                className="fa-solid fa-eye text-sm"
                                                            ></i>
                                                        </button>
                                                        <button
                                                           
                                                            className="p-1.5 rounded-lg hover:bg-amber-50 text-gray-400 hover:text-amber-600 transition-colors"
                                                        >
                                                            <i
                                                                className="fa-solid fa-pen text-sm"
                                                            ></i>
                                                        </button>
                                                        <button
                                                           
                                                            className="p-1.5 rounded-lg hover:bg-rose-50 text-gray-400 hover:text-rose-600 transition-colors"
                                                        >
                                                            <i
                                                                className="fa-solid fa-trash text-sm"
                                                            ></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                
                                <div
                                    className="flex flex-col sm:flex-row items-center justify-between gap-3 px-5 py-3.5 border-t border-gray-100 bg-gray-50/60"
                                >
                                    <p className="text-xs text-gray-500">
                                        Menampilkan
                                        <span className="font-bold text-gray-700"
                                            >1–10</span
                                        >
                                        dari
                                        <span className="font-bold text-gray-700"
                                            >247</span
                                        >
                                        mahasiswa
                                    </p>
                                    <div className="flex items-center gap-1">
                                        <button
                                            className="px-2.5 py-1.5 text-xs text-gray-500 hover:bg-gray-200 rounded-lg transition-colors"
                                        >
                                            <i className="fa-solid fa-chevron-left"></i>
                                        </button>
                                        <button
                                            className="px-3 py-1.5 text-xs bg-indigo-600 text-white rounded-lg font-bold shadow-sm"
                                        >
                                            1
                                        </button>
                                        <button
                                            className="px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-200 rounded-lg transition-colors font-medium"
                                        >
                                            2
                                        </button>
                                        <button
                                            className="px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-200 rounded-lg transition-colors font-medium"
                                        >
                                            3
                                        </button>
                                        <span className="px-1.5 text-gray-300 text-xs"
                                            >···</span
                                        >
                                        <button
                                            className="px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-200 rounded-lg transition-colors font-medium"
                                        >
                                            25
                                        </button>
                                        <button
                                            className="px-2.5 py-1.5 text-xs text-gray-500 hover:bg-gray-200 rounded-lg transition-colors"
                                        >
                                            <i
                                                className="fa-solid fa-chevron-right"
                                            ></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
  );
}

function DataKamarView() {
  return (
    <div id="content-kamar" className="block">
                            
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                                <div
                                    className="stat-card bg-white rounded-xl p-3.5 shadow-sm border border-gray-100"
                                >
                                    <p
                                        className="text-[10px] text-gray-400 font-medium uppercase tracking-wider mb-1"
                                    >
                                        Total Kamar
                                    </p>
                                    <p className="text-2xl font-bold text-gray-900">
                                        45
                                    </p>
                                </div>
                                <div
                                    className="stat-card bg-white rounded-xl p-3.5 shadow-sm border border-gray-100"
                                >
                                    <p
                                        className="text-[10px] text-gray-400 font-medium uppercase tracking-wider mb-1"
                                    >
                                        Penuh
                                    </p>
                                    <p className="text-2xl font-bold text-rose-500">
                                        15
                                    </p>
                                </div>
                                <div
                                    className="stat-card bg-white rounded-xl p-3.5 shadow-sm border border-gray-100"
                                >
                                    <p
                                        className="text-[10px] text-gray-400 font-medium uppercase tracking-wider mb-1"
                                    >
                                        Terisi Sebagian
                                    </p>
                                    <p className="text-2xl font-bold text-amber-500">
                                        18
                                    </p>
                                </div>
                                <div
                                    className="stat-card bg-white rounded-xl p-3.5 shadow-sm border border-gray-100"
                                >
                                    <p
                                        className="text-[10px] text-gray-400 font-medium uppercase tracking-wider mb-1"
                                    >
                                        Kosong
                                    </p>
                                    <p className="text-2xl font-bold text-emerald-600">
                                        12
                                    </p>
                                </div>
                            </div>

                            
                            <div
                                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                            >
                                
                                <div
                                    className="flex flex-col sm:flex-row items-start sm:items-center gap-3 px-5 py-4 border-b border-gray-100"
                                >
                                    <div
                                        className="relative flex-1 min-w-0 sm:max-w-xs"
                                    >
                                        <i
                                            className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"
                                        ></i>
                                        <input
                                            type="text"
                                            placeholder="Cari nomor kamar..."
                                            className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50/80"
                                        />
                                    </div>
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <select
                                            className="text-xs border border-gray-200 text-gray-600 rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500 bg-white cursor-pointer"
                                        >
                                            <option value="">Semua Area</option>
                                            <option>Lantai 1 - Hall A</option>
                                            <option>Lantai 1 - Hall B</option>
                                            <option>Lantai 2 - Hall A</option>
                                            <option>Lantai 2 - Hall B</option>
                                        </select>
                                        <select
                                            className="text-xs border border-gray-200 text-gray-600 rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500 bg-white cursor-pointer"
                                        >
                                            <option value="">Semua Status</option>
                                            <option>Kosong</option>
                                            <option>Terisi Sebagian</option>
                                            <option>Penuh</option>
                                            <option>Maintenance</option>
                                        </select>
                                    </div>
                                </div>

                                
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr
                                                className="bg-gray-50/80 border-b border-gray-100"
                                            >
                                                <th
                                                    className="px-5 py-3 text-left w-10"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        className="w-4 h-4 rounded border-gray-300 text-indigo-600 cursor-pointer"
                                                    />
                                                </th>
                                                <th
                                                    className="px-4 py-3 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider"
                                                >
                                                    No. Kamar
                                                </th>
                                                <th
                                                    className="px-4 py-3 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider"
                                                >
                                                    Area / Hall
                                                </th>
                                                <th
                                                    className="px-4 py-3 text-center text-[11px] font-bold text-gray-500 uppercase tracking-wider hidden sm:table-cell"
                                                >
                                                    Lantai
                                                </th>
                                                <th
                                                    className="px-4 py-3 text-center text-[11px] font-bold text-gray-500 uppercase tracking-wider"
                                                >
                                                    Kapasitas
                                                </th>
                                                <th
                                                    className="px-4 py-3 text-center text-[11px] font-bold text-gray-500 uppercase tracking-wider"
                                                >
                                                    Penghuni
                                                </th>
                                                <th
                                                    className="px-4 py-3 text-center text-[11px] font-bold text-gray-500 uppercase tracking-wider hidden md:table-cell"
                                                >
                                                    Sisa Slot
                                                </th>
                                                <th
                                                    className="px-4 py-3 text-center text-[11px] font-bold text-gray-500 uppercase tracking-wider"
                                                >
                                                    Hunian
                                                </th>
                                                <th
                                                    className="px-4 py-3 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider"
                                                >
                                                    Status
                                                </th>
                                                <th
                                                    className="px-4 py-3 text-center text-[11px] font-bold text-gray-500 uppercase tracking-wider"
                                                >
                                                    Aksi
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-50">
                                            
                                            <tr
                                                className="table-row hover:bg-indigo-50/25"
                                            >
                                                <td className="px-5 py-3.5">
                                                    <input
                                                        type="checkbox"
                                                        className="w-4 h-4 rounded border-gray-300 text-indigo-600 cursor-pointer"
                                                    />
                                                </td>
                                                <td className="px-4 py-3.5">
                                                    <span
                                                        className="text-sm font-bold text-gray-800 bg-gray-100 px-2.5 py-1 rounded-lg"
                                                        >A-101</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5">
                                                    <div
                                                        className="flex items-center gap-2"
                                                    >
                                                        <div
                                                            className="w-7 h-7 bg-indigo-100 rounded-lg flex items-center justify-center shrink-0"
                                                        >
                                                            <i
                                                                className="fa-solid fa-layer-group text-indigo-600 text-xs"
                                                            ></i>
                                                        </div>
                                                        <div>
                                                            <p
                                                                className="text-sm font-semibold text-gray-800"
                                                            >
                                                                Hall A
                                                            </p>
                                                            <p
                                                                className="text-[10.5px] text-gray-400"
                                                            >
                                                                Lantai 1
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td
                                                    className="px-4 py-3.5 text-center hidden sm:table-cell"
                                                >
                                                    <span
                                                        className="text-sm font-semibold text-gray-700"
                                                        >1</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5 text-center">
                                                    <span
                                                        className="text-sm font-semibold text-gray-800"
                                                        >6</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5 text-center">
                                                    <span
                                                        className="text-sm font-bold text-gray-900"
                                                        >6</span
                                                    >
                                                </td>
                                                <td
                                                    className="px-4 py-3.5 text-center hidden md:table-cell"
                                                >
                                                    <span
                                                        className="text-sm font-semibold text-rose-600"
                                                        >0</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5">
                                                    <div
                                                        className="w-full bg-gray-100 rounded-full h-1.5"
                                                    >
                                                        <div
                                                            className="bg-rose-500 h-1.5 rounded-full"
                                                            style={{ width: '100%' }}
                                                        ></div>
                                                    </div>
                                                    <p
                                                        className="text-[10px] text-rose-500 font-semibold mt-0.5 text-center"
                                                    >
                                                        100%
                                                    </p>
                                                </td>
                                                <td className="px-4 py-3.5">
                                                    <span
                                                        className="inline-flex items-center gap-1.5 text-[10.5px] font-bold px-2.5 py-1 rounded-full bg-rose-100 text-rose-700 border border-rose-200"
                                                        ><span
                                                            className="w-1.5 h-1.5 bg-rose-500 rounded-full"
                                                        ></span
                                                        >Penuh</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5 text-center">
                                                    <div
                                                        className="flex items-center justify-center gap-1"
                                                    >
                                                        <button
                                                            className="p-1.5 rounded-lg hover:bg-indigo-50 text-gray-400 hover:text-indigo-600 transition-colors"
                                                        >
                                                            <i
                                                                className="fa-solid fa-eye text-sm"
                                                            ></i>
                                                        </button>
                                                        <button
                                                           
                                                            className="p-1.5 rounded-lg hover:bg-amber-50 text-gray-400 hover:text-amber-600 transition-colors"
                                                        >
                                                            <i
                                                                className="fa-solid fa-pen text-sm"
                                                            ></i>
                                                        </button>
                                                        <button
                                                           
                                                            className="p-1.5 rounded-lg hover:bg-rose-50 text-gray-400 hover:text-rose-600 transition-colors"
                                                        >
                                                            <i
                                                                className="fa-solid fa-trash text-sm"
                                                            ></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>

                                            
                                            <tr
                                                className="table-row hover:bg-indigo-50/25"
                                            >
                                                <td className="px-5 py-3.5">
                                                    <input
                                                        type="checkbox"
                                                        className="w-4 h-4 rounded border-gray-300 text-indigo-600 cursor-pointer"
                                                    />
                                                </td>
                                                <td className="px-4 py-3.5">
                                                    <span
                                                        className="text-sm font-bold text-gray-800 bg-gray-100 px-2.5 py-1 rounded-lg"
                                                        >A-102</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5">
                                                    <div
                                                        className="flex items-center gap-2"
                                                    >
                                                        <div
                                                            className="w-7 h-7 bg-indigo-100 rounded-lg flex items-center justify-center shrink-0"
                                                        >
                                                            <i
                                                                className="fa-solid fa-layer-group text-indigo-600 text-xs"
                                                            ></i>
                                                        </div>
                                                        <div>
                                                            <p
                                                                className="text-sm font-semibold text-gray-800"
                                                            >
                                                                Hall A
                                                            </p>
                                                            <p
                                                                className="text-[10.5px] text-gray-400"
                                                            >
                                                                Lantai 1
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td
                                                    className="px-4 py-3.5 text-center hidden sm:table-cell"
                                                >
                                                    <span
                                                        className="text-sm font-semibold text-gray-700"
                                                        >1</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5 text-center">
                                                    <span
                                                        className="text-sm font-semibold text-gray-800"
                                                        >6</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5 text-center">
                                                    <span
                                                        className="text-sm font-bold text-gray-900"
                                                        >4</span
                                                    >
                                                </td>
                                                <td
                                                    className="px-4 py-3.5 text-center hidden md:table-cell"
                                                >
                                                    <span
                                                        className="text-sm font-semibold text-emerald-600"
                                                        >2</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5">
                                                    <div
                                                        className="w-full bg-gray-100 rounded-full h-1.5"
                                                    >
                                                        <div
                                                            className="bg-amber-400 h-1.5 rounded-full"
                                                            style={{ width: '67%' }}
                                                        ></div>
                                                    </div>
                                                    <p
                                                        className="text-[10px] text-amber-600 font-semibold mt-0.5 text-center"
                                                    >
                                                        67%
                                                    </p>
                                                </td>
                                                <td className="px-4 py-3.5">
                                                    <span
                                                        className="inline-flex items-center gap-1.5 text-[10.5px] font-bold px-2.5 py-1 rounded-full bg-amber-100 text-amber-700 border border-amber-200"
                                                        ><span
                                                            className="w-1.5 h-1.5 bg-amber-400 rounded-full"
                                                        ></span
                                                        >Terisi Sebagian</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5 text-center">
                                                    <div
                                                        className="flex items-center justify-center gap-1"
                                                    >
                                                        <button
                                                            className="p-1.5 rounded-lg hover:bg-indigo-50 text-gray-400 hover:text-indigo-600 transition-colors"
                                                        >
                                                            <i
                                                                className="fa-solid fa-eye text-sm"
                                                            ></i>
                                                        </button>
                                                        <button
                                                           
                                                            className="p-1.5 rounded-lg hover:bg-amber-50 text-gray-400 hover:text-amber-600 transition-colors"
                                                        >
                                                            <i
                                                                className="fa-solid fa-pen text-sm"
                                                            ></i>
                                                        </button>
                                                        <button
                                                           
                                                            className="p-1.5 rounded-lg hover:bg-rose-50 text-gray-400 hover:text-rose-600 transition-colors"
                                                        >
                                                            <i
                                                                className="fa-solid fa-trash text-sm"
                                                            ></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>

                                            
                                            <tr
                                                className="table-row hover:bg-indigo-50/25"
                                            >
                                                <td className="px-5 py-3.5">
                                                    <input
                                                        type="checkbox"
                                                        className="w-4 h-4 rounded border-gray-300 text-indigo-600 cursor-pointer"
                                                    />
                                                </td>
                                                <td className="px-4 py-3.5">
                                                    <span
                                                        className="text-sm font-bold text-gray-800 bg-gray-100 px-2.5 py-1 rounded-lg"
                                                        >A-201</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5">
                                                    <div
                                                        className="flex items-center gap-2"
                                                    >
                                                        <div
                                                            className="w-7 h-7 bg-indigo-100 rounded-lg flex items-center justify-center shrink-0"
                                                        >
                                                            <i
                                                                className="fa-solid fa-layer-group text-indigo-600 text-xs"
                                                            ></i>
                                                        </div>
                                                        <div>
                                                            <p
                                                                className="text-sm font-semibold text-gray-800"
                                                            >
                                                                Hall A
                                                            </p>
                                                            <p
                                                                className="text-[10.5px] text-gray-400"
                                                            >
                                                                Lantai 2
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td
                                                    className="px-4 py-3.5 text-center hidden sm:table-cell"
                                                >
                                                    <span
                                                        className="text-sm font-semibold text-gray-700"
                                                        >2</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5 text-center">
                                                    <span
                                                        className="text-sm font-semibold text-gray-800"
                                                        >6</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5 text-center">
                                                    <span
                                                        className="text-sm font-bold text-gray-900"
                                                        >0</span
                                                    >
                                                </td>
                                                <td
                                                    className="px-4 py-3.5 text-center hidden md:table-cell"
                                                >
                                                    <span
                                                        className="text-sm font-semibold text-emerald-600"
                                                        >6</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5">
                                                    <div
                                                        className="w-full bg-gray-100 rounded-full h-1.5"
                                                    >
                                                        <div
                                                            className="bg-emerald-400 h-1.5 rounded-full"
                                                            style={{ width: '0%' }}
                                                        ></div>
                                                    </div>
                                                    <p
                                                        className="text-[10px] text-gray-400 font-semibold mt-0.5 text-center"
                                                    >
                                                        0%
                                                    </p>
                                                </td>
                                                <td className="px-4 py-3.5">
                                                    <span
                                                        className="inline-flex items-center gap-1.5 text-[10.5px] font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200"
                                                        ><span
                                                            className="w-1.5 h-1.5 bg-emerald-500 rounded-full"
                                                        ></span
                                                        >Kosong</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5 text-center">
                                                    <div
                                                        className="flex items-center justify-center gap-1"
                                                    >
                                                        <button
                                                            className="p-1.5 rounded-lg hover:bg-indigo-50 text-gray-400 hover:text-indigo-600 transition-colors"
                                                        >
                                                            <i
                                                                className="fa-solid fa-eye text-sm"
                                                            ></i>
                                                        </button>
                                                        <button
                                                           
                                                            className="p-1.5 rounded-lg hover:bg-amber-50 text-gray-400 hover:text-amber-600 transition-colors"
                                                        >
                                                            <i
                                                                className="fa-solid fa-pen text-sm"
                                                            ></i>
                                                        </button>
                                                        <button
                                                           
                                                            className="p-1.5 rounded-lg hover:bg-rose-50 text-gray-400 hover:text-rose-600 transition-colors"
                                                        >
                                                            <i
                                                                className="fa-solid fa-trash text-sm"
                                                            ></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>

                                            
                                            <tr
                                                className="table-row hover:bg-indigo-50/25"
                                            >
                                                <td className="px-5 py-3.5">
                                                    <input
                                                        type="checkbox"
                                                        className="w-4 h-4 rounded border-gray-300 text-indigo-600 cursor-pointer"
                                                    />
                                                </td>
                                                <td className="px-4 py-3.5">
                                                    <span
                                                        className="text-sm font-bold text-gray-800 bg-gray-100 px-2.5 py-1 rounded-lg"
                                                        >A-302</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5">
                                                    <div
                                                        className="flex items-center gap-2"
                                                    >
                                                        <div
                                                            className="w-7 h-7 bg-indigo-100 rounded-lg flex items-center justify-center shrink-0"
                                                        >
                                                            <i
                                                                className="fa-solid fa-layer-group text-indigo-600 text-xs"
                                                            ></i>
                                                        </div>
                                                        <div>
                                                            <p
                                                                className="text-sm font-semibold text-gray-800"
                                                            >
                                                                Hall A
                                                            </p>
                                                            <p
                                                                className="text-[10.5px] text-gray-400"
                                                            >
                                                                Lantai 3
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td
                                                    className="px-4 py-3.5 text-center hidden sm:table-cell"
                                                >
                                                    <span
                                                        className="text-sm font-semibold text-gray-700"
                                                        >3</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5 text-center">
                                                    <span
                                                        className="text-sm font-semibold text-gray-800"
                                                        >6</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5 text-center">
                                                    <span
                                                        className="text-sm font-bold text-gray-900"
                                                        >3</span
                                                    >
                                                </td>
                                                <td
                                                    className="px-4 py-3.5 text-center hidden md:table-cell"
                                                >
                                                    <span
                                                        className="text-sm font-semibold text-emerald-600"
                                                        >3</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5">
                                                    <div
                                                        className="w-full bg-gray-100 rounded-full h-1.5"
                                                    >
                                                        <div
                                                            className="bg-amber-400 h-1.5 rounded-full"
                                                            style={{ width: '50%' }}
                                                        ></div>
                                                    </div>
                                                    <p
                                                        className="text-[10px] text-amber-600 font-semibold mt-0.5 text-center"
                                                    >
                                                        50%
                                                    </p>
                                                </td>
                                                <td className="px-4 py-3.5">
                                                    <span
                                                        className="inline-flex items-center gap-1.5 text-[10.5px] font-bold px-2.5 py-1 rounded-full bg-amber-100 text-amber-700 border border-amber-200"
                                                        ><span
                                                            className="w-1.5 h-1.5 bg-amber-400 rounded-full"
                                                        ></span
                                                        >Terisi Sebagian</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5 text-center">
                                                    <div
                                                        className="flex items-center justify-center gap-1"
                                                    >
                                                        <button
                                                            className="p-1.5 rounded-lg hover:bg-indigo-50 text-gray-400 hover:text-indigo-600 transition-colors"
                                                        >
                                                            <i
                                                                className="fa-solid fa-eye text-sm"
                                                            ></i>
                                                        </button>
                                                        <button
                                                           
                                                            className="p-1.5 rounded-lg hover:bg-amber-50 text-gray-400 hover:text-amber-600 transition-colors"
                                                        >
                                                            <i
                                                                className="fa-solid fa-pen text-sm"
                                                            ></i>
                                                        </button>
                                                        <button
                                                           
                                                            className="p-1.5 rounded-lg hover:bg-rose-50 text-gray-400 hover:text-rose-600 transition-colors"
                                                        >
                                                            <i
                                                                className="fa-solid fa-trash text-sm"
                                                            ></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>

                                            
                                            <tr
                                                className="table-row hover:bg-indigo-50/25"
                                            >
                                                <td className="px-5 py-3.5">
                                                    <input
                                                        type="checkbox"
                                                        className="w-4 h-4 rounded border-gray-300 text-indigo-600 cursor-pointer"
                                                    />
                                                </td>
                                                <td className="px-4 py-3.5">
                                                    <span
                                                        className="text-sm font-bold text-gray-800 bg-gray-100 px-2.5 py-1 rounded-lg"
                                                        >B-105</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5">
                                                    <div
                                                        className="flex items-center gap-2"
                                                    >
                                                        <div
                                                            className="w-7 h-7 bg-emerald-100 rounded-lg flex items-center justify-center shrink-0"
                                                        >
                                                            <i
                                                                className="fa-solid fa-layer-group text-emerald-600 text-xs"
                                                            ></i>
                                                        </div>
                                                        <div>
                                                            <p
                                                                className="text-sm font-semibold text-gray-800"
                                                            >
                                                                Hall B
                                                            </p>
                                                            <p
                                                                className="text-[10.5px] text-gray-400"
                                                            >
                                                                Lantai 1
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td
                                                    className="px-4 py-3.5 text-center hidden sm:table-cell"
                                                >
                                                    <span
                                                        className="text-sm font-semibold text-gray-700"
                                                        >1</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5 text-center">
                                                    <span
                                                        className="text-sm font-semibold text-gray-800"
                                                        >6</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5 text-center">
                                                    <span
                                                        className="text-sm font-bold text-gray-900"
                                                        >5</span
                                                    >
                                                </td>
                                                <td
                                                    className="px-4 py-3.5 text-center hidden md:table-cell"
                                                >
                                                    <span
                                                        className="text-sm font-semibold text-emerald-600"
                                                        >1</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5">
                                                    <div
                                                        className="w-full bg-gray-100 rounded-full h-1.5"
                                                    >
                                                        <div
                                                            className="bg-amber-400 h-1.5 rounded-full"
                                                            style={{ width: '83%' }}
                                                        ></div>
                                                    </div>
                                                    <p
                                                        className="text-[10px] text-amber-600 font-semibold mt-0.5 text-center"
                                                    >
                                                        83%
                                                    </p>
                                                </td>
                                                <td className="px-4 py-3.5">
                                                    <span
                                                        className="inline-flex items-center gap-1.5 text-[10.5px] font-bold px-2.5 py-1 rounded-full bg-amber-100 text-amber-700 border border-amber-200"
                                                        ><span
                                                            className="w-1.5 h-1.5 bg-amber-400 rounded-full"
                                                        ></span
                                                        >Terisi Sebagian</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5 text-center">
                                                    <div
                                                        className="flex items-center justify-center gap-1"
                                                    >
                                                        <button
                                                            className="p-1.5 rounded-lg hover:bg-indigo-50 text-gray-400 hover:text-indigo-600 transition-colors"
                                                        >
                                                            <i
                                                                className="fa-solid fa-eye text-sm"
                                                            ></i>
                                                        </button>
                                                        <button
                                                           
                                                            className="p-1.5 rounded-lg hover:bg-amber-50 text-gray-400 hover:text-amber-600 transition-colors"
                                                        >
                                                            <i
                                                                className="fa-solid fa-pen text-sm"
                                                            ></i>
                                                        </button>
                                                        <button
                                                           
                                                            className="p-1.5 rounded-lg hover:bg-rose-50 text-gray-400 hover:text-rose-600 transition-colors"
                                                        >
                                                            <i
                                                                className="fa-solid fa-trash text-sm"
                                                            ></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>

                                            
                                            <tr
                                                className="table-row hover:bg-indigo-50/25"
                                            >
                                                <td className="px-5 py-3.5">
                                                    <input
                                                        type="checkbox"
                                                        className="w-4 h-4 rounded border-gray-300 text-indigo-600 cursor-pointer"
                                                    />
                                                </td>
                                                <td className="px-4 py-3.5">
                                                    <span
                                                        className="text-sm font-bold text-gray-800 bg-gray-100 px-2.5 py-1 rounded-lg"
                                                        >B-203</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5">
                                                    <div
                                                        className="flex items-center gap-2"
                                                    >
                                                        <div
                                                            className="w-7 h-7 bg-emerald-100 rounded-lg flex items-center justify-center shrink-0"
                                                        >
                                                            <i
                                                                className="fa-solid fa-layer-group text-emerald-600 text-xs"
                                                            ></i>
                                                        </div>
                                                        <div>
                                                            <p
                                                                className="text-sm font-semibold text-gray-800"
                                                            >
                                                                Hall B
                                                            </p>
                                                            <p
                                                                className="text-[10.5px] text-gray-400"
                                                            >
                                                                Lantai 2
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td
                                                    className="px-4 py-3.5 text-center hidden sm:table-cell"
                                                >
                                                    <span
                                                        className="text-sm font-semibold text-gray-700"
                                                        >2</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5 text-center">
                                                    <span
                                                        className="text-sm font-semibold text-gray-800"
                                                        >6</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5 text-center">
                                                    <span
                                                        className="text-sm font-bold text-gray-900"
                                                        >6</span
                                                    >
                                                </td>
                                                <td
                                                    className="px-4 py-3.5 text-center hidden md:table-cell"
                                                >
                                                    <span
                                                        className="text-sm font-semibold text-rose-600"
                                                        >0</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5">
                                                    <div
                                                        className="w-full bg-gray-100 rounded-full h-1.5"
                                                    >
                                                        <div
                                                            className="bg-rose-500 h-1.5 rounded-full"
                                                            style={{ width: '100%' }}
                                                        ></div>
                                                    </div>
                                                    <p
                                                        className="text-[10px] text-rose-500 font-semibold mt-0.5 text-center"
                                                    >
                                                        100%
                                                    </p>
                                                </td>
                                                <td className="px-4 py-3.5">
                                                    <span
                                                        className="inline-flex items-center gap-1.5 text-[10.5px] font-bold px-2.5 py-1 rounded-full bg-rose-100 text-rose-700 border border-rose-200"
                                                        ><span
                                                            className="w-1.5 h-1.5 bg-rose-500 rounded-full"
                                                        ></span
                                                        >Penuh</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5 text-center">
                                                    <div
                                                        className="flex items-center justify-center gap-1"
                                                    >
                                                        <button
                                                            className="p-1.5 rounded-lg hover:bg-indigo-50 text-gray-400 hover:text-indigo-600 transition-colors"
                                                        >
                                                            <i
                                                                className="fa-solid fa-eye text-sm"
                                                            ></i>
                                                        </button>
                                                        <button
                                                           
                                                            className="p-1.5 rounded-lg hover:bg-amber-50 text-gray-400 hover:text-amber-600 transition-colors"
                                                        >
                                                            <i
                                                                className="fa-solid fa-pen text-sm"
                                                            ></i>
                                                        </button>
                                                        <button
                                                           
                                                            className="p-1.5 rounded-lg hover:bg-rose-50 text-gray-400 hover:text-rose-600 transition-colors"
                                                        >
                                                            <i
                                                                className="fa-solid fa-trash text-sm"
                                                            ></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>

                                            
                                            <tr
                                                className="table-row hover:bg-indigo-50/25"
                                            >
                                                <td className="px-5 py-3.5">
                                                    <input
                                                        type="checkbox"
                                                        className="w-4 h-4 rounded border-gray-300 text-indigo-600 cursor-pointer"
                                                    />
                                                </td>
                                                <td className="px-4 py-3.5">
                                                    <span
                                                        className="text-sm font-bold text-gray-800 bg-gray-100 px-2.5 py-1 rounded-lg"
                                                        >C-115</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5">
                                                    <div
                                                        className="flex items-center gap-2"
                                                    >
                                                        <div
                                                            className="w-7 h-7 bg-indigo-100 rounded-lg flex items-center justify-center shrink-0"
                                                        >
                                                            <i
                                                                className="fa-solid fa-layer-group text-indigo-600 text-xs"
                                                            ></i>
                                                        </div>
                                                        <div>
                                                            <p
                                                                className="text-sm font-semibold text-gray-800"
                                                            >
                                                                Hall A
                                                            </p>
                                                            <p
                                                                className="text-[10.5px] text-gray-400"
                                                            >
                                                                Lantai 1
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td
                                                    className="px-4 py-3.5 text-center hidden sm:table-cell"
                                                >
                                                    <span
                                                        className="text-sm font-semibold text-gray-700"
                                                        >1</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5 text-center">
                                                    <span
                                                        className="text-sm font-semibold text-gray-800"
                                                        >6</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5 text-center">
                                                    <span
                                                        className="text-sm font-bold text-gray-900"
                                                        >6</span
                                                    >
                                                </td>
                                                <td
                                                    className="px-4 py-3.5 text-center hidden md:table-cell"
                                                >
                                                    <span
                                                        className="text-sm font-semibold text-rose-600"
                                                        >0</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5">
                                                    <div
                                                        className="w-full bg-gray-100 rounded-full h-1.5"
                                                    >
                                                        <div
                                                            className="bg-rose-500 h-1.5 rounded-full"
                                                            style={{ width: '100%' }}
                                                        ></div>
                                                    </div>
                                                    <p
                                                        className="text-[10px] text-rose-500 font-semibold mt-0.5 text-center"
                                                    >
                                                        100%
                                                    </p>
                                                </td>
                                                <td className="px-4 py-3.5">
                                                    <span
                                                        className="inline-flex items-center gap-1.5 text-[10.5px] font-bold px-2.5 py-1 rounded-full bg-rose-100 text-rose-700 border border-rose-200"
                                                        ><span
                                                            className="w-1.5 h-1.5 bg-rose-500 rounded-full"
                                                        ></span
                                                        >Penuh</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5 text-center">
                                                    <div
                                                        className="flex items-center justify-center gap-1"
                                                    >
                                                        <button
                                                            className="p-1.5 rounded-lg hover:bg-indigo-50 text-gray-400 hover:text-indigo-600 transition-colors"
                                                        >
                                                            <i
                                                                className="fa-solid fa-eye text-sm"
                                                            ></i>
                                                        </button>
                                                        <button
                                                           
                                                            className="p-1.5 rounded-lg hover:bg-amber-50 text-gray-400 hover:text-amber-600 transition-colors"
                                                        >
                                                            <i
                                                                className="fa-solid fa-pen text-sm"
                                                            ></i>
                                                        </button>
                                                        <button
                                                           
                                                            className="p-1.5 rounded-lg hover:bg-rose-50 text-gray-400 hover:text-rose-600 transition-colors"
                                                        >
                                                            <i
                                                                className="fa-solid fa-trash text-sm"
                                                            ></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>

                                            
                                            <tr
                                                className="table-row hover:bg-indigo-50/25"
                                            >
                                                <td className="px-5 py-3.5">
                                                    <input
                                                        type="checkbox"
                                                        className="w-4 h-4 rounded border-gray-300 text-indigo-600 cursor-pointer"
                                                    />
                                                </td>
                                                <td className="px-4 py-3.5">
                                                    <span
                                                        className="text-sm font-bold text-gray-800 bg-gray-100 px-2.5 py-1 rounded-lg"
                                                        >D-201</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5">
                                                    <div
                                                        className="flex items-center gap-2"
                                                    >
                                                        <div
                                                            className="w-7 h-7 bg-emerald-100 rounded-lg flex items-center justify-center shrink-0"
                                                        >
                                                            <i
                                                                className="fa-solid fa-layer-group text-emerald-600 text-xs"
                                                            ></i>
                                                        </div>
                                                        <div>
                                                            <p
                                                                className="text-sm font-semibold text-gray-800"
                                                            >
                                                                Hall B
                                                            </p>
                                                            <p
                                                                className="text-[10.5px] text-gray-400"
                                                            >
                                                                Lantai 2
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td
                                                    className="px-4 py-3.5 text-center hidden sm:table-cell"
                                                >
                                                    <span
                                                        className="text-sm font-semibold text-gray-700"
                                                        >2</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5 text-center">
                                                    <span
                                                        className="text-sm font-semibold text-gray-800"
                                                        >6</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5 text-center">
                                                    <span
                                                        className="text-sm font-bold text-gray-900"
                                                        >5</span
                                                    >
                                                </td>
                                                <td
                                                    className="px-4 py-3.5 text-center hidden md:table-cell"
                                                >
                                                    <span
                                                        className="text-sm font-semibold text-emerald-600"
                                                        >1</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5">
                                                    <div
                                                        className="w-full bg-gray-100 rounded-full h-1.5"
                                                    >
                                                        <div
                                                            className="bg-amber-400 h-1.5 rounded-full"
                                                            style={{ width: '83%' }}
                                                        ></div>
                                                    </div>
                                                    <p
                                                        className="text-[10px] text-amber-600 font-semibold mt-0.5 text-center"
                                                    >
                                                        83%
                                                    </p>
                                                </td>
                                                <td className="px-4 py-3.5">
                                                    <span
                                                        className="inline-flex items-center gap-1.5 text-[10.5px] font-bold px-2.5 py-1 rounded-full bg-amber-100 text-amber-700 border border-amber-200"
                                                        ><span
                                                            className="w-1.5 h-1.5 bg-amber-400 rounded-full"
                                                        ></span
                                                        >Terisi Sebagian</span
                                                    >
                                                </td>
                                                <td className="px-4 py-3.5 text-center">
                                                    <div
                                                        className="flex items-center justify-center gap-1"
                                                    >
                                                        <button
                                                            className="p-1.5 rounded-lg hover:bg-indigo-50 text-gray-400 hover:text-indigo-600 transition-colors"
                                                        >
                                                            <i
                                                                className="fa-solid fa-eye text-sm"
                                                            ></i>
                                                        </button>
                                                        <button
                                                           
                                                            className="p-1.5 rounded-lg hover:bg-amber-50 text-gray-400 hover:text-amber-600 transition-colors"
                                                        >
                                                            <i
                                                                className="fa-solid fa-pen text-sm"
                                                            ></i>
                                                        </button>
                                                        <button
                                                           
                                                            className="p-1.5 rounded-lg hover:bg-rose-50 text-gray-400 hover:text-rose-600 transition-colors"
                                                        >
                                                            <i
                                                                className="fa-solid fa-trash text-sm"
                                                            ></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                
                                <div
                                    className="flex flex-col sm:flex-row items-center justify-between gap-3 px-5 py-3.5 border-t border-gray-100 bg-gray-50/60"
                                >
                                    <p className="text-xs text-gray-500">
                                        Menampilkan
                                        <span className="font-bold text-gray-700"
                                            >1–8</span
                                        >
                                        dari
                                        <span className="font-bold text-gray-700"
                                            >45</span
                                        >
                                        kamar
                                    </p>
                                    <div className="flex items-center gap-1">
                                        <button
                                            className="px-2.5 py-1.5 text-xs text-gray-500 hover:bg-gray-200 rounded-lg transition-colors"
                                        >
                                            <i className="fa-solid fa-chevron-left"></i>
                                        </button>
                                        <button
                                            className="px-3 py-1.5 text-xs bg-indigo-600 text-white rounded-lg font-bold shadow-sm"
                                        >
                                            1
                                        </button>
                                        <button
                                            className="px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-200 rounded-lg transition-colors font-medium"
                                        >
                                            2
                                        </button>
                                        <button
                                            className="px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-200 rounded-lg transition-colors font-medium"
                                        >
                                            3
                                        </button>
                                        <span className="px-1.5 text-gray-300 text-xs"
                                            >···</span
                                        >
                                        <button
                                            className="px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-200 rounded-lg transition-colors font-medium"
                                        >
                                            6
                                        </button>
                                        <button
                                            className="px-2.5 py-1.5 text-xs text-gray-500 hover:bg-gray-200 rounded-lg transition-colors"
                                        >
                                            <i
                                                className="fa-solid fa-chevron-right"
                                            ></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
  );
}

function JenisPelanggaranView() {
  return (
    <div id="content-pelanggaran" className="block">
                            
                            <div
                                className="bg-amber-50 border border-amber-200 rounded-2xl px-5 py-4 mb-5 flex items-start gap-3"
                            >
                                <div
                                    className="w-8 h-8 bg-amber-100 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                                >
                                    <i
                                        className="fa-solid fa-circle-info text-amber-600 text-sm"
                                    ></i>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-amber-800">
                                        Catatan Penting
                                    </p>
                                    <p className="text-xs text-amber-700 mt-0.5">
                                        Perubahan jenis pelanggaran akan
                                        mempengaruhi seluruh data poin mahasiswa
                                        yang aktif. Pastikan setiap perubahan sudah
                                        disetujui oleh pimpinan asrama.
                                    </p>
                                </div>
                            </div>

                            
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                                <div
                                    className="stat-card bg-white rounded-xl p-3.5 shadow-sm border border-gray-100"
                                >
                                    <p
                                        className="text-[10px] text-gray-400 font-medium uppercase tracking-wider mb-1"
                                    >
                                        Total Jenis
                                    </p>
                                    <p className="text-2xl font-bold text-gray-900">
                                        7
                                    </p>
                                </div>
                                <div
                                    className="stat-card bg-white rounded-xl p-3.5 shadow-sm border border-gray-100"
                                >
                                    <p
                                        className="text-[10px] text-gray-400 font-medium uppercase tracking-wider mb-1"
                                    >
                                        Poin Terendah
                                    </p>
                                    <p className="text-2xl font-bold text-emerald-600">
                                        5
                                    </p>
                                </div>
                                <div
                                    className="stat-card bg-white rounded-xl p-3.5 shadow-sm border border-gray-100"
                                >
                                    <p
                                        className="text-[10px] text-gray-400 font-medium uppercase tracking-wider mb-1"
                                    >
                                        Poin Tertinggi
                                    </p>
                                    <p className="text-2xl font-bold text-rose-500">
                                        20
                                    </p>
                                </div>
                                <div
                                    className="stat-card bg-white rounded-xl p-3.5 shadow-sm border border-gray-100"
                                >
                                    <p
                                        className="text-[10px] text-gray-400 font-medium uppercase tracking-wider mb-1"
                                    >
                                        Kejadian Bulan Ini
                                    </p>
                                    <p className="text-2xl font-bold text-amber-500">
                                        45
                                    </p>
                                </div>
                            </div>

                            
                            <div
                                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                            >
                                
                                <div
                                    className="flex flex-col sm:flex-row items-start sm:items-center gap-3 px-5 py-4 border-b border-gray-100"
                                >
                                    <div
                                        className="relative flex-1 min-w-0 sm:max-w-xs"
                                    >
                                        <i
                                            className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"
                                        ></i>
                                        <input
                                            type="text"
                                            placeholder="Cari jenis pelanggaran..."
                                            className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50/80"
                                        />
                                    </div>
                                    <select
                                        className="text-xs border border-gray-200 text-gray-600 rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500 bg-white cursor-pointer"
                                    >
                                        <option value="">Semua Status</option>
                                        <option>Aktif</option>
                                        <option>Nonaktif</option>
                                    </select>
                                </div>

                                
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr
                                                className="bg-gray-50/80 border-b border-gray-100"
                                            >
                                                <th
                                                    className="px-5 py-3 text-left w-10"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        className="w-4 h-4 rounded border-gray-300 text-indigo-600 cursor-pointer"
                                                    />
                                                </th>
                                                <th
                                                    className="px-4 py-3 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider hidden sm:table-cell"
                                                >
                                                    Kode
                                                </th>
                                                <th
                                                    className="px-4 py-3 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider"
                                                >
                                                    Nama Pelanggaran
                                                </th>
                                                <th
                                                    className="px-4 py-3 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider hidden md:table-cell"
                                                >
                                                    Deskripsi
                                                </th>
                                                <th
                                                    className="px-4 py-3 text-center text-[11px] font-bold text-gray-500 uppercase tracking-wider"
                                                >
                                                    Poin
                                                </th>
                                                <th
                                                    className="px-4 py-3 text-center text-[11px] font-bold text-gray-500 uppercase tracking-wider hidden sm:table-cell"
                                                >
                                                    Kejadian
                                                </th>
                                                <th
                                                    className="px-4 py-3 text-center text-[11px] font-bold text-gray-500 uppercase tracking-wider"
                                                >
                                                    Status
                                                </th>
                                                <th
                                                    className="px-4 py-3 text-center text-[11px] font-bold text-gray-500 uppercase tracking-wider"
                                                >
                                                    Aksi
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-50">
                                            
                                            <tr className="table-row hover:bg-indigo-50/25">
                                                <td className="px-5 py-4">
                                                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-indigo-600 cursor-pointer" />
                                                </td>
                                                <td className="px-4 py-4 hidden sm:table-cell">
                                                    <span className="text-xs font-mono font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded-md">JP001</span>
                                                </td>
                                                <td className="px-4 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-9 h-9 bg-orange-100 rounded-xl flex items-center justify-center shrink-0">
                                                            <i className="fa-solid fa-sun text-orange-500"></i>
                                                        </div>
                                                        <p className="text-sm font-semibold text-gray-800">Mangkir Worship Pagi</p>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-4 hidden md:table-cell">
                                                    <p className="text-xs text-gray-500 max-w-xs leading-relaxed">Mahasiswa tidak hadir dalam ibadah Worship Pagi (05:00).</p>
                                                </td>
                                                <td className="px-4 py-4 text-center">
                                                    <span className="inline-flex items-center justify-center w-10 h-10 bg-orange-100 rounded-xl text-base font-extrabold text-orange-600 border-2 border-orange-200">10</span>
                                                </td>
                                                <td className="px-4 py-4 text-center hidden sm:table-cell">
                                                    <span className="text-sm font-semibold text-gray-700">18</span>
                                                </td>
                                                <td className="px-4 py-4 text-center">
                                                    <span className="inline-flex items-center gap-1.5 text-[10.5px] font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>Aktif</span>
                                                </td>
                                                <td className="px-4 py-4 text-center">
                                                    <div className="flex items-center justify-center gap-1">
                                                        <button className="p-1.5 rounded-lg hover:bg-indigo-50 text-gray-400 hover:text-indigo-600 transition-colors"><i className="fa-solid fa-eye text-sm"></i></button>
                                                        <button className="p-1.5 rounded-lg hover:bg-amber-50 text-gray-400 hover:text-amber-600 transition-colors"><i className="fa-solid fa-pen text-sm"></i></button>
                                                        <button className="p-1.5 rounded-lg hover:bg-rose-50 text-gray-400 hover:text-rose-600 transition-colors"><i className="fa-solid fa-trash text-sm"></i></button>
                                                    </div>
                                                </td>
                                            </tr>

                                            
                                            <tr className="table-row hover:bg-indigo-50/25">
                                                <td className="px-5 py-4">
                                                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-indigo-600 cursor-pointer" />
                                                </td>
                                                <td className="px-4 py-4 hidden sm:table-cell">
                                                    <span className="text-xs font-mono font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded-md">JP002</span>
                                                </td>
                                                <td className="px-4 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-9 h-9 bg-pink-100 rounded-xl flex items-center justify-center shrink-0">
                                                            <i className="fa-solid fa-moon text-pink-500"></i>
                                                        </div>
                                                        <p className="text-sm font-semibold text-gray-800">Mangkir Vesper <span className="text-gray-400 font-normal">(Jumat Malam)</span></p>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-4 hidden md:table-cell">
                                                    <p className="text-xs text-gray-500 max-w-xs leading-relaxed">Mahasiswa tidak hadir dalam ibadah Worship Malam (19:00).</p>
                                                </td>
                                                <td className="px-4 py-4 text-center">
                                                    <span className="inline-flex items-center justify-center w-10 h-10 bg-pink-100 rounded-xl text-base font-extrabold text-pink-600 border-2 border-pink-200">15</span>
                                                </td>
                                                <td className="px-4 py-4 text-center hidden sm:table-cell">
                                                    <span className="text-sm font-semibold text-gray-700">12</span>
                                                </td>
                                                <td className="px-4 py-4 text-center">
                                                    <span className="inline-flex items-center gap-1.5 text-[10.5px] font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>Aktif</span>
                                                </td>
                                                <td className="px-4 py-4 text-center">
                                                    <div className="flex items-center justify-center gap-1">
                                                        <button className="p-1.5 rounded-lg hover:bg-indigo-50 text-gray-400 hover:text-indigo-600 transition-colors"><i className="fa-solid fa-eye text-sm"></i></button>
                                                        <button className="p-1.5 rounded-lg hover:bg-amber-50 text-gray-400 hover:text-amber-600 transition-colors"><i className="fa-solid fa-pen text-sm"></i></button>
                                                        <button className="p-1.5 rounded-lg hover:bg-rose-50 text-gray-400 hover:text-rose-600 transition-colors"><i className="fa-solid fa-trash text-sm"></i></button>
                                                    </div>
                                                </td>
                                            </tr>

                                            
                                            <tr className="table-row hover:bg-indigo-50/25">
                                                <td className="px-5 py-4">
                                                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-indigo-600 cursor-pointer" />
                                                </td>
                                                <td className="px-4 py-4 hidden sm:table-cell">
                                                    <span className="text-xs font-mono font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded-md">JP004</span>
                                                </td>
                                                <td className="px-4 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-9 h-9 bg-red-100 rounded-xl flex items-center justify-center shrink-0">
                                                            <i className="fa-solid fa-church text-red-500"></i>
                                                        </div>
                                                        <p className="text-sm font-semibold text-gray-800">Mangkir Ibadah Sabat <span className="text-gray-400 font-normal">(Sabat Pagi/Sore)</span></p>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-4 hidden md:table-cell">
                                                    <p className="text-xs text-gray-500 max-w-xs leading-relaxed">Mahasiswa tidak hadir dalam salah satu ibadah Sabat (Pagi atau Sore).</p>
                                                </td>
                                                <td className="px-4 py-4 text-center">
                                                    <span className="inline-flex items-center justify-center w-10 h-10 bg-red-100 rounded-xl text-base font-extrabold text-red-600 border-2 border-red-200">20</span>
                                                </td>
                                                <td className="px-4 py-4 text-center hidden sm:table-cell">
                                                    <span className="text-sm font-semibold text-gray-700">7</span>
                                                </td>
                                                <td className="px-4 py-4 text-center">
                                                    <span className="inline-flex items-center gap-1.5 text-[10.5px] font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>Aktif</span>
                                                </td>
                                                <td className="px-4 py-4 text-center">
                                                    <div className="flex items-center justify-center gap-1">
                                                        <button className="p-1.5 rounded-lg hover:bg-indigo-50 text-gray-400 hover:text-indigo-600 transition-colors"><i className="fa-solid fa-eye text-sm"></i></button>
                                                        <button className="p-1.5 rounded-lg hover:bg-amber-50 text-gray-400 hover:text-amber-600 transition-colors"><i className="fa-solid fa-pen text-sm"></i></button>
                                                        <button className="p-1.5 rounded-lg hover:bg-rose-50 text-gray-400 hover:text-rose-600 transition-colors"><i className="fa-solid fa-trash text-sm"></i></button>
                                                    </div>
                                                </td>
                                            </tr>

                                            
                                            <tr className="table-row hover:bg-indigo-50/25">
                                                <td className="px-5 py-4">
                                                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-indigo-600 cursor-pointer" />
                                                </td>
                                                <td className="px-4 py-4 hidden sm:table-cell">
                                                    <span className="text-xs font-mono font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded-md">JP005</span>
                                                </td>
                                                <td className="px-4 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-9 h-9 bg-yellow-100 rounded-xl flex items-center justify-center shrink-0">
                                                            <i className="fa-solid fa-door-closed text-yellow-600"></i>
                                                        </div>
                                                        <p className="text-sm font-semibold text-gray-800">Tidak Berada di Kamar Saat Check Room Malam</p>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-4 hidden md:table-cell">
                                                    <p className="text-xs text-gray-500 max-w-xs leading-relaxed">Mahasiswa tidak ditemukan di kamarnya saat Check Room Malam (21:00).</p>
                                                </td>
                                                <td className="px-4 py-4 text-center">
                                                    <span className="inline-flex items-center justify-center w-10 h-10 bg-yellow-100 rounded-xl text-base font-extrabold text-yellow-700 border-2 border-yellow-200">5</span>
                                                </td>
                                                <td className="px-4 py-4 text-center hidden sm:table-cell">
                                                    <span className="text-sm font-semibold text-gray-700">5</span>
                                                </td>
                                                <td className="px-4 py-4 text-center">
                                                    <span className="inline-flex items-center gap-1.5 text-[10.5px] font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>Aktif</span>
                                                </td>
                                                <td className="px-4 py-4 text-center">
                                                    <div className="flex items-center justify-center gap-1">
                                                        <button className="p-1.5 rounded-lg hover:bg-indigo-50 text-gray-400 hover:text-indigo-600 transition-colors"><i className="fa-solid fa-eye text-sm"></i></button>
                                                        <button className="p-1.5 rounded-lg hover:bg-amber-50 text-gray-400 hover:text-amber-600 transition-colors"><i className="fa-solid fa-pen text-sm"></i></button>
                                                        <button className="p-1.5 rounded-lg hover:bg-rose-50 text-gray-400 hover:text-rose-600 transition-colors"><i className="fa-solid fa-trash text-sm"></i></button>
                                                    </div>
                                                </td>
                                            </tr>

                                            
                                            <tr className="table-row hover:bg-indigo-50/25">
                                                <td className="px-5 py-4">
                                                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-indigo-600 cursor-pointer" />
                                                </td>
                                                <td className="px-4 py-4 hidden sm:table-cell">
                                                    <span className="text-xs font-mono font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded-md">JP006</span>
                                                </td>
                                                <td className="px-4 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-9 h-9 bg-amber-100 rounded-xl flex items-center justify-center shrink-0">
                                                            <i className="fa-solid fa-clock text-amber-500"></i>
                                                        </div>
                                                        <p className="text-sm font-semibold text-gray-800">Pulang Melebihi Jam Malam <span className="text-gray-400 font-normal">(Jam 10 Malam)</span></p>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-4 hidden md:table-cell">
                                                    <p className="text-xs text-gray-500 max-w-xs leading-relaxed">Mahasiswa kembali ke asrama setelah pukul 22:00 tanpa izin resmi.</p>
                                                </td>
                                                <td className="px-4 py-4 text-center">
                                                    <span className="inline-flex items-center justify-center w-10 h-10 bg-yellow-100 rounded-xl text-base font-extrabold text-yellow-700 border-2 border-yellow-200">5</span>
                                                </td>
                                                <td className="px-4 py-4 text-center hidden sm:table-cell">
                                                    <span className="text-sm font-semibold text-gray-700">2</span>
                                                </td>
                                                <td className="px-4 py-4 text-center">
                                                    <span className="inline-flex items-center gap-1.5 text-[10.5px] font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>Aktif</span>
                                                </td>
                                                <td className="px-4 py-4 text-center">
                                                    <div className="flex items-center justify-center gap-1">
                                                        <button className="p-1.5 rounded-lg hover:bg-indigo-50 text-gray-400 hover:text-indigo-600 transition-colors"><i className="fa-solid fa-eye text-sm"></i></button>
                                                        <button className="p-1.5 rounded-lg hover:bg-amber-50 text-gray-400 hover:text-amber-600 transition-colors"><i className="fa-solid fa-pen text-sm"></i></button>
                                                        <button className="p-1.5 rounded-lg hover:bg-rose-50 text-gray-400 hover:text-rose-600 transition-colors"><i className="fa-solid fa-trash text-sm"></i></button>
                                                    </div>
                                                </td>
                                            </tr>

                                            
                                            <tr className="table-row hover:bg-indigo-50/25">
                                                <td className="px-5 py-4">
                                                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-indigo-600 cursor-pointer" />
                                                </td>
                                                <td className="px-4 py-4 hidden sm:table-cell">
                                                    <span className="text-xs font-mono font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded-md">JP007</span>
                                                </td>
                                                <td className="px-4 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-9 h-9 bg-orange-100 rounded-xl flex items-center justify-center shrink-0">
                                                            <i className="fa-solid fa-person-walking-arrow-right text-orange-500"></i>
                                                        </div>
                                                        <p className="text-sm font-semibold text-gray-800">Meninggalkan Area Asrama Tanpa Izin</p>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-4 hidden md:table-cell">
                                                    <p className="text-xs text-gray-500 max-w-xs leading-relaxed">Mahasiswa meninggalkan area asrama tanpa izin resmi dari pengurus.</p>
                                                </td>
                                                <td className="px-4 py-4 text-center">
                                                    <span className="inline-flex items-center justify-center w-10 h-10 bg-orange-100 rounded-xl text-base font-extrabold text-orange-600 border-2 border-orange-200">10</span>
                                                </td>
                                                <td className="px-4 py-4 text-center hidden sm:table-cell">
                                                    <span className="text-sm font-semibold text-gray-700">1</span>
                                                </td>
                                                <td className="px-4 py-4 text-center">
                                                    <span className="inline-flex items-center gap-1.5 text-[10.5px] font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>Aktif</span>
                                                </td>
                                                <td className="px-4 py-4 text-center">
                                                    <div className="flex items-center justify-center gap-1">
                                                        <button className="p-1.5 rounded-lg hover:bg-indigo-50 text-gray-400 hover:text-indigo-600 transition-colors"><i className="fa-solid fa-eye text-sm"></i></button>
                                                        <button className="p-1.5 rounded-lg hover:bg-amber-50 text-gray-400 hover:text-amber-600 transition-colors"><i className="fa-solid fa-pen text-sm"></i></button>
                                                        <button className="p-1.5 rounded-lg hover:bg-rose-50 text-gray-400 hover:text-rose-600 transition-colors"><i className="fa-solid fa-trash text-sm"></i></button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>


                                
                                <div
                                    className="flex items-center justify-between px-5 py-3.5 border-t border-gray-100 bg-gray-50/60"
                                >
                                    <p className="text-xs text-gray-500">
                                        Menampilkan
                                        <span className="font-bold text-gray-700">6</span>
                                        dari
                                        <span className="font-bold text-gray-700">6</span>
                                        jenis pelanggaran
                                    </p>
                                    <p className="text-xs text-gray-400">
                                        Total kejadian bulan ini:
                                        <span className="font-bold text-gray-700">45</span>
                                    </p>
                                </div>
                            </div>
                        </div>
  );
}

function AturanPoinView() {
  return (
    <div id="content-aturan" className="block">
                            
                            <div
                                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-5"
                            >
                                <p
                                    className="text-sm font-bold text-gray-800 mb-4 flex items-center gap-2"
                                >
                                    <i
                                        className="fa-solid fa-diagram-next text-indigo-500"
                                    ></i>
                                    Alur Eskalasi Sanksi
                                </p>
                                <div className="flex flex-wrap items-center gap-2">
                                    
                                    <div
                                        className="flex items-center gap-2.5 bg-blue-50 border border-blue-200 rounded-xl px-4 py-2.5"
                                    >
                                        <div
                                            className="w-7 h-7 bg-blue-500 rounded-lg flex items-center justify-center shrink-0"
                                        >
                                            <span
                                                className="text-white text-[10px] font-bold"
                                                >P1</span
                                            >
                                        </div>
                                        <div>
                                            <p
                                                className="text-xs font-bold text-blue-700"
                                            >
                                                Peringatan 1
                                            </p>
                                            <p className="text-[10px] text-blue-500">
                                                &ge; 10 poin
                                            </p>
                                        </div>
                                    </div>
                                    <i
                                        className="fa-solid fa-arrow-right text-gray-300 text-sm"
                                    ></i>
                                    
                                    <div
                                        className="flex items-center gap-2.5 bg-amber-50 border border-amber-200 rounded-xl px-4 py-2.5"
                                    >
                                        <div
                                            className="w-7 h-7 bg-amber-500 rounded-lg flex items-center justify-center shrink-0"
                                        >
                                            <span
                                                className="text-white text-[10px] font-bold"
                                                >P2</span
                                            >
                                        </div>
                                        <div>
                                            <p
                                                className="text-xs font-bold text-amber-700"
                                            >
                                                Peringatan 2
                                            </p>
                                            <p className="text-[10px] text-amber-500">
                                                &ge; 20 poin
                                            </p>
                                        </div>
                                    </div>
                                    <i
                                        className="fa-solid fa-arrow-right text-gray-300 text-sm"
                                    ></i>
                                    
                                    <div
                                        className="flex items-center gap-2.5 bg-orange-50 border border-orange-200 rounded-xl px-4 py-2.5"
                                    >
                                        <div
                                            className="w-7 h-7 bg-orange-500 rounded-lg flex items-center justify-center shrink-0"
                                        >
                                            <span
                                                className="text-white text-[10px] font-bold"
                                                >PB</span
                                            >
                                        </div>
                                        <div>
                                            <p
                                                className="text-xs font-bold text-orange-700"
                                            >
                                                Pembinaan Khusus
                                            </p>
                                            <p className="text-[10px] text-orange-500">
                                                &ge; 30 poin
                                            </p>
                                        </div>
                                    </div>
                                    <i
                                        className="fa-solid fa-arrow-right text-gray-300 text-sm"
                                    ></i>
                                    
                                    <div
                                        className="flex items-center gap-2.5 bg-rose-50 border border-rose-200 rounded-xl px-4 py-2.5"
                                    >
                                        <div
                                            className="w-7 h-7 bg-rose-600 rounded-lg flex items-center justify-center shrink-0"
                                        >
                                            <span
                                                className="text-white text-[10px] font-bold"
                                                >KL</span
                                            >
                                        </div>
                                        <div>
                                            <p
                                                className="text-xs font-bold text-rose-700"
                                            >
                                                Rekomendasi Keluar
                                            </p>
                                            <p className="text-[10px] text-rose-500">
                                                &ge; 50 poin
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            
                            <div
                                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                            >
                                
                                <div
                                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-5 py-4 border-b border-gray-100"
                                >
                                    <div>
                                        <h3 className="text-sm font-bold text-gray-900">
                                            Tabel Level Sanksi {'&'} Ambang Batas
                                            Poin
                                        </h3>
                                        <p className="text-xs text-gray-400 mt-0.5">
                                            4 level sanksi aktif berdasarkan
                                            akumulasi poin pelanggaran
                                        </p>
                                    </div>
                                </div>

                                
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr
                                                className="bg-gray-50/80 border-b border-gray-100"
                                            >
                                                <th
                                                    className="px-5 py-3 text-left w-10"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        className="w-4 h-4 rounded border-gray-300 text-indigo-600 cursor-pointer"
                                                    />
                                                </th>
                                                <th
                                                    className="px-4 py-3 text-center text-[11px] font-bold text-gray-500 uppercase tracking-wider"
                                                >
                                                    Level
                                                </th>
                                                <th
                                                    className="px-4 py-3 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider"
                                                >
                                                    Nama Sanksi
                                                </th>
                                                <th
                                                    className="px-4 py-3 text-center text-[11px] font-bold text-gray-500 uppercase tracking-wider"
                                                >
                                                    Min Poin
                                                </th>
                                                <th
                                                    className="px-4 py-3 text-center text-[11px] font-bold text-gray-500 uppercase tracking-wider hidden sm:table-cell"
                                                >
                                                    Maks Poin
                                                </th>
                                                <th
                                                    className="px-4 py-3 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider hidden md:table-cell"
                                                >
                                                    Tindakan
                                                </th>
                                                <th
                                                    className="px-4 py-3 text-center text-[11px] font-bold text-gray-500 uppercase tracking-wider hidden lg:table-cell"
                                                >
                                                    Mhs Terkena
                                                </th>
                                                <th
                                                    className="px-4 py-3 text-center text-[11px] font-bold text-gray-500 uppercase tracking-wider"
                                                >
                                                    Aksi
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-50">
                                            
                                            <tr
                                                className="table-row hover:bg-indigo-50/25"
                                            >
                                                <td className="px-5 py-4">
                                                    <input
                                                        type="checkbox"
                                                        className="w-4 h-4 rounded border-gray-300 text-indigo-600 cursor-pointer"
                                                    />
                                                </td>
                                                <td className="px-4 py-4 text-center">
                                                    <div
                                                        className="inline-flex items-center justify-center w-9 h-9 bg-blue-500 rounded-xl shadow-md shadow-blue-200"
                                                    >
                                                        <span
                                                            className="text-white text-[10px] font-extrabold"
                                                            >1</span
                                                        >
                                                    </div>
                                                </td>
                                                <td className="px-4 py-4">
                                                    <div>
                                                        <p
                                                            className="text-sm font-bold text-gray-800"
                                                        >
                                                            Peringatan Pertama
                                                        </p>
                                                        <p
                                                            className="text-[10.5px] text-gray-400 mt-0.5"
                                                        >
                                                            Peringatan tertulis
                                                            resmi
                                                        </p>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-4 text-center">
                                                    <span
                                                        className="inline-flex items-center justify-center min-w-[2.5rem] h-9 bg-blue-100 rounded-xl text-base font-extrabold text-blue-700 px-3 border-2 border-blue-200"
                                                        >10</span
                                                    >
                                                </td>
                                                <td
                                                    className="px-4 py-4 text-center hidden sm:table-cell"
                                                >
                                                    <span
                                                        className="text-sm font-semibold text-gray-600"
                                                        >19</span
                                                    >
                                                </td>
                                                <td
                                                    className="px-4 py-4 hidden md:table-cell"
                                                >
                                                    <p
                                                        className="text-xs text-gray-600 max-w-xs leading-relaxed"
                                                    >
                                                        Mendapatkan surat peringatan
                                                        pertama secara tertulis dari
                                                        pengurus asrama dan orang
                                                        tua diberitahu.
                                                    </p>
                                                </td>
                                                <td
                                                    className="px-4 py-4 text-center hidden lg:table-cell"
                                                >
                                                    <span
                                                        className="inline-flex items-center gap-1 text-sm font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200"
                                                    >
                                                        <i
                                                            className="fa-solid fa-user text-[9px]"
                                                        ></i
                                                        >2 mhs
                                                    </span>
                                                </td>
                                                <td className="px-4 py-4 text-center">
                                                    <div
                                                        className="flex items-center justify-center gap-1"
                                                    >
                                                        <button
                                                            className="p-1.5 rounded-lg hover:bg-indigo-50 text-gray-400 hover:text-indigo-600 transition-colors"
                                                        >
                                                            <i
                                                                className="fa-solid fa-eye text-sm"
                                                            ></i>
                                                        </button>
                                                        <button
                                                           
                                                            className="p-1.5 rounded-lg hover:bg-amber-50 text-gray-400 hover:text-amber-600 transition-colors"
                                                        >
                                                            <i
                                                                className="fa-solid fa-pen text-sm"
                                                            ></i>
                                                        </button>
                                                        <button
                                                           
                                                            className="p-1.5 rounded-lg hover:bg-rose-50 text-gray-400 hover:text-rose-600 transition-colors"
                                                        >
                                                            <i
                                                                className="fa-solid fa-trash text-sm"
                                                            ></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>

                                            
                                            <tr
                                                className="table-row hover:bg-indigo-50/25"
                                            >
                                                <td className="px-5 py-4">
                                                    <input
                                                        type="checkbox"
                                                        className="w-4 h-4 rounded border-gray-300 text-indigo-600 cursor-pointer"
                                                    />
                                                </td>
                                                <td className="px-4 py-4 text-center">
                                                    <div
                                                        className="inline-flex items-center justify-center w-9 h-9 bg-amber-500 rounded-xl shadow-md shadow-amber-200"
                                                    >
                                                        <span
                                                            className="text-white text-[10px] font-extrabold"
                                                            >2</span
                                                        >
                                                    </div>
                                                </td>
                                                <td className="px-4 py-4">
                                                    <div>
                                                        <p
                                                            className="text-sm font-bold text-gray-800"
                                                        >
                                                            Peringatan Kedua
                                                        </p>
                                                        <p
                                                            className="text-[10.5px] text-gray-400 mt-0.5"
                                                        >
                                                            Panggilan wajib ke
                                                            pembimbing
                                                        </p>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-4 text-center">
                                                    <span
                                                        className="inline-flex items-center justify-center min-w-[2.5rem] h-9 bg-amber-100 rounded-xl text-base font-extrabold text-amber-700 px-3 border-2 border-amber-200"
                                                        >20</span
                                                    >
                                                </td>
                                                <td
                                                    className="px-4 py-4 text-center hidden sm:table-cell"
                                                >
                                                    <span
                                                        className="text-sm font-semibold text-gray-600"
                                                        >29</span
                                                    >
                                                </td>
                                                <td
                                                    className="px-4 py-4 hidden md:table-cell"
                                                >
                                                    <p
                                                        className="text-xs text-gray-600 max-w-xs leading-relaxed"
                                                    >
                                                        Mendapatkan surat peringatan
                                                        kedua dan wajib menghadap
                                                        pembimbing asrama bersama
                                                        orang tua/wali.
                                                    </p>
                                                </td>
                                                <td
                                                    className="px-4 py-4 text-center hidden lg:table-cell"
                                                >
                                                    <span
                                                        className="inline-flex items-center gap-1 text-sm font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200"
                                                    >
                                                        <i
                                                            className="fa-solid fa-user text-[9px]"
                                                        ></i
                                                        >1 mhs
                                                    </span>
                                                </td>
                                                <td className="px-4 py-4 text-center">
                                                    <div
                                                        className="flex items-center justify-center gap-1"
                                                    >
                                                        <button
                                                            className="p-1.5 rounded-lg hover:bg-indigo-50 text-gray-400 hover:text-indigo-600 transition-colors"
                                                        >
                                                            <i
                                                                className="fa-solid fa-eye text-sm"
                                                            ></i>
                                                        </button>
                                                        <button
                                                           
                                                            className="p-1.5 rounded-lg hover:bg-amber-50 text-gray-400 hover:text-amber-600 transition-colors"
                                                        >
                                                            <i
                                                                className="fa-solid fa-pen text-sm"
                                                            ></i>
                                                        </button>
                                                        <button
                                                           
                                                            className="p-1.5 rounded-lg hover:bg-rose-50 text-gray-400 hover:text-rose-600 transition-colors"
                                                        >
                                                            <i
                                                                className="fa-solid fa-trash text-sm"
                                                            ></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>

                                            
                                            <tr
                                                className="table-row hover:bg-indigo-50/25"
                                            >
                                                <td className="px-5 py-4">
                                                    <input
                                                        type="checkbox"
                                                        className="w-4 h-4 rounded border-gray-300 text-indigo-600 cursor-pointer"
                                                    />
                                                </td>
                                                <td className="px-4 py-4 text-center">
                                                    <div
                                                        className="inline-flex items-center justify-center w-9 h-9 bg-orange-500 rounded-xl shadow-md shadow-orange-200"
                                                    >
                                                        <span
                                                            className="text-white text-[10px] font-extrabold"
                                                            >3</span
                                                        >
                                                    </div>
                                                </td>
                                                <td className="px-4 py-4">
                                                    <div>
                                                        <p
                                                            className="text-sm font-bold text-gray-800"
                                                        >
                                                            Pembinaan Khusus
                                                        </p>
                                                        <p
                                                            className="text-[10.5px] text-gray-400 mt-0.5"
                                                        >
                                                            Program pembinaan
                                                            intensif
                                                        </p>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-4 text-center">
                                                    <span
                                                        className="inline-flex items-center justify-center min-w-[2.5rem] h-9 bg-orange-100 rounded-xl text-base font-extrabold text-orange-700 px-3 border-2 border-orange-200"
                                                        >30</span
                                                    >
                                                </td>
                                                <td
                                                    className="px-4 py-4 text-center hidden sm:table-cell"
                                                >
                                                    <span
                                                        className="text-sm font-semibold text-gray-600"
                                                        >49</span
                                                    >
                                                </td>
                                                <td
                                                    className="px-4 py-4 hidden md:table-cell"
                                                >
                                                    <p
                                                        className="text-xs text-gray-600 max-w-xs leading-relaxed"
                                                    >
                                                        Wajib mengikuti program
                                                        pembinaan intensif selama 2
                                                        minggu yang diselenggarakan
                                                        pengurus asrama.
                                                    </p>
                                                </td>
                                                <td
                                                    className="px-4 py-4 text-center hidden lg:table-cell"
                                                >
                                                    <span
                                                        className="inline-flex items-center gap-1 text-sm font-bold text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200"
                                                    >
                                                        <i
                                                            className="fa-solid fa-user text-[9px]"
                                                        ></i
                                                        >1 mhs
                                                    </span>
                                                </td>
                                                <td className="px-4 py-4 text-center">
                                                    <div
                                                        className="flex items-center justify-center gap-1"
                                                    >
                                                        <button
                                                            className="p-1.5 rounded-lg hover:bg-indigo-50 text-gray-400 hover:text-indigo-600 transition-colors"
                                                        >
                                                            <i
                                                                className="fa-solid fa-eye text-sm"
                                                            ></i>
                                                        </button>
                                                        <button
                                                           
                                                            className="p-1.5 rounded-lg hover:bg-amber-50 text-gray-400 hover:text-amber-600 transition-colors"
                                                        >
                                                            <i
                                                                className="fa-solid fa-pen text-sm"
                                                            ></i>
                                                        </button>
                                                        <button
                                                           
                                                            className="p-1.5 rounded-lg hover:bg-rose-50 text-gray-400 hover:text-rose-600 transition-colors"
                                                        >
                                                            <i
                                                                className="fa-solid fa-trash text-sm"
                                                            ></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>

                                            
                                            <tr
                                                className="table-row hover:bg-rose-50/30 bg-rose-50/10"
                                            >
                                                <td className="px-5 py-4">
                                                    <input
                                                        type="checkbox"
                                                        className="w-4 h-4 rounded border-gray-300 text-indigo-600 cursor-pointer"
                                                    />
                                                </td>
                                                <td className="px-4 py-4 text-center">
                                                    <div
                                                        className="inline-flex items-center justify-center w-9 h-9 bg-rose-600 rounded-xl shadow-md shadow-rose-200"
                                                    >
                                                        <span
                                                            className="text-white text-[10px] font-extrabold"
                                                            >4</span
                                                        >
                                                    </div>
                                                </td>
                                                <td className="px-4 py-4">
                                                    <div>
                                                        <p
                                                            className="text-sm font-bold text-rose-700"
                                                        >
                                                            Rekomendasi Dikeluarkan
                                                        </p>
                                                        <p
                                                            className="text-[10.5px] text-rose-400 mt-0.5"
                                                        >
                                                            Sanksi tertinggi — tidak
                                                            dapat naik banding
                                                        </p>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-4 text-center">
                                                    <span
                                                        className="inline-flex items-center justify-center min-w-[2.5rem] h-9 bg-rose-100 rounded-xl text-base font-extrabold text-rose-700 px-3 border-2 border-rose-300"
                                                        >50</span
                                                    >
                                                </td>
                                                <td
                                                    className="px-4 py-4 text-center hidden sm:table-cell"
                                                >
                                                    <span
                                                        className="text-sm font-semibold text-gray-500 italic"
                                                        >Tidak terbatas</span
                                                    >
                                                </td>
                                                <td
                                                    className="px-4 py-4 hidden md:table-cell"
                                                >
                                                    <p
                                                        className="text-xs text-gray-600 max-w-xs leading-relaxed"
                                                    >
                                                        Direkomendasikan untuk
                                                        dikeluarkan secara resmi
                                                        dari asrama kepada pimpinan
                                                        institusi. Tidak dapat naik
                                                        banding.
                                                    </p>
                                                </td>
                                                <td
                                                    className="px-4 py-4 text-center hidden lg:table-cell"
                                                >
                                                    <span
                                                        className="inline-flex items-center gap-1 text-sm font-bold text-rose-600 bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200"
                                                    >
                                                        <i
                                                            className="fa-solid fa-user text-[9px]"
                                                        ></i
                                                        >1 mhs
                                                    </span>
                                                </td>
                                                <td className="px-4 py-4 text-center">
                                                    <div
                                                        className="flex items-center justify-center gap-1"
                                                    >
                                                        <button
                                                            className="p-1.5 rounded-lg hover:bg-indigo-50 text-gray-400 hover:text-indigo-600 transition-colors"
                                                        >
                                                            <i
                                                                className="fa-solid fa-eye text-sm"
                                                            ></i>
                                                        </button>
                                                        <button
                                                           
                                                            className="p-1.5 rounded-lg hover:bg-amber-50 text-gray-400 hover:text-amber-600 transition-colors"
                                                        >
                                                            <i
                                                                className="fa-solid fa-pen text-sm"
                                                            ></i>
                                                        </button>
                                                        <button
                                                           
                                                            className="p-1.5 rounded-lg hover:bg-rose-50 text-gray-400 hover:text-rose-600 transition-colors"
                                                        >
                                                            <i
                                                                className="fa-solid fa-trash text-sm"
                                                            ></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                
                                <div
                                    className="flex items-center justify-between px-5 py-3.5 border-t border-gray-100 bg-gray-50/60"
                                >
                                    <p className="text-xs text-gray-500">
                                        4 level sanksi aktif • Total mahasiswa
                                        terkena sanksi:
                                        <span className="font-bold text-gray-700"
                                            >5 mahasiswa</span
                                        >
                                    </p>
                                    <button
                                       
                                        className="text-xs text-indigo-600 font-semibold hover:text-indigo-700 flex items-center gap-1.5 transition-colors"
                                    >
                                        <i className="fa-solid fa-plus text-[9px]"></i>
                                        Tambah Level Baru
                                    </button>
                                </div>
                            </div>
                        </div>
  );
}

type MasterDataPageProps = {
  initialTab?: MasterDataTab;
};

export function MasterDataPage({
  initialTab = "mahasiswa",
}: MasterDataPageProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<MasterDataTab>(initialTab);
  const activeTabDetail = getMasterDataTabDetail(activeTab);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  const handleTabChange = (tab: MasterDataTab) => {
    setActiveTab(tab);
    router.replace(`${pathname}?tab=${tab}`, { scroll: false });
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
            <i className="fa-solid fa-house text-gray-300"></i>
            <span className="text-gray-300">/</span>
            <span className="text-gray-500">Master Data</span>
            <span className="text-gray-300">/</span>
            <span
              id="breadcrumbCurrent"
              className="text-indigo-500 font-semibold"
            >
              {activeTabDetail.breadcrumb}
            </span>
          </div>
          <h1 className="text-2xl sm:text-[28px] font-bold text-gray-900 leading-tight">
            {activeTabDetail.heading}
          </h1>
          <p className="text-gray-500 text-sm mt-1.5">
            Kelola data referensi utama sistem manajemen asrama
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <button className="flex items-center gap-2 px-4 py-2.5 text-sm border border-gray-200 text-gray-600 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all font-medium">
            <i className="fa-solid fa-download text-gray-400 text-xs"></i>
            Export
          </button>
          <button
            id="mainAddBtn"
            type="button"
            className="flex items-center gap-2 px-4 py-2.5 text-sm bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors font-semibold shadow-md shadow-indigo-200 active:scale-95"
          >
            <i className="fa-solid fa-plus text-xs"></i>
            <span id="mainAddBtnLabel">{activeTabDetail.addLabel}</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mb-6 overflow-hidden">
        <div className="flex overflow-x-auto">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                id={`tab-${tab.id}`}
                type="button"
                onClick={() => handleTabChange(tab.id)}
                className={isActive ? activeTabButtonClass : inactiveTabButtonClass}
              >
                <i
                  className={`${tab.icon} ${isActive ? "text-indigo-500" : "text-gray-400"} text-base`}
                ></i>
                {tab.label}
                <span className={isActive ? activeTabBadgeClass : inactiveTabBadgeClass}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {activeTab === "mahasiswa" && <DataMahasiswaView />}
      {activeTab === "kamar" && <DataKamarView />}
      {activeTab === "pelanggaran" && <JenisPelanggaranView />}
      {activeTab === "aturan" && <AturanPoinView />}

      <footer className="text-center py-6 mt-2">
                              <p className="text-xs text-gray-400">
                                  © 2025
                                  <span className="font-semibold text-gray-500"
                                      >SiMARA</span
                                  >
                                  — Sistem Informasi Manajemen Asrama. Versi
                                  1.0.0
                              </p>
                          </footer>
    </>
  );
}
