import React from 'react';
import { Zap, Smartphone, Crown, Users } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';

export const Solution: React.FC = () => {
  const items = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Velocidade Extrema",
      text: "Otimizamos cada linha de código para que sua página abra instantaneamente, baixando seu custo por clique (CPC).",
      colSpan: "md:col-span-2"
    },
    {
      icon: <Crown className="w-5 h-5" />,
      title: "Autoridade Visual",
      text: "Design moderno e exclusivo que posiciona você como um líder no seu nicho antes mesmo do cliente ler a primeira frase.",
      colSpan: "md:col-span-1"
    },
    {
      icon: <Smartphone className="w-5 h-5" />,
      title: "Foco Total em Mobile",
      text: "90% do seu tráfego vem do celular. Suas páginas serão perfeitas no dedo do seu cliente.",
      colSpan: "md:col-span-1"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Suporte de Quem Entende",
      text: "Sabemos o que é um lançamento. Se precisar de ajuste rápido para o checkout, nós estamos aqui.",
      colSpan: "md:col-span-2 lg:col-span-4"
    }
  ];

  return (
    <section id="solution" className="py-20 md:py-32 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20 gap-8">
          <div
            className="md:w-2/3 reveal active"
          >
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-tight">
              Nós não apenas "fazemos sites". <br />
              <span className="font-serif italic text-silver drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">Nós construímos ativos de venda:</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className={`${item.colSpan} reveal active`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <SpotlightCard className="h-full p-6 md:p-8 flex flex-col justify-between min-h-[200px] md:min-h-[220px] group hover:bg-white/5 transition-colors border border-white/5 hover:border-white/20 hover:shadow-[0_0_30px_-10px_rgba(255,255,255,0.1)]">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white/5 rounded-sm text-white border border-white/5 group-hover:border-white/40 group-hover:shadow-[0_0_10px_rgba(255,255,255,0.2)] transition-all">
                    {item.icon}
                  </div>
                  <span className="text-[10px] text-zinc-600 uppercase font-mono group-hover:text-zinc-400">0{i + 1}</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3 text-zinc-100">{item.title}</h3>
                  <p className="text-zinc-400 text-sm font-light leading-relaxed">{item.text}</p>
                </div>
              </SpotlightCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};