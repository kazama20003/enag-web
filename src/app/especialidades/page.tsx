import type { Metadata } from "next";
import Image from "next/image";

import { baseFont, heroFont } from "@/components/home/home-shared";

const specialties = [
  {
    title: "Especialización en Inteligencia Artificial para Gestión",
    detail: "96 horas · Online + casos",
    text: "Integra IA en análisis, automatización, productividad institucional y toma de decisiones con enfoque práctico.",
  },
  {
    title: "Especialización en Liderazgo Directivo y Toma de Decisiones",
    detail: "110 horas · Clases en vivo",
    text: "Fortalece criterios de dirección, conducción de equipos y ejecución de políticas en entornos complejos.",
  },
  {
    title: "Especialización en Planeamiento y Gestión por Resultados",
    detail: "104 horas · Campus virtual",
    text: "Aprende a conectar objetivos, indicadores, presupuesto y seguimiento con impacto real en instituciones.",
  },
];

const focusAreas = [
  "Gestión pública moderna",
  "Innovación y transformación digital",
  "Liderazgo directivo",
  "Planeamiento estratégico",
];

export const metadata: Metadata = {
  title: "Especialidades",
  description:
    "Especialidades de ENAG PERU para liderazgo, gestión pública, innovación e inteligencia artificial aplicada.",
};

export default function EspecialidadesPage() {
  return (
    <main className="min-h-screen bg-[#f4f1eb] text-black" style={baseFont}>
      <section className="border-y border-black/15 bg-white">
        <div className="mx-auto grid max-w-[1920px] lg:grid-cols-[1.02fr_0.98fr]">
          <div className="border-b border-black/15 px-6 py-10 lg:border-b-0 lg:border-r lg:px-8 lg:py-12">
            <p className="text-sm uppercase tracking-[0.16em] text-black/55">
              Especialidades ENAG PERU
            </p>
            <h1
              className="mt-4 max-w-5xl text-[clamp(3rem,6vw,6.1rem)] font-black leading-[0.9] tracking-[-0.08em]"
              style={heroFont}
            >
              Formación especializada para liderar con criterio, actualización y visión.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-[1.25] text-black/72 lg:text-[1.24rem]">
              Nuestras especialidades están orientadas a autoridades,
              funcionarios y profesionales que requieren una formación más
              enfocada, con herramientas aplicables y acompañamiento académico.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#oferta"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-black px-6 text-sm font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-black/85"
              >
                Ver especialidades
              </a>
              <a
                href="/checkout"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-black px-6 text-sm font-semibold uppercase tracking-[0.08em] transition-colors hover:bg-black hover:text-white"
              >
                Inscribirme
              </a>
            </div>
          </div>

          <div className="relative min-h-[340px]">
            <Image
              src="/course-online.jpg"
              alt="Profesional revisando clases y contenido de especialización"
              width={1200}
              height={800}
              className="h-full w-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.34)_100%)]" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white lg:p-8">
              <p className="text-sm uppercase tracking-[0.14em] text-white/72">
                Enfoque aplicado
              </p>
              <p className="mt-2 max-w-md text-lg leading-[1.18] lg:text-[1.22rem]">
                Especializaciones diseñadas para mejorar gestión, liderazgo e innovación institucional.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="oferta" className="border-b border-black/15 bg-[#f8f5ef]">
        <div className="mx-auto max-w-[1920px] px-6 py-8 lg:px-8 lg:py-10">
          <div className="grid gap-0 lg:grid-cols-3">
            {specialties.map((item, index) => (
              <article
                key={item.title}
                className={`border-b border-black/15 px-6 py-8 lg:px-8 ${
                  index !== specialties.length - 1 ? "lg:border-r" : ""
                }`}
              >
                <p className="text-sm uppercase tracking-[0.14em] text-black/55">
                  {item.detail}
                </p>
                <h2
                  className="mt-4 text-[clamp(2rem,3.15vw,3.2rem)] font-black leading-[0.95] tracking-[-0.06em]"
                  style={heroFont}
                >
                  {item.title}
                </h2>
                <p className="mt-4 text-base leading-[1.24] text-black/68">
                  {item.text}
                </p>
                <a
                  href="/checkout"
                  className="mt-7 inline-flex min-h-11 items-center justify-center rounded-full border border-black px-5 text-sm font-semibold uppercase tracking-[0.08em] transition-colors hover:bg-black hover:text-white"
                >
                  Inscribirme
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/15 bg-white">
        <div className="mx-auto grid max-w-[1920px] lg:grid-cols-[0.92fr_1.08fr]">
          <div className="border-b border-black/15 px-6 py-8 lg:border-b-0 lg:border-r lg:px-8 lg:py-10">
            <p className="text-sm uppercase tracking-[0.16em] text-black/55">
              Áreas de enfoque
            </p>
            <h2
              className="mt-3 max-w-3xl text-[clamp(2.2rem,4vw,4.1rem)] font-black leading-[0.95] tracking-[-0.07em]"
              style={heroFont}
            >
              Especialidades pensadas para retos concretos de gestión y dirección.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-[1.25] text-black/68 lg:text-[1.08rem]">
              Cada programa profundiza en capacidades que hoy exigen las
              instituciones: mejor análisis, más orden estratégico y ejecución
              con herramientas actuales.
            </p>
          </div>

          <div className="grid sm:grid-cols-2">
            {focusAreas.map((item, index) => (
              <div
                key={item}
                className={`border-b border-black/15 px-6 py-8 lg:px-8 lg:py-10 ${
                  index % 2 === 0 ? "sm:border-r" : ""
                }`}
              >
                <p
                  className="text-[clamp(2rem,3.2vw,3.1rem)] font-black leading-[0.96] tracking-[-0.055em]"
                  style={heroFont}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
