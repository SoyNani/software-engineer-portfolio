"use client";

import { motion } from "framer-motion";

export function ScrollIndicator() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            aria-label="Scroll down"
            role="img"
        >
            <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center">
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                    className="w-0.5 h-1.5 bg-white/40 rounded-full mt-1.5"
                />
            </div>
        </motion.div>
    );
}
