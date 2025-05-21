import React from 'react';
import { Sun } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <Sun className="w-full h-full" strokeWidth={2} />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-1/3 h-1/3 rounded-full bg-current" />
      </div>
    </div>
  );
};

export default Logo;