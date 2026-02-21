import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, RefreshCw, TrendingUp } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';

export const Services: React.FC = () => {
  const services = [
    {
      title: "Pack Launch (Lançamento)",
      desc: "O ecossistema completo para o seu evento.",
      icon: <Rocket className="w-6 h-6" />
    },
    {
      title: "Evergreen Pro (Perpétuo)",
      desc: "Foco em escala diária e otimização de conversão.",
      icon: <RefreshCw className="w-6 h-6" />
    },
    {
      title: "EVO Growth (Mensal)",
      desc: "Seu braço direito de design e performance. Ajustes mensais, testes A/B e suporte prioritário.",
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  return (
    <section id="services" className="py-32 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="mb-20">
          <span className="text-xs font-bold tracking-widest text-zinc-500 uppercase mb-4 block">Nossa Expertise</span>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight">Formatos de <span className="font-serif italic text-zinc-400">Entrega</span></h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <SpotlightCard className="p-10 h-full flex flex-col group border-white/5 hover:border-white/10" spotlightColor="rgba(255,255,255,0.08)">
                <div className="flex justify-between items-start mb-8">
                  <div className="p-3 bg-zinc-900 rounded-sm border border-zinc-800 text-zinc-300 group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-serif italic mb-6">{service.title}</h3>
                
                <p className="text-zinc-400 font-light leading-relaxed mb-8 flex-grow">
                  {service.desc}
                </p>

                <button className="w-full py-3 border border-zinc-800 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 rounded-sm">
                  Saber Mais
                </button>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};