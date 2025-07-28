import { HeroSection } from "@/components/hero/hero";
import { AboutSection } from "@/components/about/about";
import { ExperienceSection } from "@/components/exp/exp";
import { PortfolioSection } from "@/components/work/work";
import { ServicesSection } from "@/components/service/service";
import { BlogSection } from "@/components/blog/blog-section";
import { ContactSection } from "@/components/contact/contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Responsive Container */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-20">
        <div className="max-w-7xl">
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <PortfolioSection />
          <ServicesSection />
          <BlogSection />
          <ContactSection />
        </div>
      </div>
    </main>
  );
}
