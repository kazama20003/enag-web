import Link from "next/link";

import { baseFont, heroFont } from "./home-shared";

const testimonials = [
  {
    name: "Vanesa García",
    handle: "@vanesagarcia.enag",
    location: "Caravaca de la Cruz, España",
    quote:
      "La formación en ENAG PERU me ayudó a fortalecer mi liderazgo, ordenar mejor mis decisiones y darle una dirección más clara a mi trabajo institucional.",
  },
  {
    name: "Alejandro Peña",
    handle: "@alejandro.pena.villarreal",
    location: "San Pedro Garza García, México",
    quote:
      "Lo que más valoro fue el enfoque práctico de cada sesión y la diversidad de perfiles. No solo aprendí conceptos: aprendí a aplicarlos en contextos reales de gestión.",
  },
  {
    name: "Sira Ayats",
    handle: "@siraayats",
    location: "Castelló d'Empúries, España",
    quote:
      "Encontré una experiencia académica exigente, actual y muy conectada con los desafíos del presente. El paso por la escuela marcó un antes y un después en mi perfil profesional.",
  },
];

function initialsFromName(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("");
}

export function HomeTestimonialsSection() {
  return (
    <section className="overflow-hidden bg-black text-white" style={baseFont}>
      <div className="mx-auto max-w-[1920px] px-6 py-10 lg:px-8 lg:py-12">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <h2
            className="text-[clamp(2.2rem,4.6vw,4.8rem)] font-black leading-[0.95] tracking-[-0.07em]"
            style={heroFont}
          >
            Opiniones
          </h2>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/cursos"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/25 px-5 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black"
            >
              Ver cursos
            </Link>
            <Link
              href="/checkout"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-5 text-sm font-medium text-black transition-colors hover:bg-white/85"
            >
              Inscribirme
            </Link>
          </div>
        </div>

        <div className="mt-8 grid gap-0 md:flex md:overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mt-10">
          {testimonials.map((item, index) => (
            <article
              key={item.name}
              className={`flex min-h-[360px] min-w-0 flex-1 flex-col px-4 py-6 md:min-w-[620px] md:px-6 lg:min-h-[460px] lg:min-w-[760px] lg:px-8 ${
                index !== 0
                  ? "border-t border-white/12 md:border-l md:border-t-0"
                  : ""
              }`}
            >
              <div className="flex items-start gap-5">
                <div className="grid h-18 w-18 shrink-0 place-items-center rounded-full border border-white/12 bg-white/8 text-xl font-semibold text-white/92 sm:h-22 sm:w-22 sm:text-2xl">
                  {initialsFromName(item.name)}
                </div>

                <div className="min-w-0">
                  <h3
                    className="text-[clamp(2rem,5vw,4.2rem)] font-black leading-[0.95] tracking-[-0.075em]"
                    style={heroFont}
                  >
                    {item.name}
                  </h3>
                  <p className="mt-2 text-[1rem] font-medium text-white underline decoration-white/40 underline-offset-4 lg:text-[1.3rem]">
                    {item.handle}
                  </p>
                  <p className="mt-1 text-[1rem] text-white/88 lg:text-[1.3rem]">
                    {item.location}
                  </p>
                </div>
              </div>

              <p className="mt-auto max-w-full pt-10 text-[1.05rem] leading-[1.12] text-white/96 sm:max-w-[92%] md:pt-14 md:text-[1.8rem] lg:text-[2.1rem]">
                {item.quote}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
