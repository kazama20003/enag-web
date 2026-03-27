import type { Metadata } from "next";
import Image from "next/image";

import { baseFont, heroFont } from "@/components/home/home-shared";

const certifications = [
  {
    title: "Certificado de participación",
    detail: "Emitido para cursos y seminarios",
    text: "Reconoce asistencia, desarrollo académico y cumplimiento de actividades en programas de actualización.",
  },
  {
    title: "Constancia de especialización",
    detail: "Programas ejecutivos y especializaciones",
    text: "Acredita formación de mayor intensidad y competencias orientadas a desempeño profesional y directivo.",
  },
  {
    title: "Certificación académica",
    detail: "Diplomados y procesos integrales",
    text: "Respaldada por ENAG PERU para fortalecer perfil, trayectoria y validación formativa en el sector público.",
  },
];

const recognitionItems = [
  "Valida participación y cumplimiento académico.",
  "Refuerza trayectoria profesional e institucional.",
  "Aporta respaldo para crecimiento y especialización.",
  "Se integra a procesos de actualización continua.",
];

export const metadata: Metadata = {
  title: "Certificación",
  description:
    "Tipos de certificación y constancias que brinda ENAG PERU en cursos, diplomados y especializaciones.",
};

export default function CertificacionPage() {
  return (
    <main className="min-h-screen bg-[#f4f1eb] text-black" style={baseFont}>
      <section className="border-y border-black/15 bg-white">
        <div className="mx-auto grid max-w-[1920px] lg:grid-cols-[1fr_1fr]">
          <div className="border-b border-black/15 px-6 py-10 lg:border-b-0 lg:border-r lg:px-8 lg:py-12">
            <p className="text-sm uppercase tracking-[0.16em] text-black/55">
              Certificación ENAG PERU
            </p>
            <h1
              className="mt-4 max-w-5xl text-[clamp(3rem,6vw,6rem)] font-black leading-[0.9] tracking-[-0.08em]"
              style={heroFont}
            >
              Constancias y certificados que respaldan tu avance académico.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-[1.25] text-black/72 lg:text-[1.24rem]">
              Cada programa de ENAG PERU contempla una salida académica
              coherente con su profundidad, modalidad y objetivos de formación.
            </p>
          </div>

          <div className="relative min-h-[340px]">
            <Image
              src="/course-meeting.jpg"
              alt="Participantes de un programa formativo"
              width={1000}
              height={667}
              className="h-full w-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.06)_0%,rgba(0,0,0,0.34)_100%)]" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white lg:p-8">
              <p className="text-sm uppercase tracking-[0.14em] text-white/72">
                Reconocimiento académico
              </p>
              <p className="mt-2 max-w-md text-lg leading-[1.18] lg:text-[1.22rem]">
                Certificaciones pensadas para respaldar desarrollo profesional y desempeño institucional.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/15 bg-[#f8f5ef]">
        <div className="mx-auto max-w-[1920px] px-6 py-8 lg:px-8 lg:py-10">
          <div className="grid gap-0 lg:grid-cols-3">
            {certifications.map((item, index) => (
              <article
                key={item.title}
                className={`border-b border-black/15 px-6 py-8 lg:px-8 ${
                  index !== certifications.length - 1 ? "lg:border-r" : ""
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
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/15 bg-white">
        <div className="mx-auto grid max-w-[1920px] lg:grid-cols-[0.92fr_1.08fr]">
          <div className="border-b border-black/15 px-6 py-8 lg:border-b-0 lg:border-r lg:px-8 lg:py-10">
            <p className="text-sm uppercase tracking-[0.16em] text-black/55">
              Valor institucional
            </p>
            <h2
              className="mt-3 max-w-3xl text-[clamp(2.2rem,4vw,4.1rem)] font-black leading-[0.95] tracking-[-0.07em]"
              style={heroFont}
            >
              Certificar no es un cierre: es una forma de validar crecimiento y especialización.
            </h2>
          </div>

          <div className="grid md:grid-cols-2">
            {recognitionItems.map((item, index) => (
              <div
                key={item}
                className={`border-b border-black/15 px-6 py-8 lg:px-8 ${
                  index % 2 === 0 ? "md:border-r" : ""
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
