export const FooterBranding = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="flex flex-col md:flex-row items-center justify-center w-full gap-4 text-sm text-muted-foreground">
            <p>
                © {currentYear} Laura Daniela López Jiménez. Todos los derechos reservados.
            </p>
        </div>
    );
};
