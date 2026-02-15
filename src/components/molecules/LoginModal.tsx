"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useAuth } from "@/context/AuthContext";
import { X, Lock, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
    const { login } = useAuth();
    const [mounted, setMounted] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    useEffect(() => {
        if (isOpen && mounted) {
            document.body.style.overflow = "hidden";
        } else {
            const hasOtherModals = document.querySelectorAll('[role="dialog"]').length > 1;
            if (!hasOtherModals) {
                document.body.style.overflow = "unset";
            }
        }
    }, [isOpen, mounted]);

    if (!isOpen || !mounted) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        setTimeout(() => {
            const success = login(username, password);
            if (success) {
                onClose();
            } else {
                setError("Credenciales incorrectas. Por favor, intenta de nuevo.");
            }
            setIsLoading(false);
        }, 800);
    };

    return createPortal(
        <div
            className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
        >
            <div
                className="fixed inset-0 bg-background/80 backdrop-blur-md"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-md bg-card border border-border shadow-2xl rounded-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
                <div className="p-6 border-b border-border flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                            <Lock size={18} />
                        </div>
                        <h2 className="text-xl font-bold">Acceso Reclutadores</h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-muted-foreground hover:text-foreground transition-colors p-1"
                    >
                        <X size={20} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-muted-foreground" htmlFor="username">
                            Usuario
                        </label>
                        <input
                            id="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 outline-none focus:border-primary/50 transition-colors"
                            placeholder="Usuario asignado"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-muted-foreground" htmlFor="password">
                            Contraseña
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 outline-none focus:border-primary/50 transition-colors"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    {error && (
                        <p className="text-sm text-destructive font-medium bg-destructive/10 p-3 rounded-lg">
                            {error}
                        </p>
                    )}

                    <div className="pt-2">
                        <Button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-6 text-base font-semibold rounded-xl gradient-button"
                        >
                            {isLoading ? (
                                <Loader2 className="animate-spin mr-2" size={20} />
                            ) : null}
                            {isLoading ? "Verificando..." : "Ingresar"}
                        </Button>
                    </div>

                    <p className="text-xs text-center text-muted-foreground pt-2">
                        Esta zona es exclusiva para visualización de datos de contacto protegidos.
                    </p>
                </form>
            </div>
        </div>,
        document.body
    );
};
