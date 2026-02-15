"use client";

import React from "react";
import { useAuth } from "@/context/AuthContext";
import { AnimatePresence, motion } from "framer-motion";

interface ProtectedAreaProps {
    children: React.ReactNode;
}

export const ProtectedArea = ({ children }: ProtectedAreaProps) => {
    const { isLoggedIn } = useAuth();

    return (
        <AnimatePresence>
            {isLoggedIn && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="overflow-hidden"
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
};
