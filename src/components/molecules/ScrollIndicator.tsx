import { motion } from "framer-motion";

export function ScrollIndicator () {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            aria-label="Scroll down for more content"
            role="img"
        >
            <div className="w-5 h-8 border-2 border-muted-foreground/30 rounded-full flex justify-center">
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-1 h-2 bg-muted-foreground/50 rounded-full mt-1.5"
                    style={{ willChange: 'transform' }}
                />
            </div>
        </motion.div>
    );
};
