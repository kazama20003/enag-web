import type { Metadata } from "next";
import Image from "next/image";

import { baseFont, heroFont } from "@/components/home/home-shared";

const featuredCourses = [
  {
    category: "Curso ejecutivo",
    title: "Gestión Municipal y Liderazgo Territorial",
    details: ["120 horas", "Modalidad online", "Inicio: Julio 2026"],
    description:
      "Programa orientado a alcaldes, regidores y equipos técnicos que necesitan mejorar planificación, toma de decisiones y articulación institucional.",
    accent: "bg-[#f5efe5]",
  },
  {
    category: "Diplomado",
    title: "Gobernanza Regional e Innovación Pública",
    details: ["160 horas", "Clases en vivo", "Inicio: Agosto 2026"],
    description:
      "Formación para autoridades y directivos que buscan fortalecer visión estratégica, capacidad ejecutiva y transformación del servicio público.",
    accent: "bg-[#dff2f0]",
  },
  {
    category: "Especialización",
    title: "Inteligencia Artificial Aplicada a la Gestión",
    details: ["96 horas", "Online + casos", "Inicio: Setiembre 2026"],
    description:
      "Integra IA en análisis, automatización, productividad y procesos institucionales con enfoque práctico para equipos de gobierno y gestión.",
    accent: "bg-[#efe5fb]",
  },
  {
    category: "Curso ejecutivo",
    title: "Contrataciones del Estado y Control de Procesos",
    details: ["90 horas", "Modalidad online", "Inicio: Octubre 2026"],
    description:
      "Actualización intensiva para funcionarios y asesores que requieren más seguridad técnica en compras, seguimiento y cumplimiento normativo.",
    accent: "bg-[#f4efd8]",
  },
  {
    category: "Diplomado",
    title: "Comunicación e Imagen Institucional",
    details: ["140 horas", "Sesiones guiadas", "Inicio: Noviembre 2026"],
    description:
      "Diseñado para perfiles que lideran comunicación pública, posicionamiento institucional y gestión de mensajes en escenarios complejos.",
    accent: "bg-[#f9e4e7]",
  },
  {
    category: "Especialización",
    title: "Planeamiento, Presupuesto y Gestión por Resultados",
    details: ["130 horas", "Campus virtual", "Inicio: Diciembre 2026"],
    description:
      "Desarrolla competencias para convertir objetivos de gobierno en ejecución medible, sostenida y alineada con impacto territorial.",
    accent: "bg-[#e3eef9]",
  },
];

const modalities = [
  {
    title: "Clases en vivo",
    text: "Sesiones guiadas con docentes y especialistas para resolver casos reales y preguntas aplicadas.",
  },
  {
    title: "Campus virtual",
    text: "Acceso a materiales, recursos, actividades y seguimiento desde una plataforma activa y flexible.",
  },
  {
    title: "Certificación",
    text: "Constancias y certificados orientados a respaldar formación, actualización y crecimiento profesional.",
  },
];

export const metadata: Metadata = {
  title: "Cursos",
  description:
    "Oferta de cursos, diplomados y especializaciones de ENAG PERU para liderazgo, gestión pública e innovación institucional.",
};

export default function CursosPage() {
  return (
    <main className="min-h-screen bg-[#f4f1eb] text-black" style={baseFont}>
      <section className="border-y border-black/15 bg-white">
        <div className="mx-auto grid max-w-[1920px] lg:grid-cols-[1.15fr_0.85fr]">
          <div className="border-b border-black/15 px-6 py-10 lg:border-b-0 lg:border-r lg:px-8 lg:py-12">
            <p className="text-sm uppercase tracking-[0.16em] text-black/55">
              Oferta académica 2026
            </p>
            <h1
              className="mt-4 max-w-5xl text-[clamp(3rem,6.2vw,6.4rem)] font-black leading-[0.9] tracking-[-0.08em]"
              style={heroFont}
            >
              Cursos, diplomados y especializaciones para liderazgo público.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-[1.25] text-black/72 lg:text-[1.28rem]">
              ENAG PERU ofrece formación aplicada para alcaldes, gobernadores,
              funcionarios, empresarios y profesionales que necesitan
              actualizarse, certificar competencias y ejecutar mejor.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#catalogo"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-black px-6 text-sm font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-black/85"
              >
                Ver catálogo
              </a>
              <a
                href="/checkout"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-black px-6 text-sm font-semibold uppercase tracking-[0.08em] transition-colors hover:bg-black hover:text-white"
              >
                Inscribirme
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 grid-rows-[1.25fr_auto]">
            <div className="relative col-span-2 border-b border-black/15">
              <Image
                src="/course-meeting.jpg"
                alt="Equipo participando en una sesión formativa"
                width={1600}
                height={1067}
                className="h-full min-h-[320px] w-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.34)_100%)]" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white lg:p-8">
                <p className="text-sm uppercase tracking-[0.14em] text-white/72">
                  Clases, talleres y casos
                </p>
                <p className="mt-2 max-w-md text-lg leading-[1.18] lg:text-[1.25rem]">
                  Aprende con especialistas, dinámicas guiadas y recursos listos
                  para aplicar en tu contexto profesional.
                </p>
              </div>
            </div>

            <div className="border-r border-black/15 px-6 py-8 lg:px-8">
              <p
                className="text-[clamp(3.6rem,8vw,7rem)] font-black leading-[0.86] tracking-[-0.08em]"
                style={heroFont}
              >
                32
              </p>
              <p className="mt-2 text-base text-black/70">Cursos activos</p>
            </div>
            <div className="px-6 py-8 lg:px-8">
              <p
                className="text-[clamp(3.6rem,8vw,7rem)] font-black leading-[0.86] tracking-[-0.08em]"
                style={heroFont}
              >
                100%
              </p>
              <p className="mt-2 text-base text-black/70">Campus virtual</p>
            </div>
          </div>
        </div>
      </section>

      <section id="catalogo" className="border-b border-black/15 bg-[#f8f5ef]">
        <div className="mx-auto max-w-[1920px] px-6 py-8 lg:px-8 lg:py-10">
          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.16em] text-black/55">
                Catálogo principal
              </p>
              <h2
                className="mt-3 text-[clamp(2.4rem,4.8vw,4.8rem)] font-black leading-[0.94] tracking-[-0.075em]"
                style={heroFont}
              >
                Elige el programa que mejor se adapta a tu función.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-[1.24] text-black/66 lg:text-right">
              Programas orientados a gestión pública, liderazgo, innovación,
              planeamiento, comunicación y transformación institucional.
            </p>
          </div>

          <div className="grid gap-0 md:grid-cols-2 xl:grid-cols-3">
            {featuredCourses.map((course, index) => (
              <article
                key={course.title}
                className={`border-b border-black/15 p-6 lg:p-7 ${
                  index % 3 !== 2 ? "xl:border-r" : ""
                } ${index % 2 === 0 ? "md:border-r xl:border-r" : ""} ${course.accent}`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex rounded-full border border-black/20 px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-black/70">
                    {course.category}
                  </span>
                </div>

                <h3
                  className="mt-5 text-[clamp(2rem,3vw,3rem)] font-black leading-[0.95] tracking-[-0.06em]"
                  style={heroFont}
                >
                  {course.title}
                </h3>

                <p className="mt-4 text-base leading-[1.23] text-black/72">
                  {course.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {course.details.map((detail) => (
                    <span
                      key={detail}
                      className="rounded-full bg-white/80 px-3 py-1 text-sm text-black/72"
                    >
                      {detail}
                    </span>
                  ))}
                </div>

                <a
                  href="/checkout"
                  className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full border border-black px-5 text-sm font-semibold uppercase tracking-[0.08em] transition-colors hover:bg-black hover:text-white"
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
              Modalidades
            </p>
            <h2
              className="mt-3 max-w-3xl text-[clamp(2.2rem,4vw,4.2rem)] font-black leading-[0.95] tracking-[-0.07em]"
              style={heroFont}
            >
              Estudia con una metodología flexible y enfocada en resultados.
            </h2>
          </div>

          <div className="grid md:grid-cols-3">
            {modalities.map((item, index) => (
              <div
                key={item.title}
                className={`border-b border-black/15 px-6 py-8 lg:px-8 ${
                  index !== modalities.length - 1 ? "md:border-r" : ""
                }`}
              >
                <h3
                  className="text-[2rem] font-black leading-[0.98] tracking-[-0.05em]"
                  style={heroFont}
                >
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-[1.24] text-black/68">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/15 bg-[#f1ece3]">
        <div className="mx-auto grid max-w-[1920px] lg:grid-cols-3">
          <div className="relative min-h-[320px] border-b border-black/15 lg:border-b-0 lg:border-r">
            <Image
              src="/course-online.jpg"
              alt="Clase online en laptop"
              width={1000}
              height={667}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="border-b border-black/15 px-6 py-8 lg:border-b-0 lg:border-r lg:px-8">
            <p className="text-sm uppercase tracking-[0.16em] text-black/55">
              Así se estudia
            </p>
            <h2
              className="mt-3 text-[clamp(2.1rem,4vw,4rem)] font-black leading-[0.95] tracking-[-0.07em]"
              style={heroFont}
            >
              Formación flexible, seguimiento docente y recursos disponibles en todo momento.
            </h2>
            <p className="mt-5 text-base leading-[1.26] text-black/68 lg:text-[1.08rem]">
              Nuestros programas combinan clases en vivo, materiales en campus
              virtual, actividades guiadas y evaluación orientada a aplicación
              profesional.
            </p>
          </div>
          <div className="relative min-h-[320px]">
            <Image
              src="/course-collaboration.jpg"
              alt="Trabajo colaborativo durante una sesión"
              width={1000}
              height={667}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="inscripcion" className="bg-black text-white">
        <div className="mx-auto max-w-[1920px] px-6 py-10 lg:px-8 lg:py-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.16em] text-white/55">
                Inscripción
              </p>
              <h2
                className="mt-3 max-w-4xl text-[clamp(2.6rem,5vw,5rem)] font-black leading-[0.92] tracking-[-0.075em]"
                style={heroFont}
              >
                Solicita información y asegura tu vacante en la convocatoria 2026.
              </h2>
            </div>

            <a
              href="mailto:informes@enagperu.edu.pe"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold uppercase tracking-[0.08em] text-black transition-colors hover:bg-white/85"
            >
              informes@enagperu.edu.pe
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
