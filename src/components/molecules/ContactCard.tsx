"use client";

import { Github, Linkedin, MessageCircle, Mail, Lock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SocialIcon } from "@/components/atoms/SocialIcon";
import { useAuth } from "@/context/AuthContext";

export const ContactCard = () => {
    const { isLoggedIn } = useAuth();
    const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
    const email = process.env.NEXT_PUBLIC_EMAIL || "";
    const message = encodeURIComponent("Hola Laura nos gusto tú perfil, quiero saber más de ti");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

    return (
        <Card className="w-full mx-auto bg-card backdrop-blur-sm border-border/50 py-12 px-6 flex flex-col items-center text-center gap-12 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_-5px_rgba(145,80,226,0.3)]">
            <CardContent className="space-y-4 p-0">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-4">
                    Construyamos algo <span className="gradient-text">juntos</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    ¿Tienes un proyecto en mente? Me encantaría saber más sobre
                    tu idea y cómo puedo ayudar a llevarla al siguiente nivel.
                </p>
                {!isLoggedIn && (
                    <div className="flex flex-col items-center justify-center gap-2 text-primary/80 bg-primary/5 border border-primary/20 py-4 px-6 rounded-2xl max-w-xl mx-auto mt-6">
                        <div className="flex items-center gap-2">
                            <Lock size={14} />
                            <span className="text-sm font-semibold uppercase tracking-wider">Acceso Restringido</span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed italic">
                            "No dudes en escribirme para solicitar las credenciales de acceso y que puedas ver todo sobre mi perfil."
                        </p>
                    </div>
                )}
            </CardContent>

            <div className="flex items-center justify-center flex-wrap gap-8">
                {isLoggedIn && (
                    <>
                        <SocialIcon
                            href={gmailUrl}
                            icon={Mail}
                            label="Email"
                        />
                        <SocialIcon
                            href={whatsappUrl}
                            icon={MessageCircle}
                            label="WhatsApp"
                        />
                    </>
                )}
                <SocialIcon
                    href="https://www.linkedin.com/in/laura-daniela-lópez-jiménez"
                    icon={Linkedin}
                    label="LinkedIn"
                />
                <SocialIcon
                    href="https://github.com/SoyNani"
                    icon={Github}
                    label="GitHub"
                />
            </div>
        </Card>
    );
};
