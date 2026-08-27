"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function KineticCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 350, damping: 28 });
  const sy = useSpring(y, { stiffness: 350, damping: 28 });
  const scale = useSpring(1, { stiffness: 300, damping: 20 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const down = () => scale.set(0.7);
    const up = () => scale.set(1);
    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, [x, y, scale]);

  return (
    <>
      <motion.div
        className="kinetic-cursor pointer-events-none fixed top-0 left-0 z-[100] mix-blend-difference"
        style={{
          x: sx,
          y: sy,
          scale,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div className="h-4 w-4 rounded-full bg-white" />
      </motion.div>
      <motion.div
        className="kinetic-cursor pointer-events-none fixed top-0 left-0 z-[99]"
        style={{
          x: sx,
          y: sy,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div
          className="h-10 w-10 rounded-full border border-white/30"
          style={{ animation: "pulse-ring 1.8s ease-out infinite" }}
        />
      </motion.div>
    </>
  );
}
