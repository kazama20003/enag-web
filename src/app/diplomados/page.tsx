import type { Metadata } from "next";
import Image from "next/image";

import { baseFont, heroFont } from "@/components/home/home-shared";

const diplomados = [
  {
    title: "Diplomado en Gobernanza Regional e Innovación Pública",
    detail: "160 horas · Modalidad online · Inicio Agosto 2026",
    text: "Fortalece visión estratégica, articulación interinstitucional y capacidad ejecutiva para liderar transformaciones sostenibles.",
  },
  {
    title: "Diplomado en Comunicación, Imagen y Liderazgo Institucional",
    detail: "140 horas · Clases en vivo · Inicio Octubre 2026",
    text: "Diseñado para equipos y directivos que necesitan posicionamiento, claridad narrativa y gestión del mensaje público.",
  },
  {
    title: "Diplomado en Planeamiento, Presupuesto y Gestión por Resultados",
    detail: "150 horas · Campus virtual · Inicio Noviembre 2026",
    text: "Convierte objetivos institucionales en ejecución medible con herramientas para planificación, seguimiento y control.",
  },
];

const benefits = [
  "Docentes con experiencia aplicada en gestión pública y dirección institucional.",
  "Clases en vivo, campus virtual y recursos descargables para estudio flexible.",
  "Certificación académica orientada a fortalecer perfil profesional y desempeño directivo.",
];

export const metadata: Metadata = {
  title: "Diplomados",
  description:
    "Diplomados de ENAG PERU para liderazgo, gobernanza, comunicación institucional y gestión pública.",
};

export default function DiplomadosPage() {
  return (
    <main className="min-h-screen bg-[#f4f1eb] text-black" style={baseFont}>
      <section className="border-y border-black/15 bg-white">
        <div className="mx-auto grid max-w-[1920px] lg:grid-cols-[1.05fr_0.95fr]">
          <div className="border-b border-black/15 px-6 py-10 lg:border-b-0 lg:border-r lg:px-8 lg:py-12">
            <p className="text-sm uppercase tracking-[0.16em] text-black/55">
              Diplomados ENAG PERU
            </p>
            <h1
              className="mt-4 max-w-5xl text-[clamp(3rem,6vw,6rem)] font-black leading-[0.9] tracking-[-0.08em]"
              style={heroFont}
            >
              Programas de mayor profundidad para liderazgo y gestión institucional.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-[1.25] text-black/72 lg:text-[1.24rem]">
              Nuestros diplomados están diseñados para autoridades, funcionarios
              y profesionales que requieren una formación más completa, aplicada
              y con impacto en la toma de decisiones.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#oferta"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-black px-6 text-sm font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-black/85"
              >
                Ver diplomados
              </a>
              <a
                href="mailto:informes@enagperu.edu.pe"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-black px-6 text-sm font-semibold uppercase tracking-[0.08em] transition-colors hover:bg-black hover:text-white"
              >
                Solicitar información
              </a>
            </div>
          </div>

          <div className="relative min-h-[340px]">
            <Image
              src="/course-collaboration.jpg"
              alt="Equipo colaborando en sesión de diplomado"
              width={1000}
              height={667}
              className="h-full w-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.34)_100%)]" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white lg:p-8">
              <p className="text-sm uppercase tracking-[0.14em] text-white/72">
                Formación avanzada
              </p>
              <p className="mt-2 max-w-md text-lg leading-[1.18] lg:text-[1.22rem]">
                Procesos de aprendizaje más intensivos, guiados y orientados a resultados reales.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="oferta" className="border-b border-black/15 bg-[#f8f5ef]">
        <div className="mx-auto max-w-[1920px] px-6 py-8 lg:px-8 lg:py-10">
          <div className="grid gap-0 lg:grid-cols-3">
            {diplomados.map((item, index) => (
              <article
                key={item.title}
                className={`border-b border-black/15 px-6 py-8 lg:px-8 ${
                  index !== diplomados.length - 1 ? "lg:border-r" : ""
                }`}
              >
                <p className="text-sm uppercase tracking-[0.14em] text-black/55">
                  {item.detail}
                </p>
                <h2
                  className="mt-4 text-[clamp(2rem,3.3vw,3.3rem)] font-black leading-[0.95] tracking-[-0.06em]"
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
        <div className="mx-auto grid max-w-[1920px] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="border-b border-black/15 px-6 py-8 lg:border-b-0 lg:border-r lg:px-8 lg:py-10">
            <p className="text-sm uppercase tracking-[0.16em] text-black/55">
              Beneficios
            </p>
            <h2
              className="mt-3 max-w-3xl text-[clamp(2.2rem,4vw,4.1rem)] font-black leading-[0.95] tracking-[-0.07em]"
              style={heroFont}
            >
              Una experiencia académica orientada a especialización real.
            </h2>
          </div>

          <div className="grid md:grid-cols-3">
            {benefits.map((item, index) => (
              <div
                key={item}
                className={`border-b border-black/15 px-6 py-8 lg:px-8 ${
                  index !== benefits.length - 1 ? "md:border-r" : ""
                }`}
              >
                <p className="text-base leading-[1.24] text-black/72">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
