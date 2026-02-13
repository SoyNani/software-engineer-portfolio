import { Navbar, HeroSection, AboutSection } from "@/components/organisms";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
      </main>

      <section id="projects" className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Proyectos - Coming soon</p>
      </section>

      <section id="architecture" className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Proceso - Coming soon</p>
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Contacto - Coming soon</p>
      </section>
    </div>
  );
}
