import type { Metadata } from "next";

import { baseFont, heroFont } from "@/components/home/home-shared";

const timeline = [
  {
    month: "Julio 2026",
    items: [
      "Inicio de cursos ejecutivos",
      "Apertura de inscripciones intensivas",
      "Inducción al campus virtual",
    ],
  },
  {
    month: "Agosto 2026",
    items: [
      "Inicio de diplomados",
      "Clases en vivo con docentes invitados",
      "Primer bloque de evaluaciones",
    ],
  },
  {
    month: "Setiembre 2026",
    items: [
      "Especializaciones en IA y liderazgo",
      "Foros de casos aplicados",
      "Seguimiento de proyectos",
    ],
  },
  {
    month: "Octubre - Diciembre 2026",
    items: [
      "Nuevas convocatorias",
      "Cierre de módulos y certificaciones",
      "Matrícula continua para nuevas ediciones",
    ],
  },
];

export const metadata: Metadata = {
  title: "Cronograma",
  description:
    "Cronograma académico 2026 de ENAG PERU para cursos, diplomados, especializaciones e inscripciones.",
};

export default function CronogramaPage() {
  return (
    <main className="min-h-screen bg-[#f4f1eb] text-black" style={baseFont}>
      <section className="border-y border-black/15 bg-white">
        <div className="mx-auto max-w-[1920px] px-6 py-10 lg:px-8 lg:py-12">
          <p className="text-sm uppercase tracking-[0.16em] text-black/55">
            Cronograma académico 2026
          </p>
          <div className="mt-4 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <h1
              className="max-w-5xl text-[clamp(3rem,6vw,6rem)] font-black leading-[0.9] tracking-[-0.08em]"
              style={heroFont}
            >
              Fechas clave para cursos, diplomados y especialidades.
            </h1>
            <p className="max-w-2xl text-lg leading-[1.25] text-black/72 lg:justify-self-end lg:text-[1.2rem]">
              Consulta aperturas, inicios de clases, etapas de inscripción y
              bloques académicos para planificar tu participación en ENAG PERU.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-black/15 bg-[#f8f5ef]">
        <div className="mx-auto max-w-[1920px]">
          {timeline.map((block, index) => (
            <article
              key={block.month}
              className={`grid gap-0 lg:grid-cols-[420px_1fr] ${
                index !== timeline.length - 1 ? "border-b border-black/15" : ""
              }`}
            >
              <div className="border-b border-black/15 px-6 py-8 lg:border-b-0 lg:border-r lg:px-8 lg:py-10">
                <p
                  className="text-[clamp(2.3rem,4.2vw,4.4rem)] font-black leading-[0.94] tracking-[-0.07em]"
                  style={heroFont}
                >
                  {block.month}
                </p>
              </div>

              <div className="grid md:grid-cols-3">
                {block.items.map((item, itemIndex) => (
                  <div
                    key={item}
                    className={`border-b border-black/15 px-6 py-8 lg:px-8 lg:py-10 ${
                      itemIndex !== block.items.length - 1 ? "md:border-r" : ""
                    }`}
                  >
                    <p className="text-base leading-[1.24] text-black/74 lg:text-[1.08rem]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
