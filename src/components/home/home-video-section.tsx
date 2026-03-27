"use client";

import Link from "next/link";
import { useRef, useState } from "react";

import { Pause, Play } from "lucide-react";

import { baseFont, heroFont } from "./home-shared";

export function HomeVideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayback = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      await video.play();
      setIsPlaying(true);
      return;
    }

    video.pause();
    setIsPlaying(false);
  };

  return (
    <section className="border-b border-black/15 bg-white" style={baseFont}>
      <div className="mx-auto max-w-[1920px] px-6 py-8 lg:px-8 lg:py-10">
        <div className="mb-6 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-6">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.14em] text-black/55">
              Cómo se desarrollan las clases
            </p>
            <h2
              className="mt-3 text-[clamp(2.1rem,4.8vw,4.8rem)] font-black leading-[0.94] tracking-[-0.07em] text-black"
              style={heroFont}
            >
              Así vive la experiencia de aprendizaje en ENAG PERU
            </h2>
          </div>

          <div className="flex flex-col gap-4 lg:items-end">
            <p className="max-w-sm text-left text-base leading-[1.25] text-black/65 lg:text-right">
              Sesiones guiadas, trabajo aplicado y acompañamiento docente en un
              formato dinámico y orientado a resultados.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/cursos"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-black px-5 text-sm font-medium transition-colors hover:bg-black hover:text-white"
              >
                Ver cursos
              </Link>
              <Link
                href="/checkout"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-black px-5 text-sm font-medium text-white transition-colors hover:bg-black/85"
              >
                Inscribirme
              </Link>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden bg-black">
          <video
            ref={videoRef}
            className="aspect-[16/9] w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            <source src="/classes-showcase.mp4" type="video/mp4" />
          </video>

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.12)_0%,rgba(0,0,0,0.18)_36%,rgba(0,0,0,0.36)_100%)]" />

          <div className="absolute inset-0 flex items-center justify-center">
            <button
              type="button"
              aria-label={isPlaying ? "Pausar video" : "Reproducir video"}
              onClick={togglePlayback}
              className="grid h-24 w-24 place-items-center rounded-full border border-white/70 bg-black/18 text-white backdrop-blur-md transition-transform hover:scale-105 sm:h-32 sm:w-32 lg:h-44 lg:w-44"
            >
              {isPlaying ? (
                <Pause className="h-9 w-9 fill-white/0 stroke-[1.7] sm:h-11 sm:w-11 lg:h-14 lg:w-14" />
              ) : (
                <Play className="ml-1 h-9 w-9 fill-white stroke-[1.5] sm:h-11 sm:w-11 lg:h-14 lg:w-14" />
              )}
            </button>
          </div>

          <div className="absolute left-4 top-4 flex items-center gap-3 text-white sm:left-6 sm:top-6 sm:gap-4 lg:left-8 lg:top-8">
            <div className="grid h-14 w-14 place-items-center rounded-full border border-white/75 text-2xl font-black sm:h-20 sm:w-20 sm:text-4xl">
              E
            </div>
            <div>
              <p className="text-[1rem] leading-none tracking-[-0.04em] sm:text-[1.7rem]">
                ENAG PERU
              </p>
              <p className="mt-1 max-w-[12rem] text-[0.8rem] leading-[1.1] text-white/88 sm:max-w-xs sm:text-[1rem]">
                Escuela Nacional de Alcaldes y Gobernadores del Perú
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
