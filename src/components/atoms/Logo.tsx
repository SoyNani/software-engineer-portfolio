import Link from "next/link";

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
