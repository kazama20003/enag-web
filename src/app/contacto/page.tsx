import type { Metadata } from "next";
import Image from "next/image";

import { baseFont, heroFont } from "@/components/home/home-shared";

const contactChannels = [
  {
    title: "Informes académicos",
    value: "informes@enagperu.edu.pe",
    detail: "Respuesta para cursos, diplomados, requisitos y cronogramas.",
    href: "mailto:informes@enagperu.edu.pe",
  },
  {
    title: "Atención telefónica",
    value: "(+51) 01 555 0123",
    detail: "De lunes a viernes de 9:00 a.m. a 6:00 p.m.",
    href: "tel:+51015550123",
  },
  {
    title: "WhatsApp institucional",
    value: "(+51) 999 888 777",
    detail: "Consultas rápidas sobre inscripción y matrícula.",
    href: "https://wa.me/51999888777",
  },
];

const faqs = [
  {
    question: "¿Cómo me inscribo en un curso?",
    answer:
      "Puedes solicitar información por correo o WhatsApp y te orientaremos con requisitos, cronograma y proceso de inscripción.",
  },
  {
    question: "¿Las clases son en vivo o grabadas?",
    answer:
      "La oferta combina clases en vivo, campus virtual y recursos complementarios según el programa.",
  },
  {
    question: "¿Otorgan certificado?",
    answer:
      "Sí. Los programas contemplan constancias y certificaciones según la modalidad y el cumplimiento académico.",
  },
];

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Canales de contacto de ENAG PERU para informes, inscripciones y orientación académica.",
};

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-[#f4f1eb] text-black" style={baseFont}>
      <section className="border-y border-black/15 bg-white">
        <div className="mx-auto grid max-w-[1920px] lg:grid-cols-[1.05fr_0.95fr]">
          <div className="border-b border-black/15 px-6 py-10 lg:border-b-0 lg:border-r lg:px-8 lg:py-12">
            <p className="text-sm uppercase tracking-[0.16em] text-black/55">
              Contacto
            </p>
            <h1
              className="mt-4 max-w-5xl text-[clamp(3rem,6vw,6.2rem)] font-black leading-[0.9] tracking-[-0.08em]"
              style={heroFont}
            >
              Hablemos sobre tu próxima formación en ENAG PERU.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-[1.25] text-black/72 lg:text-[1.28rem]">
              Resolvemos consultas sobre cursos, diplomados, cronogramas,
              certificación, modalidades de estudio e inscripción.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:informes@enagperu.edu.pe"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-black px-6 text-sm font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-black/85"
              >
                Escribir ahora
              </a>
              <a
                href="https://wa.me/51999888777"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-black px-6 text-sm font-semibold uppercase tracking-[0.08em] transition-colors hover:bg-black hover:text-white"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div className="relative min-h-[320px]">
            <Image
              src="/course-online.jpg"
              alt="Atención y acompañamiento académico online"
              width={1000}
              height={667}
              className="h-full w-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0.36)_100%)]" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white lg:p-8">
              <p className="text-sm uppercase tracking-[0.14em] text-white/72">
                Atención directa
              </p>
              <p className="mt-2 max-w-md text-lg leading-[1.16] lg:text-[1.22rem]">
                Acompañamiento para orientarte en la elección del programa y en
                todo el proceso de admisión.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/15 bg-[#f8f5ef]">
        <div className="mx-auto grid max-w-[1920px] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="border-b border-black/15 px-6 py-8 lg:border-b-0 lg:border-r lg:px-8 lg:py-10">
            <p className="text-sm uppercase tracking-[0.16em] text-black/55">
              Canales
            </p>
            <h2
              className="mt-3 max-w-3xl text-[clamp(2.2rem,4vw,4.2rem)] font-black leading-[0.95] tracking-[-0.07em]"
              style={heroFont}
            >
              Elige la forma más rápida para comunicarte con nosotros.
            </h2>
          </div>

          <div className="grid md:grid-cols-3">
            {contactChannels.map((item, index) => (
              <a
                key={item.title}
                href={item.href}
                className={`block border-b border-black/15 px-6 py-8 transition-colors hover:bg-white lg:px-8 ${
                  index !== contactChannels.length - 1 ? "md:border-r" : ""
                }`}
              >
                <p className="text-sm uppercase tracking-[0.14em] text-black/55">
                  {item.title}
                </p>
                <p
                  className="mt-4 break-words text-[clamp(1.6rem,2.4vw,2.5rem)] font-black leading-[0.98] tracking-[-0.05em]"
                  style={heroFont}
                >
                  {item.value}
                </p>
                <p className="mt-4 max-w-sm text-base leading-[1.24] text-black/68">
                  {item.detail}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/15 bg-white">
        <div className="mx-auto grid max-w-[1920px] lg:grid-cols-[1fr_1fr]">
          <div className="border-b border-black/15 px-6 py-8 lg:border-b-0 lg:border-r lg:px-8 lg:py-10">
            <p className="text-sm uppercase tracking-[0.16em] text-black/55">
              Sede principal
            </p>
            <h2
              className="mt-3 text-[clamp(2.2rem,4vw,4.2rem)] font-black leading-[0.95] tracking-[-0.07em]"
              style={heroFont}
            >
              Lima, Perú
            </h2>
            <div className="mt-6 space-y-2 text-lg leading-[1.22] text-black/72 lg:text-[1.18rem]">
              <p>Av. República de Panamá 4580</p>
              <p>Atención institucional y orientación académica</p>
              <p>Lunes a viernes, 9:00 a.m. a 6:00 p.m.</p>
            </div>
          </div>

          <div className="px-6 py-8 lg:px-8 lg:py-10">
            <p className="text-sm uppercase tracking-[0.16em] text-black/55">
              Preguntas frecuentes
            </p>
            <div className="mt-6 divide-y divide-black/15 border-y border-black/15">
              {faqs.map((item) => (
                <div key={item.question} className="py-6">
                  <h3
                    className="text-[1.7rem] font-black leading-[1] tracking-[-0.05em]"
                    style={heroFont}
                  >
                    {item.question}
                  </h3>
                  <p className="mt-3 max-w-2xl text-base leading-[1.24] text-black/68">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
