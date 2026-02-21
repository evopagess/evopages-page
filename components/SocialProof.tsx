import React from 'react';
import { motion } from 'framer-motion';

export const SocialProof: React.FC = () => {
  // Simulated high-end client brands/logos using typography
  const logos = [
    "NEXUS", "PRIMAL", "ELEVATE", "VANGUARD", "LEGACY", "SUMMIT", "APEX", "HORIZON"
  ];

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="py-12 border-y border-white/5 bg-black overflow-hidden relative">

      {/* Fade Gradients for Edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 text-center mb-8 relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm text-zinc-500 font-medium uppercase tracking-widest"
        >
          Especialistas em páginas para quem já faturou múltiplos 7 dígitos no digital.
        </motion.p>
      </div>

      <div className="flex relative w-full overflow-hidden">
        <motion.div
          className="flex gap-16 md:gap-24 items-center whitespace-nowrap"
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30, // Adjust speed here
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="text-xl md:text-2xl font-serif italic font-bold text-zinc-700 hover:text-white transition-colors duration-500 cursor-default select-none"
            >
              {logo}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};