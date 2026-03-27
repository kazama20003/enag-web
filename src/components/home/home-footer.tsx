import { baseFont, heroFont } from "./home-shared";

const mainLinks = [
  "FAQs",
  "Cursos 2026",
  "Diplomados",
  "Especializaciones",
  "Campus virtual",
  "Solicitar información",
];

const socialLinks = [
  "Instagram",
  "LinkedIn",
  "TikTok",
  "Facebook",
  "Youtube",
  "Spotify",
];

export function HomeFooter() {
  return (
    <footer className="bg-black text-white" style={baseFont}>
      <div className="mx-auto max-w-[1920px] border-t border-white/18">
        <div className="grid lg:grid-cols-[1fr_1fr_0.95fr]">
          <div className="flex min-h-[720px] flex-col justify-between border-b border-white/18 px-8 py-8 lg:border-b-0 lg:border-r lg:px-8 lg:py-8">
            <div>
              <h2
                className="max-w-[10ch] text-[clamp(3rem,6vw,5.6rem)] font-black leading-[0.95] tracking-[-0.075em] text-white"
                style={heroFont}
              >
                ENAG PERU Escuela de liderazgo y formación pública
              </h2>
            </div>

            <div className="flex items-center gap-5">
              <div className="grid h-16 w-16 place-items-center rounded-full border border-white text-3xl font-black">
                E
              </div>
              <div className="text-[1.05rem] leading-[1.08] text-white/88">
                <p>ENAG PERU</p>
                <p>Escuela Nacional de Alcaldes</p>
                <p>y Gobernadores del Perú</p>
              </div>
            </div>
          </div>

          <div className="grid min-h-[720px] border-b border-white/18 lg:border-b-0 lg:border-r">
            <div className="border-b border-white/18 px-8 py-8">
              <div className="space-y-2 text-[clamp(2rem,3.6vw,3.5rem)] leading-[1.02] tracking-[-0.06em]">
                {mainLinks.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block transition-colors hover:text-white/70"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div className="px-8 py-8 text-[clamp(2rem,3.4vw,3.2rem)] leading-[1.06] tracking-[-0.06em]">
              <a
                href="mailto:informes@enagperu.edu.pe"
                className="block transition-colors hover:text-white/70"
              >
                informes@enagperu.edu.pe
              </a>

              <div className="mt-8 space-y-4 text-white/92">
                <div>
                  <p>Lima</p>
                  <p>Av. República de Panamá 4580</p>
                  <p>T (+51) 01 555 0123</p>
                </div>

                <div>
                  <p>Atención virtual nacional</p>
                  <p>T (+51) 999 888 777</p>
                </div>
              </div>
            </div>
          </div>

          <div className="min-h-[720px] px-8 py-8">
            <div className="space-y-2 text-[clamp(2rem,3.5vw,3.4rem)] leading-[1.04] tracking-[-0.06em]">
              {socialLinks.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block transition-colors hover:text-white/70"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/18 px-8 py-5 text-sm text-white/92 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-8">
            <a href="#" className="underline underline-offset-4 hover:text-white/70">
              Aviso legal
            </a>
            <a href="#" className="underline underline-offset-4 hover:text-white/70">
              Política de privacidad
            </a>
            <a href="#" className="underline underline-offset-4 hover:text-white/70">
              Política de cookies
            </a>
          </div>

          <p>© 2026 ENAG PERU - Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
}
