import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Layout, Monitor, Smartphone } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';
import { Button } from './Button';

export const Portfolio: React.FC = () => {
  const projects = [
    {
      category: "Lançamentos (Launch)",
      title: "Páginas de Captura & CPL",
      desc: "Estruturas otimizadas para aguentar tráfego massivo.",
      icon: <Layout className="w-6 h-6" />
    },
    {
      category: "Perpétuo (Sales)",
      title: "VSL & Páginas de Venda",
      desc: "Design focado em retenção e conversão imediata.",
      icon: <Monitor className="w-6 h-6" />
    },
    {
      category: "Mobile First",
      title: "Experiência Mobile",
      desc: "Navegação fluida onde 90% do seu público está.",
      icon: <Smartphone className="w-6 h-6" />
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-zinc-950 relative border-t border-white/5">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase mb-4 block">
              Selected Works
            </span>
            <h2 className="text-3xl md:text-5xl font-medium text-white mb-6">
              O design que <span className="font-serif italic text-zinc-400">separa</span> os amadores dos profissionais.
            </h2>
            <p className="text-zinc-400 font-light leading-relaxed text-lg">
              Não vendemos apenas layouts bonitos. Vendemos percepção de valor. Veja como transformamos a presença digital de nossos parceiros.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Desktop Button Position - Highlighted (Primary Variant) */}
            <div className="hidden md:block">
              <a href="https://www.behance.net/evopages/services" target="_blank" rel="noopener noreferrer">
                <Button variant="primary" className="group shadow-[0_4px_20px_-5px_rgba(229,231,235,0.3)]">
                  ACESSAR PORTFÓLIO
                  <ExternalLink className="w-3 h-3 ml-2 text-black/60 group-hover:text-black transition-colors" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Abstract Preview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <SpotlightCard className="h-full p-8 flex flex-col justify-between group hover:border-[#e5e7eb]/30 transition-colors bg-zinc-900/40">
                <div>
                  <div className="w-12 h-12 bg-white/5 rounded-sm flex items-center justify-center mb-6 text-zinc-300 group-hover:text-[#e5e7eb] group-hover:bg-[#e5e7eb]/10 transition-all duration-500">
                    {project.icon}
                  </div>
                  <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2 block">{project.category}</span>
                  <h3 className="text-xl font-medium text-zinc-200 mb-3">{project.title}</h3>
                  <p className="text-sm text-zinc-400 font-light leading-relaxed">{project.desc}</p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Mobile Button Position - Highlighted (Primary Variant) */}
        <div className="md:hidden flex justify-center">
          <a href="https://www.behance.net/evopages/services" target="_blank" rel="noopener noreferrer" className="w-full">
            <Button variant="primary" fullWidth className="group shadow-[0_4px_20px_-5px_rgba(229,231,235,0.3)]">
              ACESSAR PORTFÓLIO BEHANCE
              <ExternalLink className="w-3 h-3 ml-2 text-black/60 group-hover:text-black transition-colors" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};