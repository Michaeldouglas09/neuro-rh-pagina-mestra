
import React from 'react';

interface NeuroRHLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const NeuroRHLogo: React.FC<NeuroRHLogoProps> = ({ 
  className = "",
  size = "md" 
}) => {
  const sizeClasses = {
    sm: "w-24 h-24",
    md: "w-36 h-36",
    lg: "w-48 h-48"
  };

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      <img 
        src="/lovable-uploads/d79b4270-ed7e-4b43-8d05-0189649f2a2b.png" 
        alt="NeuroRH Logo" 
        className="w-full h-full object-contain"
        style={{
          filter: "drop-shadow(0px 4px 8px rgba(96, 66, 236, 0.3))"
        }}
      />
      
      {/* Gradiente de cor aplicado como overlay */}
      <div 
        className="absolute inset-0 mix-blend-color" 
        style={{
          background: "linear-gradient(135deg, #6042EC 0%, #9B87F5 100%)",
          opacity: 0.85,
          borderRadius: "50%"
        }}
      ></div>
    </div>
  );
};

export default NeuroRHLogo;
