import { NavLink } from "@/types/navigation.types";

export const navLinks: NavLink[] = [
    { label: "Sobre mí", href: "#about" },
    { label: "Experiencia", href: "#experience", isProtected: true },
    { label: "Proyectos", href: "#projects" },
    { label: "Educación", href: "#education", isProtected: true },
    { label: "Proceso", href: "#architecture" },
    { label: "Contacto", href: "#contact" },
];
