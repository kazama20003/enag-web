import Link from "next/link";

import { baseFont, heroFont } from "./home-shared";

const newsItems = [
  {
    category: "Contenido de interés",
    date: "13/03/2026",
    title:
      "5 herramientas de Inteligencia Artificial que no puedes perder en la gestión pública",
    excerpt:
      "En ENAG PERU entendemos que la tecnología no sustituye el criterio: lo fortalece y amplifica en la toma de decisiones.",
    variant: "tools",
  },
  {
    category: "ENAG PERU",
    date: "06/03/2026",
    title:
      "Del aula al liderazgo institucional: ¿qué pasa cuando una formación transforma la mirada de gestión?",
    excerpt:
      "Se acerca una nueva edición de nuestros programas y la pregunta sigue vigente: cómo formar autoridades capaces de liderar con visión y ejecución.",
    variant: "portraits",
  },
  {
    category: "Campus virtual",
    date: "26/02/2026",
    title:
      "¿Aún no sabes cómo adaptarte al cambio en la administración moderna?",
    excerpt:
      "El sector público necesita profesionales preparados para nuevos retos. La especialización es una ventaja real para diferenciarse.",
    variant: "laptop",
  },
];

function NewsVisual({ variant }: { variant: string }) {
  if (variant === "tools") {
    return (
      <div className="grid h-[260px] grid-cols-5 overflow-hidden bg-black sm:h-[320px] lg:h-[420px]">
        <div className="flex items-end justify-center bg-[#1a0a08] p-4 text-white">
          <span className="rounded-full bg-black/30 px-3 py-1 text-xs uppercase tracking-[0.12em]">
            oklm
          </span>
        </div>
        <div className="relative bg-[linear-gradient(180deg,#0c2242_0%,#1a3c72_40%,#c98f45_100%)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.95)_0_2px,transparent_2px)] [background-size:26px_26px]" />
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-[#4a351f]" />
          <div className="absolute bottom-8 left-1/2 h-24 w-20 -translate-x-1/2 rounded-[50%] bg-[#6c4d2b]" />
        </div>
        <div className="relative bg-[#151b86] text-white">
          <div className="absolute left-3 top-6 text-lg font-medium sm:left-6 sm:top-10 sm:text-3xl">
            Google AI Studio
          </div>
          <div className="absolute left-3 top-16 rounded-full bg-white px-3 py-2 text-[10px] text-[#151b86] sm:left-6 sm:top-28 sm:px-4 sm:text-xs">
            Habla con tus modelos
          </div>
          <div className="absolute -bottom-10 -left-8 h-28 w-28 rounded-full bg-[#1e69d2] sm:h-40 sm:w-40" />
          <div className="absolute -bottom-10 right-0 h-24 w-24 rounded-full bg-[#84a4ff] sm:h-36 sm:w-36" />
        </div>
        <div className="relative bg-[#082f12] text-white">
          <div className="absolute left-3 top-6 text-lg font-medium sm:left-6 sm:top-10 sm:text-3xl">
            Napkin
          </div>
          <div className="absolute bottom-6 left-5 h-12 w-12 rounded-[1rem] border-[5px] border-[#77ffc1] sm:bottom-8 sm:left-8 sm:h-16 sm:w-16 sm:rounded-[1.2rem] sm:border-[6px]" />
          <div className="absolute bottom-14 right-5 h-8 w-8 rounded-full border-[4px] border-[#f1d0ff] sm:bottom-18 sm:right-8 sm:h-10 sm:w-10 sm:border-[5px]" />
          <div className="absolute right-10 top-16 h-10 w-10 rounded-full border-[4px] border-[#aef] sm:right-16 sm:top-24 sm:h-14 sm:w-14 sm:border-[5px]" />
        </div>
        <div className="relative bg-[linear-gradient(180deg,#5a4bd3_0%,#7a58e8_100%)]">
          <div className="absolute left-4 top-6 h-14 w-14 rounded-full border-[5px] border-[#44d0ff] sm:left-6 sm:top-12 sm:h-20 sm:w-20 sm:border-[6px]" />
          <div className="absolute bottom-0 right-0 h-24 w-16 bg-[#f4d7cd] sm:h-32 sm:w-20" />
        </div>
      </div>
    );
  }

  if (variant === "portraits") {
    return (
      <div className="grid h-[260px] grid-cols-4 grid-rows-3 overflow-hidden bg-[#e6e1d9] sm:h-[320px] lg:h-[420px]">
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className={`relative border border-white/40 ${
              index % 3 === 0
                ? "bg-[linear-gradient(180deg,#d5d1cb_0%,#b5b0ab_100%)]"
                : index % 3 === 1
                  ? "bg-[linear-gradient(180deg,#8c8b88_0%,#5f5f5d_100%)]"
                  : "bg-[linear-gradient(180deg,#3d3c3c_0%,#232323_100%)]"
            }`}
          >
            <div className="absolute bottom-0 left-1/2 h-[58%] w-[56%] -translate-x-1/2 rounded-t-[45%] bg-white/16" />
            <div className="absolute left-1/2 top-[18%] h-10 w-10 -translate-x-1/2 rounded-full bg-white/28 sm:h-14 sm:w-14" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="relative h-[260px] overflow-hidden bg-[linear-gradient(180deg,#e4ddd3_0%,#d2c9bb_100%)] sm:h-[320px] lg:h-[420px]">
      <div className="absolute bottom-0 left-[5%] right-[10%] top-[18%] rounded-[1.6rem] bg-[linear-gradient(180deg,#161c18_0%,#283029_100%)] shadow-[0_16px_40px_rgba(0,0,0,0.28)]" />
      <div className="absolute bottom-[12%] left-[12%] right-[17%] top-[24%] rounded-[0.8rem] bg-[#a6f0e7]">
        <div className="space-y-2 px-5 py-5 sm:space-y-3 sm:px-8 sm:py-7">
          <div className="h-3 w-20 rounded-full bg-black/25" />
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="h-5 rounded-full bg-black/24 sm:h-6"
              style={{ width: `${72 - index * 6}%` }}
            />
          ))}
          <div className="pt-3 sm:pt-4">
            <div className="inline-flex rounded-full bg-black px-4 py-2 text-xs text-white">
              Aplicar
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 h-28 w-full bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.18)_100%)]" />
    </div>
  );
}

export function HomeNewsSection() {
  return (
    <section className="border-b border-black/15 bg-white" style={baseFont}>
      <div className="mx-auto max-w-[1920px] px-6 py-8 lg:px-8 lg:py-10">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <h2
            className="text-[clamp(2.7rem,7vw,6rem)] font-black leading-[0.88] tracking-[-0.08em] text-black"
            style={heroFont}
          >
            News
          </h2>

          <div className="flex flex-wrap gap-3">
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

        <div className="mt-6 grid gap-0 lg:grid-cols-3">
          {newsItems.map((item, index) => (
            <article
              key={item.title}
              className={`pb-8 pt-2 ${
                index !== 0
                  ? "border-t border-black/15 lg:border-l lg:border-t-0"
                  : ""
              }`}
            >
              <div className="px-0 lg:px-4">
                <div className="flex items-center gap-3 text-[0.95rem] text-black/78 sm:text-[1rem]">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs sm:text-sm ${
                      index === 0
                        ? "bg-[#4b82ff] text-white"
                        : "bg-black text-white"
                    }`}
                  >
                    {item.category}
                  </span>
                  <span>{item.date}</span>
                </div>

                <h3 className="mt-4 max-w-[95%] text-[1.7rem] leading-[1.04] tracking-[-0.05em] text-black sm:text-[2.1rem] lg:text-[2.3rem]">
                  {item.title}
                </h3>

                <div className="mt-8">
                  <NewsVisual variant={item.variant} />
                </div>

                <p className="mt-4 max-w-[95%] text-[1.02rem] leading-[1.24] text-black/76 sm:text-[1.06rem]">
                  {item.excerpt}
                </p>

                <Link
                  href="/cursos"
                  className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full border border-black px-8 text-base font-medium text-black transition-colors hover:bg-black hover:text-white sm:px-10"
                >
                  Leer más
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
