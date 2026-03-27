import type { Metadata } from "next";
import Image from "next/image";

import { baseFont, heroFont } from "@/components/home/home-shared";

const paymentMethods = [
  {
    title: "Tarjeta",
    detail: "Visa, Mastercard y débito",
  },
  {
    title: "Transferencia",
    detail: "Coordinación asistida por el equipo comercial",
  },
  {
    title: "WhatsApp",
    detail: "Reserva y confirmación guiada",
  },
];

const includedItems = [
  "Acceso al campus virtual 24/7",
  "Clases en vivo y materiales descargables",
  "Soporte académico durante el programa",
  "Certificación al completar el curso",
];

const paymentFields = [
  {
    label: "Nombre completo",
    placeholder: "Ingresa tus nombres y apellidos",
  },
  {
    label: "Correo electrónico",
    placeholder: "tucorreo@ejemplo.com",
  },
  {
    label: "Programa",
    placeholder: "Curso o diplomado seleccionado",
  },
  {
    label: "Monto a pagar",
    placeholder: "S/ 450.00",
  },
];

const supportChannels = [
  {
    title: "WhatsApp de matrícula",
    value: "(+51) 999 888 777",
    href: "https://wa.me/51999888777?text=Hola%2C%20quiero%20inscribirme%20en%20un%20programa%20de%20ENAG%20PERU.",
  },
  {
    title: "Correo institucional",
    value: "informes@enagperu.edu.pe",
    href: "mailto:informes@enagperu.edu.pe",
  },
  {
    title: "Teléfono de atención",
    value: "(+51) 01 555 0123",
    href: "tel:+51015550123",
  },
];

export const metadata: Metadata = {
  title: "Inscripción",
  description:
    "Página de inscripción y pago de ENAG PERU para cursos, diplomados y especializaciones.",
};

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-[#f4f1eb] text-black" style={baseFont}>
      <section className="border-y border-black/15 bg-white">
        <div className="mx-auto grid max-w-[1920px] lg:grid-cols-[1.02fr_0.98fr]">
          <div className="border-b border-black/15 px-6 py-10 lg:border-b-0 lg:border-r lg:px-8 lg:py-12">
            <p className="text-sm uppercase tracking-[0.16em] text-black/55">
              Pasarela de pago ENAG PERU
            </p>
            <h1
              className="mt-4 max-w-5xl text-[clamp(3rem,6vw,6.15rem)] font-black leading-[0.9] tracking-[-0.08em]"
              style={heroFont}
            >
              Completa tu inscripción y asegura tu vacante 2026.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-[1.25] text-black/72 lg:text-[1.24rem]">
              Este espacio concentra el pago, la validación de tus datos y el
              canal de soporte para que puedas matricularte sin salir del flujo
              de compra.
            </p>

            <div className="mt-8 grid gap-0 border border-black/15 sm:grid-cols-3">
              {paymentMethods.map((item, index) => (
                <div
                  key={item.title}
                  className={`px-5 py-5 ${
                    index !== paymentMethods.length - 1
                      ? "sm:border-r sm:border-black/15"
                      : ""
                  }`}
                >
                  <p
                    className="text-[1.75rem] font-black leading-none tracking-[-0.05em]"
                    style={heroFont}
                  >
                    {item.title}
                  </p>
                  <p className="mt-3 text-sm leading-[1.25] text-black/62">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[340px]">
            <Image
              src="/course-meeting.jpg"
              alt="Participantes revisando matrícula y pago de un programa"
              width={1600}
              height={1067}
              className="h-full w-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.42)_100%)]" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white lg:p-8">
              <p className="text-sm uppercase tracking-[0.14em] text-white/70">
                Inscripción asistida
              </p>
              <p className="mt-2 max-w-md text-lg leading-[1.18] lg:text-[1.22rem]">
                Si necesitas ayuda con el pago o la reserva, también puedes
                cerrar tu proceso por WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/15 bg-[#f8f5ef]">
        <div className="mx-auto grid max-w-[1920px] lg:grid-cols-[0.92fr_1.08fr]">
          <div className="border-b border-black/15 px-6 py-8 lg:border-b-0 lg:border-r lg:px-8 lg:py-10">
            <p className="text-sm uppercase tracking-[0.16em] text-black/55">
              Resumen de compra
            </p>
            <h2
              className="mt-3 max-w-3xl text-[clamp(2.25rem,4vw,4.1rem)] font-black leading-[0.95] tracking-[-0.07em]"
              style={heroFont}
            >
              Curso ejecutivo en gestión pública y liderazgo territorial.
            </h2>

            <div className="mt-8 grid gap-0 border border-black/15 sm:grid-cols-2">
              <div className="border-b border-black/15 px-5 py-5 sm:border-b-0 sm:border-r sm:border-black/15">
                <p className="text-xs uppercase tracking-[0.14em] text-black/50">
                  Modalidad
                </p>
                <p className="mt-2 text-lg font-medium leading-none">
                  Online en vivo
                </p>
              </div>
              <div className="px-5 py-5">
                <p className="text-xs uppercase tracking-[0.14em] text-black/50">
                  Inversión
                </p>
                <p
                  className="mt-2 text-[2.6rem] font-black leading-none tracking-[-0.06em]"
                  style={heroFont}
                >
                  S/ 450
                </p>
              </div>
            </div>

            <div className="mt-8 border-t border-black/15">
              {includedItems.map((item) => (
                <div
                  key={item}
                  className="border-b border-black/15 py-4 text-base leading-[1.22] text-black/74"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="px-6 py-8 lg:px-8 lg:py-10">
            <div className="border border-black bg-white p-6 lg:p-7">
              <div className="flex items-start justify-between gap-4 border-b border-black/15 pb-5">
                <div>
                  <p className="text-sm uppercase tracking-[0.16em] text-black/55">
                    Pago seguro
                  </p>
                  <h3
                    className="mt-2 text-[clamp(2rem,3vw,3rem)] font-black leading-[0.94] tracking-[-0.06em]"
                    style={heroFont}
                  >
                    Datos de pago
                  </h3>
                </div>
                <span className="rounded-full border border-black/15 px-3 py-1 text-xs uppercase tracking-[0.14em] text-black/60">
                  SSL
                </span>
              </div>

              <form className="mt-6 space-y-5">
                {paymentFields.map((field) => (
                  <label key={field.label} className="block">
                    <span className="text-sm uppercase tracking-[0.14em] text-black/55">
                      {field.label}
                    </span>
                    <input
                      type="text"
                      placeholder={field.placeholder}
                      className="mt-2 h-13 w-full border border-black/15 bg-[#f7f3ec] px-4 text-base outline-none transition-colors placeholder:text-black/35 focus:border-black"
                    />
                  </label>
                ))}

                <div className="grid gap-5 sm:grid-cols-[1fr_160px]">
                  <label className="block">
                    <span className="text-sm uppercase tracking-[0.14em] text-black/55">
                      Número de tarjeta
                    </span>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className="mt-2 h-13 w-full border border-black/15 bg-[#f7f3ec] px-4 text-base outline-none transition-colors placeholder:text-black/35 focus:border-black"
                    />
                  </label>
                  <label className="block">
                    <span className="text-sm uppercase tracking-[0.14em] text-black/55">
                      CVV
                    </span>
                    <input
                      type="text"
                      placeholder="123"
                      className="mt-2 h-13 w-full border border-black/15 bg-[#f7f3ec] px-4 text-base outline-none transition-colors placeholder:text-black/35 focus:border-black"
                    />
                  </label>
                </div>

                <button
                  type="button"
                  className="inline-flex min-h-13 w-full items-center justify-center bg-black px-6 text-sm font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-black/85"
                >
                  Continuar al pago
                </button>

                <p className="text-sm leading-[1.3] text-black/58">
                  Si prefieres una atención guiada, también puedes reservar tu
                  vacante y confirmar pago por WhatsApp con el equipo comercial.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black text-white">
        <div className="mx-auto max-w-[1920px] px-6 py-10 lg:px-8 lg:py-12">
          <div className="mb-8 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.16em] text-white/55">
                Soporte de matrícula
              </p>
              <h2
                className="mt-3 max-w-4xl text-[clamp(2.5rem,5vw,4.8rem)] font-black leading-[0.92] tracking-[-0.075em]"
                style={heroFont}
              >
                Si no deseas pagar en línea, te ayudamos a cerrar el proceso por
                otro canal.
              </h2>
            </div>
            <a
              href="https://wa.me/51999888777?text=Hola%2C%20quiero%20inscribirme%20en%20un%20programa%20de%20ENAG%20PERU."
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold uppercase tracking-[0.08em] text-black transition-colors hover:bg-white/85"
            >
              Ir a WhatsApp
            </a>
          </div>

          <div className="grid gap-0 md:grid-cols-3">
            {supportChannels.map((item, index) => (
              <a
                key={item.title}
                href={item.href}
                className={`block border-b border-white/15 px-6 py-8 transition-colors hover:bg-white hover:text-black lg:px-8 ${
                  index !== supportChannels.length - 1
                    ? "md:border-r md:border-white/15"
                    : ""
                }`}
              >
                <p className="text-sm uppercase tracking-[0.14em] text-white/55">
                  {item.title}
                </p>
                <p
                  className="mt-4 break-words text-[clamp(1.7rem,2.6vw,2.8rem)] font-black leading-[0.98] tracking-[-0.055em]"
                  style={heroFont}
                >
                  {item.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
