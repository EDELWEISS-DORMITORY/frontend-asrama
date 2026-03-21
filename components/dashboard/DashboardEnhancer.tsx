"use client";

import { useEffect, useState } from "react";
import { Chart } from "chart.js/auto";
import type { ScriptableContext, TooltipItem } from "chart.js";

function createVerticalGradient(
  context: ScriptableContext<"line">,
  startColor: string,
  endColor: string,
) {
  const { chart } = context;
  const { ctx, chartArea } = chart;

  if (!chartArea) {
    return "transparent";
  }

  const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
  gradient.addColorStop(0, startColor);
  gradient.addColorStop(1, endColor);

  return gradient;
}

export function DashboardEnhancer() {
  const [floorPlanTitle, setFloorPlanTitle] = useState<string | null>(null);

  useEffect(() => {
    const trendCanvas = document.getElementById("trendChart") as HTMLCanvasElement | null;
    const roomCanvas = document.getElementById("roomStatusChart") as HTMLCanvasElement | null;

    let trendChart: Chart | null = null;
    let roomChart: Chart | null = null;

    if (trendCanvas) {
      trendChart = new Chart(trendCanvas, {
        type: "line",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun"],
          datasets: [
            {
              label: "Penghuni Aktif",
              data: [215, 228, 235, 240, 245, 247],
              borderColor: "#6366f1",
              backgroundColor: (context: ScriptableContext<"line">) =>
                createVerticalGradient(
                  context,
                  "rgba(99,102,241,0.18)",
                  "rgba(99,102,241,0.0)",
                ),
              borderWidth: 2.5,
              pointBackgroundColor: "#fff",
              pointBorderColor: "#6366f1",
              pointBorderWidth: 2.5,
              pointRadius: 4,
              pointHoverRadius: 7,
              tension: 0.4,
              fill: true,
              yAxisID: "y",
            },
            {
              label: "Pelanggaran",
              data: [18, 22, 29, 25, 30, 34],
              borderColor: "#f87171",
              backgroundColor: (context: ScriptableContext<"line">) =>
                createVerticalGradient(
                  context,
                  "rgba(248,113,113,0.14)",
                  "rgba(248,113,113,0.0)",
                ),
              borderWidth: 2.5,
              pointBackgroundColor: "#fff",
              pointBorderColor: "#f87171",
              pointBorderWidth: 2.5,
              pointRadius: 4,
              pointHoverRadius: 7,
              tension: 0.4,
              fill: true,
              yAxisID: "y1",
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: { intersect: false, mode: "index" },
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: "#1e293b",
              titleColor: "#94a3b8",
              bodyColor: "#f1f5f9",
              padding: 14,
              cornerRadius: 12,
              borderColor: "#334155",
              borderWidth: 1,
              displayColors: true,
              boxPadding: 4,
              callbacks: {
                label: (context: TooltipItem<"line">) => {
                  const unit =
                    context.datasetIndex === 0 ? " mahasiswa" : " kasus";
                  return `${context.dataset.label}: ${context.parsed.y}${unit}`;
                },
              },
            },
          },
          scales: {
            x: {
              grid: { display: false },
              border: { display: false },
              ticks: {
                color: "#94a3b8",
                font: { size: 11, family: "Inter" },
              },
            },
            y: {
              position: "left",
              grid: { color: "#f1f5f9", lineWidth: 1 },
              border: { display: false, dash: [4, 4] },
              ticks: {
                color: "#94a3b8",
                font: { size: 11, family: "Inter" },
                padding: 8,
              },
              min: 200,
              max: 265,
            },
            y1: {
              position: "right",
              grid: { display: false },
              border: { display: false },
              ticks: {
                color: "#fca5a5",
                font: { size: 11, family: "Inter" },
                padding: 8,
              },
              min: 0,
              max: 50,
            },
          },
        },
      });
    }

    if (roomCanvas) {
      roomChart = new Chart(roomCanvas, {
        type: "doughnut",
        data: {
          labels: ["Penuh", "Terisi Sebagian", "Kosong"],
          datasets: [
            {
              data: [15, 18, 12],
              backgroundColor: ["#f43f5e", "#fbbf24", "#10b981"],
              borderColor: "#ffffff",
              borderWidth: 4,
              hoverBorderWidth: 4,
              hoverOffset: 8,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: "74%",
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: "#1e293b",
              titleColor: "#94a3b8",
              bodyColor: "#f1f5f9",
              padding: 12,
              cornerRadius: 10,
              borderColor: "#334155",
              borderWidth: 1,
              callbacks: {
                label: (context: TooltipItem<"doughnut">) => {
                  const dataset = context.dataset.data as number[];
                  const total = dataset.reduce((sum, value) => sum + value, 0);
                  const percentage = Math.round((context.parsed / total) * 100);

                  return ` ${context.label}: ${context.parsed} kamar (${percentage}%)`;
                },
              },
            },
          },
        },
      });
    }

    return () => {
      trendChart?.destroy();
      roomChart?.destroy();
    };
  }, []);

  useEffect(() => {
    const triggers = Array.from(
      document.querySelectorAll<HTMLElement>("[data-floor-plan-trigger='true']"),
    );

    const cleanups = triggers.map((trigger) => {
      const openModal = () => {
        setFloorPlanTitle(trigger.dataset.floorPlanTitle ?? "Gedung A");
      };

      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openModal();
        }
      };

      trigger.addEventListener("click", openModal);
      trigger.addEventListener("keydown", handleKeyDown);

      return () => {
        trigger.removeEventListener("click", openModal);
        trigger.removeEventListener("keydown", handleKeyDown);
      };
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  useEffect(() => {
    const closeModal = () => setFloorPlanTitle(null);
    const backdrop = document.getElementById("floorPlanModalBackdrop");
    const closeButton = document.getElementById("closeFloorPlanModalBtn");
    const closeIcon = document.getElementById("closeFloorPlanModalIcon");

    const closers = [backdrop, closeButton, closeIcon].filter(
      Boolean,
    ) as HTMLElement[];

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    closers.forEach((element) => element.addEventListener("click", closeModal));
    document.addEventListener("keydown", handleEscape);

    return () => {
      closers.forEach((element) =>
        element.removeEventListener("click", closeModal),
      );
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    const modal = document.getElementById("floorPlanModal");
    const title = document.getElementById("floorPlanModalTitle");

    if (!modal || !title) {
      return;
    }

    if (floorPlanTitle) {
      title.textContent = `Visualisasi Denah Kamar ${floorPlanTitle}`;
      modal.classList.remove("hidden");
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    } else {
      modal.classList.add("hidden");
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [floorPlanTitle]);

  return null;
}
