import Link from "next/link";

import { baseFont, heroFont } from "./home-shared";

export function HomeHero() {
  return (
    <section className="relative isolate -mt-px overflow-hidden">
      <div className="relative flex h-[calc(100svh-96px)] min-h-[480px] w-full items-start px-0 sm:min-h-[560px] lg:min-h-[720px]">
        <div className="relative w-full overflow-hidden bg-black">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src="/hero-training.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/42" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,16,16,0.16)_0%,rgba(16,16,16,0.18)_34%,rgba(16,16,16,0.48)_100%)]" />

          <div className="relative z-10 flex h-[calc(100svh-96px)] min-h-[480px] items-center justify-center px-4 py-8 sm:px-8 sm:py-10 lg:min-h-[720px]">
            <div className="relative flex w-full max-w-[1780px] flex-col items-center justify-start px-2 text-center text-white sm:px-4">
              <p
                className="text-[clamp(0.95rem,2.2vw,2rem)] font-bold uppercase tracking-[-0.06em]"
                style={heroFont}
              >
                ENAG PERU
              </p>
              <h1
                className="mt-2 max-w-6xl text-[clamp(2.55rem,10vw,8rem)] font-black uppercase leading-[0.88] tracking-[-0.1em]"
                style={heroFont}
              >
                Formación para el liderazgo público
              </h1>
              <p
                className="mt-4 max-w-3xl text-balance text-sm font-medium leading-[1.25] text-white/90 sm:mt-5 sm:text-base lg:text-[1.08rem]"
                style={baseFont}
              >
                Cursos, diplomados y capacitación ejecutiva para alcaldes,
                gobernadores, funcionarios y profesionales con enfoque
                práctico y visión institucional.
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:mt-7 sm:gap-4">
                <Link
                  href="/cursos"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5"
                  style={baseFont}
                >
                  Ver nuestros cursos
                </Link>
                <Link
                  href="/checkout"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/60 px-7 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-black"
                  style={baseFont}
                >
                  Inscribirme
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
