import React from 'react';
import { Clock, Activity, Ban } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';

export const PainPoints: React.FC = () => {
  const pains = [
    {
      icon: <Clock className="w-8 h-8 text-white/80 group-hover:text-red-500 transition-colors duration-500" />,
      title: "O site demora a abrir",
      description: "Se sua página leva mais de 3 segundos para carregar, metade dos seus cliques no anúncio nem chegam a ver sua oferta."
    },
    {
      icon: <Ban className="w-8 h-8 text-white/80 group-hover:text-red-500 transition-colors duration-500" />,
      title: "Design que não passa confiança",
      description: "Se sua página parece \"feita por amador\", o cliente tem medo de passar o cartão."
    },
    {
      icon: <Activity className="w-8 h-8 text-white/80 group-hover:text-red-500 transition-colors duration-500" />,
      title: "Páginas que travam no pico",
      description: "Não há nada pior que o site cair no momento em que você abre o carrinho."
    }
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden" style={{ contentVisibility: 'auto', containIntrinsicSize: '600px' }}>
      {/* Background Glow - Reverted to Red */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <h2
            className="text-3xl md:text-6xl font-bold mb-6 reveal active"
          >
            O <span className="font-serif italic font-normal text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">Custo</span> do <span className="font-serif italic font-normal text-zinc-600 line-through decoration-red-900/50 decoration-2">Amadorismo</span>
          </h2>
          <p className="text-xl text-zinc-400 font-light">Onde seu dinheiro está escorrendo pelo ralo hoje:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pains.map((pain, index) => (
            <div
              key={index}
              className="reveal active"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <SpotlightCard
                className="p-8 md:p-10 h-full hover:border-red-500/40 transition-colors duration-500 group bg-zinc-900/20"
                spotlightColor="rgba(220, 38, 38, 0.25)"
              >
                <div className="mb-8 bg-gradient-to-br from-zinc-800 to-black w-16 h-16 rounded-full flex items-center justify-center border border-white/10 group-hover:border-red-500/50 group-hover:shadow-[0_0_30px_-10px_rgba(220,38,38,0.5)] transition-all duration-500">
                  {pain.icon}
                </div>
                <h3 className="text-2xl font-serif italic mb-4 text-white group-hover:text-red-100 transition-colors">{pain.title}</h3>
                <p className="text-zinc-400 leading-relaxed font-light group-hover:text-zinc-300 transition-colors">
                  {pain.description}
                </p>
              </SpotlightCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};