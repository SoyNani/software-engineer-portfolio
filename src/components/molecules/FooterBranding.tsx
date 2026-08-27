export const FooterBranding = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4 text-sm text-white/30">
            <p className="font-light">
                © {currentYear} Laura Daniela López Jiménez
            </p>
            <p className="font-light text-xs tracking-wide">
                nani.dev
            </p>
        </div>
    );
};
