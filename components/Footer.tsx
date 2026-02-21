import React from 'react';
import { Zap } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-white/5 bg-black">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <div className="text-zinc-400 text-sm">
          &copy; {new Date().getFullYear()} EVO Design & Performance. All rights reserved.
        </div>

        <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900/50 rounded-full border border-green-900/30">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </div>
          <Zap className="w-4 h-4 text-green-500" />
          <span className="text-xs font-mono text-green-400">
            Essa página foi projetada para carregar em 1 segundo, quer que a sua seja assim também?
          </span>
        </div>

      </div>
    </footer>
  );
};