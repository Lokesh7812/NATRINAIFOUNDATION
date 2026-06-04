import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [phase, setPhase] = useState<"in" | "hold" | "out">("in");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("hold"), 1200);
    const t2 = setTimeout(() => setPhase("out"), 2600);
    const t3 = setTimeout(() => onComplete(), 3400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "out" && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0D5D42 0%, #0a4a35 50%, #123D6A 100%)" }}
        >
          {/* Background texture */}
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="loader-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <circle cx="30" cy="30" r="1" fill="white" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#loader-grid)" />
            </svg>
          </div>

          {/* Radial glow behind logo */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.8, opacity: 0.15 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute w-80 h-80 rounded-full"
            style={{ background: "radial-gradient(circle, #5AAE3D 0%, transparent 70%)" }}
          />

          <div className="relative flex flex-col items-center gap-8 select-none">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.4, opacity: 0, filter: "blur(12px)" }}
              animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="relative"
            >
              {/* Outer ring pulse */}
              <motion.div
                animate={{ scale: [1, 1.18, 1], opacity: [0.4, 0, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="absolute inset-0 rounded-full border-2 border-[#D79A1E]/60 scale-[1.3]"
              />
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0, 0.2] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
                className="absolute inset-0 rounded-full border border-[#5AAE3D]/40 scale-[1.6]"
              />

              <div className="w-28 h-28 rounded-full bg-white p-2.5 shadow-2xl shadow-black/30 flex items-center justify-center">
                <img
                  src="/natrinai-logo.jpeg"
                  alt="Natrinai Foundation"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
            </motion.div>

            {/* Text block */}
            <div className="text-center overflow-hidden">
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
              >
                <h1
                  className="text-4xl font-black text-white tracking-wider"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  NATRINAI
                </h1>
                <p
                  className="text-xs tracking-[0.45em] text-white/60 mt-1"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  FOUNDATION
                </p>
              </motion.div>

              {/* Separator line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 1.0 }}
                className="h-px bg-gradient-to-r from-transparent via-[#D79A1E] to-transparent mt-4 mb-4"
              />

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="text-[#D79A1E] text-sm font-medium"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Empowering Youth. Enriching Communities.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ duration: 0.6, delay: 1.5 }}
                className="text-white/50 text-xs mt-1.5"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                நல் செய், நலம்தர
              </motion.p>
            </div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="w-48 h-0.5 bg-white/10 rounded-full overflow-hidden"
            >
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.0, ease: "easeInOut", delay: 0.4 }}
                className="h-full bg-gradient-to-r from-[#5AAE3D] to-[#D79A1E] rounded-full"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
