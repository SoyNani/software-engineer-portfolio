import { FooterBranding } from "@/components/molecules/FooterBranding";

export const Footer = () => {
    return (
        <footer className="w-full py-10 px-6 border-t border-white/5">
            <div className="container mx-auto px-6 md:px-10 max-w-7xl">
                <FooterBranding />
            </div>
        </footer>
    );
};
