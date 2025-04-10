
import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const distance = targetDate.getTime() - now.getTime();

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="grid grid-cols-4 gap-4 sm:gap-6 max-w-md mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '1.2s' }}>
      <div className="flex flex-col items-center justify-center p-3 sm:p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm">
        <span className="text-2xl sm:text-3xl font-semibold text-theme-purple">{days}</span>
        <span className="text-xs sm:text-sm text-gray-500">Days</span>
      </div>
      <div className="flex flex-col items-center justify-center p-3 sm:p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm">
        <span className="text-2xl sm:text-3xl font-semibold text-theme-purple">{hours}</span>
        <span className="text-xs sm:text-sm text-gray-500">Hours</span>
      </div>
      <div className="flex flex-col items-center justify-center p-3 sm:p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm">
        <span className="text-2xl sm:text-3xl font-semibold text-theme-purple">{minutes}</span>
        <span className="text-xs sm:text-sm text-gray-500">Minutes</span>
      </div>
      <div className="flex flex-col items-center justify-center p-3 sm:p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm">
        <span className="text-2xl sm:text-3xl font-semibold text-theme-purple">{seconds}</span>
        <span className="text-xs sm:text-sm text-gray-500">Seconds</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
