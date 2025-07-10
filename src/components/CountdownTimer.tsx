
import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const target = new Date(targetDate).getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = target - now;
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="text-center mb-8">
      <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
        ÚLTIMAS VAGAS DISPONÍVEIS
      </div>
      
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
        <h3 className="text-lg font-semibold mb-3">Inscrições encerram em:</h3>
        <div className="grid grid-cols-4 gap-2">
          <div className="text-center">
            <div className="bg-neuro-purple rounded-lg p-2">
              <span className="text-xl font-bold">{timeLeft.days}</span>
            </div>
            <span className="text-xs mt-1 block">Dias</span>
          </div>
          <div className="text-center">
            <div className="bg-neuro-purple rounded-lg p-2">
              <span className="text-xl font-bold">{timeLeft.hours}</span>
            </div>
            <span className="text-xs mt-1 block">Horas</span>
          </div>
          <div className="text-center">
            <div className="bg-neuro-purple rounded-lg p-2">
              <span className="text-xl font-bold">{timeLeft.minutes}</span>
            </div>
            <span className="text-xs mt-1 block">Min</span>
          </div>
          <div className="text-center">
            <div className="bg-neuro-purple rounded-lg p-2">
              <span className="text-xl font-bold">{timeLeft.seconds}</span>
            </div>
            <span className="text-xs mt-1 block">Seg</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
