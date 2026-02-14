import { AboutSection } from "@/components/organisms/AboutSection";
import { HeroSection } from "@/components/organisms/HeroSection";
import { Navbar } from "@/components/organisms/Navbar";
import { ProjectsSection } from "@/components/organisms/ProjectsSection";
import { ProcessSection } from "@/components/organisms/ProcessSection";


export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ProcessSection />
      </main>

      <section id="contact" className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Contacto - Coming soon</p>
      </section>
    </div>
  );
}
