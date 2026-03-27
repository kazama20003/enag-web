import Link from "next/link";

import { baseFont, heroFont } from "./home-shared";

const metrics = [
  { value: "32", label: "Cursos 2026" },
  { value: "12", label: "Especialidades" },
  { value: "100%", label: "Modalidad online" },
  { value: "24/7", label: "Campus virtual" },
];

export function HomeImpactSection() {
  return (
    <section
      id="programas"
      className="border-y border-black/15 bg-white"
      style={baseFont}
    >
      <div className="grid lg:grid-cols-[minmax(0,1.02fr)_minmax(360px,1fr)]">
        <div className="flex min-h-[auto] flex-col justify-between border-b border-black/15 px-5 py-8 sm:px-6 lg:min-h-[720px] lg:border-b-0 lg:border-r lg:px-8 lg:py-10">
          <div className="max-w-4xl">
            <h2
              className="max-w-5xl text-[clamp(2.25rem,5.5vw,5.4rem)] font-black leading-[0.92] tracking-[-0.075em] text-black"
              style={heroFont}
            >
              Aprende, lidera, decide y transforma con programas diseñados
              para la gestión pública actual.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-[1.28] text-black/72 sm:text-lg lg:mt-6 lg:text-xl">
              Formación práctica para alcaldes, gobernadores, funcionarios y
              profesionales que buscan especialización, actualización y
              resultados concretos.
            </p>

            <div className="mt-7 flex flex-wrap gap-3 lg:mt-8">
              <Link
                href="/cursos"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-black px-6 text-base font-medium text-black transition-colors hover:bg-black hover:text-white"
              >
                Ver cursos
              </Link>
              <Link
                href="/checkout"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-black px-6 text-base font-medium text-white transition-colors hover:bg-black/85"
              >
                Inscribirme
              </Link>
            </div>
          </div>

          <div className="pt-10 lg:pt-12">
            <p
              className="text-[clamp(4.5rem,17vw,15rem)] font-black leading-[0.82] tracking-[-0.08em] text-transparent"
              style={{
                ...heroFont,
                WebkitTextStroke: "1.6px rgba(16,16,16,0.85)",
              }}
            >
              Online
            </p>
          </div>
        </div>

        <div className="grid grid-rows-4">
          {metrics.map((item) => (
            <div
              key={item.label}
              className="grid min-h-[150px] grid-cols-1 items-start gap-4 border-b border-black/15 px-5 py-7 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-6 sm:px-6 lg:min-h-[180px] lg:px-8 lg:py-8"
            >
              <p
                className="min-w-0 text-[clamp(3.6rem,8vw,8rem)] font-black leading-[0.82] tracking-[-0.085em] text-transparent"
                style={{
                  ...heroFont,
                  WebkitTextStroke: "1.4px rgba(16,16,16,0.45)",
                }}
              >
                {item.value}
              </p>
              <p className="pt-1 text-left text-[0.98rem] font-medium text-black sm:whitespace-nowrap sm:pt-2 sm:text-right sm:text-[1.02rem]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
