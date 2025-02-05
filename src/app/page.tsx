import { HeroSection } from "@/components/hero/hero"
import { AboutSection } from "@/components/about/about"
import { ExperienceSection } from "@/components/exp/exp"
import { PortfolioSection } from "@/components/work/work"
import { ServicesSection } from "@/components/service/service"
import { BlogSection } from "@/components/blog/blog-section"
import { ContactSection } from "@/components/contact/contact"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <PortfolioSection />
      <ServicesSection />
      <BlogSection />
      <ContactSection />
     
    </main> 
  )
}
