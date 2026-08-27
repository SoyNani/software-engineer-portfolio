import { ContactCard } from "@/components/molecules/ContactCard";

export const ContactSection = () => {
    return (
        <section id="contact" className="py-20 md:py-28 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(79,72,228,0.06)_0%,transparent_55%)] pointer-events-none" />
            <div className="container mx-auto max-w-7xl px-6 md:px-10 relative z-10">
                <ContactCard />
            </div>
        </section>
    );
};
