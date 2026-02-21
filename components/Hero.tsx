import React, { useRef, useEffect } from 'react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  const [imageError, setImageError] = React.useState(false);
  const containerRef = useRef<HTMLElement>(null);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const parallaxBgRef = useRef<HTMLDivElement>(null);
  const parallaxContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Aggressive Parallax Implementation - High Visibility
    let ticking = false;
    const bg = parallaxBgRef.current;
    const content = parallaxContentRef.current;

    // Reset any CSS transitions that might fight JS transforms
    if (bg) {
      bg.style.transition = 'none';
      bg.style.willChange = 'transform';
      bg.style.transform = 'translate3d(0,0,0) scale(2.0)'; // Massive scale for absolute safety
    }
    if (content) {
      content.style.transition = 'none';
      content.style.willChange = 'transform';
      content.style.transform = 'translate3d(0,0,0)';
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY;

          // Direct, unmistakable movement factors
          if (window.innerWidth >= 992) { // Target Laptops and Desktops
            if (bg) {
              // Background moves DOWN significantly
              bg.style.transform = `translate3d(0, ${scrolled * 0.6}px, 0) scale(2.0)`;
            }
            if (content) {
              // Content moves UP significantly
              content.style.transform = `translate3d(0, ${scrolled * -0.3}px, 0)`;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Low performance overhead context
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Track mouse position
    let mouseX = -1000;
    let mouseY = -1000;

    let drops: number[] = [];
    let animationFrameId: number;

    const symbols = ['< >', 'div', '{ }', 'px', '01', 'rem', '()', '/>', 'src', 'id', 'npm', 'var', 'if', '&&', '90+', 'ms'];

    // Optimize resizing
    const initCanvas = () => {
      // Get parent container dimensions
      const parent = canvas.parentElement;
      if (!parent) return;

      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
      const columns = Math.floor(canvas.width / 20);

      if (drops.length === 0 || Math.abs(drops.length - columns) > 5) {
        drops = new Array(columns).fill(1).map(() => Math.random() * -100); // Random start
      }
    };

    let lastDrawTime = 0;
    const fps = 24; // Lock to 24fps for a cinematic/performant feel
    const frameInterval = 1000 / fps;

    const draw = (timestamp: number) => {
      animationFrameId = requestAnimationFrame(draw);

      if (timestamp - lastDrawTime < frameInterval) return;
      lastDrawTime = timestamp;

      // Premium dark fade
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < drops.length; i++) {
        const text = symbols[Math.floor(Math.random() * symbols.length)];

        const x = i * 20;
        const y = drops[i] * 20;

        // Calculate distance from mouse for interactive glow
        const dx = mouseX - x;
        const dy = mouseY - y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Dynamic opacity based on mouse distance (glow radius ~150px)
        if (distance < 150) {
          // Bright Silver near mouse
          const intensity = 1 - (distance / 150);
          ctx.fillStyle = `rgba(255, 255, 255, ${0.4 + (intensity * 0.4)})`;
          // Optional: make text slightly larger near mouse for extra effect
          ctx.font = `${14 + (intensity * 2)}px monospace text-shadow`;
        } else {
          // Default Silver
          ctx.fillStyle = 'rgba(156, 163, 175, 0.15)';
          ctx.font = '14px monospace';
        }

        // Draw the character
        if (drops[i] > 0) {
          ctx.fillText(text, x, y);
        }

        // Reset drop randomly to create stagger
        if (y > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    initCanvas();
    animationFrameId = requestAnimationFrame(draw);

    // Debounced Resize Listener
    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(initCanvas, 200);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(resizeTimer);
    };
  }, []);

  const scrollToForm = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[110vh] flex flex-col justify-center items-center pt-24 pb-12 overflow-hidden bg-black selection:bg-white/30"
      style={{ transformStyle: 'preserve-3d' }}
    >

      {/* Background Asset - Modern Silver/Dark Metallic CSS */}
      <div
        ref={parallaxBgRef}
        className="absolute inset-0 z-0 bg-zinc-950 pointer-events-none"
        style={{ transform: 'translate3d(0,0,0) scale(2.0)', backfaceVisibility: 'hidden' }}
      >

        {/* Base Darkness Layers */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000,#1a1a1a,#000000)] opacity-100"></div>

        {/* Atmospheric Glows - Reduced blur radius complexity for performance */}
        <div className="absolute inset-0 overflow-hidden transform-gpu">
          <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg_at_50%_50%,_#000000_0deg,_#18181b_100deg,_#000000_180deg,_#18181b_280deg,_#000000_360deg)] opacity-20 animate-slow-spin will-change-transform"></div>
        </div>

        <div className="absolute top-0 left-0 right-0 h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800/10 to-transparent transform-gpu border-t border-zinc-800/10"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/10 to-transparent rounded-full transform-gpu"></div>

        {/* Luxurious Canvas Matrix Overlay */}
        <div className="absolute inset-0 z-10 mix-blend-screen pointer-events-auto" style={{ maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)' }}>
          <canvas ref={canvasRef} className="w-full h-full cursor-crosshair opacity-30" />
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0)_60%)] z-10"></div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black z-20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000000_100%)] opacity-80 z-20"></div>
      </div>

      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none z-0"></div>

      <div
        ref={parallaxContentRef}
        className="container mx-auto px-4 z-30 relative text-center"
        style={{ backfaceVisibility: 'hidden' }}
      >

        <div className="mb-8 flex justify-center">
          {!imageError ? (
            <img
              src="https://drive.google.com/thumbnail?id=1p7YctWDr0zL4ZbCDKixFXlys9HO63tgw&sz=w1000"
              alt="EVO Logo"
              width="64"
              height="64"
              className="h-12 md:h-16 w-auto object-contain drop-shadow-sm"
              onError={() => setImageError(true)}
              referrerPolicy="no-referrer"
              loading="eager" // Critical LCP element
            />
          ) : (
            <div className="reveal active delay-200">
              <span className="inline-block py-1 px-3 rounded-full bg-zinc-900 border border-white/10 text-zinc-400 text-xs font-bold tracking-[0.2em] uppercase">
                EVO - Design & Performance
              </span>
            </div>
          )}
        </div>

        <h1 className="reveal active delay-300 text-3xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-8 text-white max-w-5xl mx-auto leading-[1.1] transform-gpu shadow-black/50 text-shadow-sm">
          Sua página de vendas com <br className="hidden md:block" />
          <span className="font-serif italic font-light text-silver opacity-90">design de alto padrão</span> <br className="hidden md:block" />
          e carregamento instantâneo.
        </h1>

        <div className="reveal active delay-500 h-px w-24 bg-gradient-to-r from-transparent via-zinc-500 to-transparent mx-auto mb-8"></div>

        <p className="reveal active delay-700 text-base md:text-lg text-zinc-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed tracking-wide py-2 rounded-lg bg-black/40 px-4 transform-gpu">
          Paramos de perder seu dinheiro com sites lentos e amadores que espantam seus clientes.
          Criamos a estrutura técnica para você escalar seu infoproduto com <span className="text-zinc-200 font-medium">autoridade</span>.
        </p>

        <div className="reveal active delay-1000">
          <Button onClick={scrollToForm} className="shadow-[0_4px_20px_-5px_rgba(229,231,235,0.1)] hover:shadow-[0_4px_30px_-5px_rgba(229,231,235,0.25)] transition-all duration-700 text-black w-full md:w-auto transform-gpu tracking-[0.2em]">
            SOLICITAR ORÇAMENTO PREMIUM
          </Button>
        </div>

      </div>
    </section>
  );
};