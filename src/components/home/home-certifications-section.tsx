import Link from "next/link";

import {
  Award,
  BadgeCheck,
  BriefcaseBusiness,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";

import { baseFont, heroFont } from "./home-shared";

const certifications = [
  {
    title: "Certificado de participación institucional",
    description:
      "Reconocimiento emitido por ENAG PERU para participantes que completan satisfactoriamente cursos, seminarios y jornadas de actualización.",
    Icon: GraduationCap,
    accent: "text-[#5f5f5f]",
  },
  {
    title: "Constancia de especialización ejecutiva",
    description:
      "Documento académico para programas de mayor intensidad orientados a liderazgo, gestión territorial e innovación pública.",
    Icon: ShieldCheck,
    accent: "text-[#c8ab74]",
  },
  {
    title: "Certificación en competencias directivas",
    description:
      "Acredita capacidades aplicadas en dirección, toma de decisiones, articulación institucional y gerencia orientada a resultados.",
    Icon: Award,
    accent: "text-[#7a7a7a]",
  },
  {
    title: "Validación para funcionarios y equipos técnicos",
    description:
      "Pensada para servidores públicos, asesores y profesionales que requieren respaldo formativo para desempeño técnico y operativo.",
    Icon: BriefcaseBusiness,
    accent: "text-[#666666]",
  },
  {
    title: "Insignias digitales de logro académico",
    description:
      "Evidencia visual verificable para perfiles profesionales, portafolios y procesos de posicionamiento institucional.",
    Icon: BadgeCheck,
    accent: "text-[#d8c4ea]",
  },
];

export function HomeCertificationsSection() {
  return (
    <section
      className="overflow-hidden border-b border-black/15 bg-[#f6f4ef]"
      style={baseFont}
    >
      <div className="mx-auto max-w-[1920px]">
        <div className="border-b border-black/15 px-5 py-8 sm:px-6 lg:px-10 lg:py-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <h2
              className="text-[clamp(2.15rem,4.8vw,4.6rem)] font-black leading-[0.94] tracking-[-0.07em] text-black"
              style={heroFont}
            >
              Certificaciones que brindamos
            </h2>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/certificacion"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-black px-5 text-sm font-medium transition-colors hover:bg-black hover:text-white"
              >
                Ver certificación
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

        <div className="relative overflow-hidden">
          <div className="grid gap-0 md:flex md:overflow-x-auto md:scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {certifications.map((item) => {
              const Icon = item.Icon;

              return (
                <article
                  key={item.title}
                  className="flex min-h-[460px] min-w-0 flex-1 flex-col border-b border-black/15 bg-[#f6f4ef] px-5 py-7 last:border-b-0 md:min-w-[380px] md:border-b-0 md:border-r md:last:border-r-0 md:px-7 lg:min-h-[620px] lg:min-w-[420px] lg:px-8"
                >
                  <div className="flex min-h-[220px] items-center justify-center lg:min-h-[320px]">
                    <div className="relative grid h-40 w-40 place-items-center rounded-full border border-black/8 bg-white/70 sm:h-52 sm:w-52 lg:h-60 lg:w-60">
                      <div
                        className={`grid h-28 w-28 place-items-center rounded-full border border-current/20 sm:h-36 sm:w-36 ${item.accent}`}
                      >
                        <Icon className="h-12 w-12 stroke-[1.6] sm:h-16 sm:w-16" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto space-y-4">
                    <h3 className="max-w-md text-[1.6rem] font-medium leading-[1.02] tracking-[-0.05em] text-black sm:text-[2rem] lg:text-[2.35rem]">
                      {item.title}
                    </h3>
                    <p className="max-w-md text-[1.02rem] leading-[1.22] text-black/72 lg:text-[1.08rem]">
                      {item.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-20 bg-[linear-gradient(90deg,rgba(246,244,239,0)_0%,rgba(246,244,239,0.98)_70%)] md:block sm:w-28 lg:w-40" />
        </div>
      </div>
    </section>
  );
}
