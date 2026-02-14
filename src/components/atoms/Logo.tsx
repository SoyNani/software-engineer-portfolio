import Link from "next/link";

/**
 * Logo component - displays the site branding
 * @param className - Additional CSS classes
 * @param href - Link destination, defaults to home
 */
interface LogoProps {
    className?: string;
    href?: string;
}

export function Logo ({ className = "", href = "#" }: LogoProps) {
    return (
        <Link
            href={href}
            className={`text-lg font-bold tracking-tight text-foreground transition-opacity hover:opacity-80 ${className}`}
            aria-label="Nani Dev - Home"
        >
            nani<span className="text-primary">.</span>dev
        </Link>
    );
};
