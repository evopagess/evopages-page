import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const LeadForm: React.FC = () => {

  const handleWhatsAppClick = () => {
    // Substitua pelo seu número real. Formato: 55 + DDD + Numero
    const phoneNumber = "5522992433227";
    const message = encodeURIComponent("Olá! Gostaria de fazer um orçamento de uma página com vocês!");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative bg-zinc-950 overflow-hidden border-t border-white/5">

      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-black to-black opacity-50 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-zinc-900 border border-white/10 text-zinc-400 text-xs font-bold tracking-[0.2em] uppercase mb-6">
              Contato Direto
            </span>

            <h2 className="text-4xl md:text-6xl font-medium mb-8 tracking-tight text-white leading-tight">
              Seu projeto merece <br />
              <span className="text-silver text-shadow-sm">atenção exclusiva.</span>
            </h2>

            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-12 font-light max-w-2xl mx-auto">
              Não deixamos você esperando. Fale diretamente com nossa equipe de especialistas e receba uma proposta personalizada para sua escala.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative inline-block group"
          >
            <motion.button
              onClick={handleWhatsAppClick}
              animate={{
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 0 0 0 rgba(37, 211, 102, 0)",
                  "0 0 30px 5px rgba(37, 211, 102, 0.4)",
                  "0 0 0 0 rgba(37, 211, 102, 0)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative flex items-center gap-4 bg-[#25D366] text-white px-8 md:px-12 py-6 md:py-8 rounded-sm font-bold text-sm md:text-base tracking-[0.15em] uppercase hover:bg-[#20bd5a] transition-all duration-300 border border-white/10"
            >
              <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span>Faça seu orçamento por WhatsApp</span>
              <ArrowRight className="w-4 h-4 text-white/90 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </motion.div>

          <div className="mt-8 flex items-center justify-center gap-2 text-zinc-600 text-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span>Online agora e respondendo rápido</span>
          </div>

        </div>
      </div>
    </section>
  );
};