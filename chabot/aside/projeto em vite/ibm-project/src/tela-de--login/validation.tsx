import React, { useState, useEffect } from 'react';

type prop = {
  timeout: number,
  onTimeout: () => void
};

const InactivityTimer = ({ timeout, onTimeout }: prop) => {
  const [timer, setTimer] = useState<any>(null);

  useEffect(() => {
    const handleUserActivity = () => {
      if (timer) {
        clearTimeout(timer);
      }

      const newTimer = setTimeout(() => {
        onTimeout();
      }, timeout);

      setTimer(newTimer);
    };

    const resetTimer = () => {
      if (timer) {
        clearTimeout(timer);
      }
      handleUserActivity();
    };

    window.addEventListener('mousemove', resetTimer);
    window.addEventListener('keypress', resetTimer);

    resetTimer(); // Inicia o temporizador quando o componente é montado.

    return () => {
      window.removeEventListener('mousemove', resetTimer);
      window.removeEventListener('keypress', resetTimer);

      if (timer) {
        clearTimeout(timer);
      }
    };
  }, []);

  return <></>;
};

export default InactivityTimer;
