import React from 'react';

interface VintageButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  className?: string;
}

export const VintageButton: React.FC<VintageButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "px-6 py-3 font-bold uppercase tracking-wider transition-all duration-200 active:translate-x-[2px] active:translate-y-[2px] active:shadow-retro-hover font-mono text-sm border-2 border-vintage-border";
  
  const variants = {
    primary: "bg-vintage-red text-white shadow-retro hover:bg-red-800",
    secondary: "bg-vintage-gold text-vintage-charcoal shadow-retro hover:bg-yellow-600",
    outline: "bg-transparent text-vintage-charcoal shadow-retro hover:bg-vintage-charcoal hover:text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};