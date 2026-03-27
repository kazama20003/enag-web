import { HomeCertificationsSection } from "@/components/home/home-certifications-section";
import { HomeHero } from "@/components/home/home-hero";
import { HomeImpactSection } from "@/components/home/home-impact-section";
import { HomeNewsSection } from "@/components/home/home-news-section";
import { HomeProgramsSection } from "@/components/home/home-programs-section";
import { HomeTestimonialsSection } from "@/components/home/home-testimonials-section";
import { HomeVideoSection } from "@/components/home/home-video-section";
import { baseFont } from "@/components/home/home-shared";

export default function Home() {
  return (
    <main
      className="min-h-screen overflow-x-hidden bg-[#f4f1eb] text-[#101010]"
      style={baseFont}
    >
      <HomeHero />
      <HomeImpactSection />
      <HomeProgramsSection />
      <HomeCertificationsSection />
      <HomeTestimonialsSection />
      <HomeVideoSection />
      <HomeNewsSection />
    </main>
  );
}
