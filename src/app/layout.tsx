import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://software-engineer-portfolio-mu.vercel.app"),
  title: {
    default: "Laura López | Desarrolladora de Software",
    template: "%s | Laura López",
  },
  description:
    "Portafolio de Laura López, desarrolladora de software en Bucaramanga, Colombia. Proyectos en Flutter y desarrollo fullstack.",
  keywords: ["Laura López", "Laura López desarrolladora", "software developer Bucaramanga"],
  authors: [{ name: "Laura López", url: "https://software-engineer-portfolio-mu.vercel.app" }],
  creator: "Laura López",
  openGraph: {
    title: "Laura López | Desarrolladora de Software",
    description:
      "Desarrolladora de software especializada en Flutter y React. Descubre mis proyectos y trayectoria.",
    url: "https://software-engineer-portfolio-mu.vercel.app",
    siteName: "Laura López",
    locale: "es_CO",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laura López | Desarrolladora de Software",
    description:
      "Desarrolladora de software especializada en Flutter y React. Descubre mis proyectos y trayectoria.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://software-engineer-portfolio-mu.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Laura López",
    alternateName: ["Laura Daniela López Jiménez", "Nani", "Soy Nani"],
    url: "https://software-engineer-portfolio-mu.vercel.app",
    jobTitle: "Desarrolladora de Software",
    sameAs: [
      "https://linkedin.com/in/laura-daniela-lópez-jiménez",
      "https://github.com/SoyNani/SoyNani",
      "https://www.instagram.com/soyynani",
      "https://www.tiktok.com/@soyynaniii",
    ],
  };
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} h-full`}>
      <body className="min-h-full">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
