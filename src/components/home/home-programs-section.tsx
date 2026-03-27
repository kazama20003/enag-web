import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { baseFont, heroFont } from "./home-shared";

const programs = [
  {
    edition: "8a EDICIÓN · JULIO 2026",
    title: "Programa Ejecutivo en Gestión Municipal y Liderazgo Territorial",
    description:
      "Herramientas para planificar, decidir y ejecutar con enfoque ciudadano desde gobiernos locales.",
    href: "/cursos",
    className:
      "bg-[#f5f3ee] text-black md:before:absolute md:before:-left-8 md:before:bottom-20 md:before:h-28 md:before:w-80 md:before:rotate-[-8deg] md:before:bg-[repeating-linear-gradient(90deg,#0f0f0f_0_12px,transparent_12px_18px)] md:before:opacity-90 md:after:absolute md:after:left-10 md:after:top-12 md:after:h-24 md:after:w-64 md:after:rotate-[10deg] md:after:bg-[repeating-linear-gradient(90deg,#0f0f0f_0_22px,transparent_22px_34px)] md:after:opacity-95",
  },
  {
    edition: "12a EDICIÓN · AGOSTO 2026",
    title: "Diplomado en Gobernanza Regional, Innovación y Transformación Pública",
    description:
      "Capacitación para fortalecer dirección estratégica, articulación institucional y gestión moderna.",
    href: "/diplomados",
    className:
      "bg-[linear-gradient(135deg,#ebd7ca_0%,#f5ebe4_38%,#d7c0b1_100%)] text-black md:before:absolute md:before:right-[-4%] md:before:top-[-12%] md:before:h-80 md:before:w-40 md:before:rotate-[24deg] md:before:rounded-[3rem] md:before:bg-[#d27a53]/75 md:after:absolute md:after:right-8 md:after:top-10 md:after:h-44 md:after:w-44 md:after:rounded-full md:after:bg-[#4a55d8] md:after:[background-image:radial-gradient(#d7dafb_1.5px,transparent_1.5px)] md:after:[background-size:16px_16px]",
  },
  {
    edition: "6a EDICIÓN · SETIEMBRE 2026",
    title: "Curso de Inteligencia Artificial Aplicada a la Gestión y los Servicios Públicos",
    description:
      "Integra IA en procesos, análisis de datos, comunicación y automatización institucional.",
    href: "/especialidades",
    className:
      "bg-[#63d0d0] text-black md:before:absolute md:before:right-[-8%] md:before:top-10 md:before:h-56 md:before:w-56 md:before:rounded-full md:before:bg-[#ff5a2a] md:before:opacity-95 md:after:absolute md:after:right-16 md:after:top-20 md:after:h-28 md:after:w-28 md:after:rounded-full md:after:bg-[#2e43d6] md:after:[background-image:radial-gradient(#d7dafb_1.5px,transparent_1.5px)] md:after:[background-size:14px_14px]",
  },
  {
    edition: "10a EDICIÓN · OCTUBRE 2026",
    title: "Especialización en Comunicación, Imagen Institucional y Dirección Pública",
    description:
      "Diseñada para equipos que necesitan posicionamiento, claridad narrativa y liderazgo en entornos complejos.",
    href: "/especialidades",
    className:
      "bg-[#e287ef] text-black md:before:absolute md:before:left-[34%] md:before:top-0 md:before:h-full md:before:w-[66%] md:before:bg-[linear-gradient(180deg,#f6d2ac_0%,#f7c98c_100%)] md:after:absolute md:after:right-0 md:after:bottom-0 md:after:h-[54%] md:after:w-[42%] md:after:bg-[linear-gradient(180deg,#24c8e8_0%,#0ca0c8_100%)]",
  },
];

export function HomeProgramsSection() {
  return (
    <section className="border-b border-black/15 bg-white" style={baseFont}>
      <div className="mx-auto max-w-[1920px]">
        <div className="border-b border-black/15 px-5 py-8 sm:px-6 lg:px-10 lg:py-12">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 text-center">
            <h2
              className="text-[clamp(2.15rem,5vw,5.2rem)] font-black leading-[0.92] tracking-[-0.075em] text-black"
              style={heroFont}
            >
              Nuestros programas de capacitación, especialización y
              actualización preparan a autoridades y profesionales para los
              desafíos que ya están en marcha.
            </h2>

            <div className="flex flex-wrap justify-center gap-3">
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

        <div className="grid md:grid-cols-2">
          {programs.map((program) => (
            <article
              key={program.title}
              className={`group relative isolate min-h-[340px] overflow-hidden border-b border-black/15 p-5 sm:p-6 md:min-h-[380px] md:border-r even:md:border-r-0 lg:min-h-[430px] lg:p-8 ${program.className}`}
            >
              <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-xs font-medium uppercase tracking-[-0.03em] sm:text-sm">
                    {program.edition}
                  </p>
                  <p className="text-xs uppercase tracking-[0.08em] text-black/70">
                    ENAG PERU
                  </p>
                </div>

                <div className="mt-4 max-w-full md:max-w-[92%]">
                  <h3
                    className="text-[clamp(1.85rem,4.6vw,4.4rem)] font-black leading-[0.92] tracking-[-0.07em]"
                    style={heroFont}
                  >
                    {program.title}
                  </h3>

                  <p className="mt-4 max-w-2xl text-base leading-[1.24] text-black/85 sm:text-lg lg:mt-5 lg:text-[1.12rem]">
                    {program.description}
                  </p>
                </div>

                <div className="mt-auto pt-8 sm:pt-10">
                  <Link
                    href={program.href}
                    className="inline-flex items-center gap-3 text-base font-medium transition-transform duration-200 group-hover:translate-x-1"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-black/70">
                      <ArrowRight className="size-5" />
                    </span>
                    <span>Ver programa</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
