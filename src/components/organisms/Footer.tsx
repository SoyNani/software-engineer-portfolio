import { FooterBranding } from "@/components/molecules/FooterBranding";

export const Footer = () => {
    return (
        <footer className="w-full py-8 px-6 border-t border-border/40 bg-background">
            <div className="container mx-auto px-6 max-w-7xl">
                <FooterBranding />
            </div>
        </footer>
    );
};
