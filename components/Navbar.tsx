import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [hidden, setHidden] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Hide navbar if we are in the hero section (e.g. < 500px scroll)
    // Show it once we scroll past
    if (latest < 300) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      variants={{
        visible: { y: 0, opacity: 1, filter: "blur(0px)" },
        hidden: { y: -100, opacity: 0, filter: "blur(10px)" },
      }}
      initial="hidden"
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
    >
      <div className="glass-panel px-6 py-3 rounded-full flex items-center gap-8 shadow-black/80 shadow-2xl bg-zinc-950/95 border border-white/10 relative overflow-hidden transform-gpu pointer-events-auto">

        <div className="pr-6 border-r border-white/10 py-0.5">
          <img
            src="https://drive.google.com/thumbnail?id=1piCYodJ9V8oQlwI_twTi8JS6sbzCEswC&sz=w400"
            alt="EVO"
            width="20"
            height="20"
            className="h-4 md:h-5 w-auto object-contain hover:opacity-80 transition-opacity"
          />
        </div>

        <div className="hidden md:flex gap-6 text-xs font-medium uppercase tracking-widest text-[#a1a1aa]">
          <button onClick={() => scrollTo('solution')} className="hover:text-white transition-colors">Solução</button>
          <button onClick={() => scrollTo('portfolio')} className="hover:text-white transition-colors">Portfólio</button>
          <button onClick={() => scrollTo('contact')} className="hover:text-white transition-colors">Contato</button>
        </div>

        <button
          onClick={() => scrollTo('contact')}
          className="ml-2 px-6 py-2.5 text-xs font-bold text-black bg-gradient-to-r from-white to-zinc-300 rounded-full hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 tracking-widest"
        >
          INICIAR
        </button>
      </div>
    </motion.nav>
  );
};