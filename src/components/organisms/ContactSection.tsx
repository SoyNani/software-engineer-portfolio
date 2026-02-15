import { ContactCard } from "@/components/molecules/ContactCard";

export const ContactSection = () => {
    return (
        <section id="contacto" className="py-24 px-6 relative overflow-hidden bg-[#08080B]">
            <div className="container mx-auto max-w-7xl px-6 relative z-10">
                <ContactCard />
            </div>
        </section>
    );
};
