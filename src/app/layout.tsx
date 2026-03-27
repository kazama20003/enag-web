import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { HomeFooter } from "@/components/home/home-footer";
import { HomeHeader } from "@/components/home/home-header";
import { LenisProvider } from "@/components/providers/lenis-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "ESCUELA NACIONAL DE ALCALDES Y GOBERNADORES DEL PERÚ | ENAG PERU",
    template: "%s | ENAG PERU",
  },
  description:
    "Sitio oficial de la Escuela Nacional de Alcaldes y Gobernadores del Perú (ENAG PERU).",
  applicationName: "ENAG PERU",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full overflow-x-hidden antialiased`}
    >
      <body className="min-h-full overflow-x-hidden flex flex-col">
        <LenisProvider>
          <HomeHeader />
          <div className="flex min-h-full flex-col pt-24">
            {children}
            <HomeFooter />
          </div>
        </LenisProvider>
      </body>
    </html>
  );
}
