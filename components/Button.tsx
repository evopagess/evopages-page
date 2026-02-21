import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles = "relative inline-flex items-center justify-center px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-500 overflow-hidden rounded-sm group";

  const variants = {
    primary: "bg-gradient-to-r from-[#e5e7eb] to-[#9ca3af] text-black border-none shadow-[0_4px_20px_-5px_rgba(229,231,235,0.3)] hover:shadow-[0_4px_30px_-5px_rgba(229,231,235,0.6)]",
    secondary: "bg-transparent text-white border border-white/20 hover:border-[#e5e7eb]/50 hover:bg-[#e5e7eb]/5 hover:shadow-[0_4px_20px_rgba(229,231,235,0.15)] hover:text-[#e5e7eb]"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-3">
        {children}
        {variant === 'primary' && <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />}
      </span>
    </button>
  );
};