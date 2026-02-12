import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  pulse?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  className, 
  variant = 'primary', 
  fullWidth = false,
  pulse = false,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-4 text-lg font-bold transition-all duration-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 transform active:scale-95";
  
  const variants = {
    primary: "bg-brand-600 hover:bg-brand-700 text-white shadow-lg shadow-brand-500/30",
    secondary: "bg-gray-900 hover:bg-gray-800 text-white shadow-lg",
    outline: "border-2 border-brand-600 text-brand-600 hover:bg-brand-50"
  };

  const widthClass = fullWidth ? "w-full" : "";
  const pulseClass = pulse ? "animate-pulse-fast" : "";

  return (
    <button 
      className={twMerge(baseStyles, variants[variant], widthClass, pulseClass, className)}
      {...props}
    >
      {children}
    </button>
  );
};