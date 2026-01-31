import React, { useEffect, useState, useMemo } from 'react';

const CodeFloater = () => {
  const [floaters, setFloaters] = useState([]);

  // ✅ Use useMemo to stabilize symbols array
  const symbols = useMemo(() => ["< >", "{ }", "();", "if", "for", "const", "let", "return", "=>"], []);

  useEffect(() => {
    const createFloater = () => {
      const newFloater = {
        id: Date.now(),
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 25 + 14,
        duration: Math.random() * 12 + 8,
      };

      setFloaters(prev => [...prev, newFloater]);

      setTimeout(() => {
        setFloaters(prev => prev.filter(f => f.id !== newFloater.id));
      }, 15000);
    };

    const interval = setInterval(createFloater, 300);
    return () => clearInterval(interval);
  }, [symbols]); // ✅ symbols added to dependency array

  return (
    <>
      {floaters.map(floater => (
        <span
          key={floater.id}
          className="code-floater"
          style={{
            left: `${floater.left}vw`,
            top: `${floater.top}vh`,
            fontSize: `${floater.size}px`,
            animationDuration: `${floater.duration}s`,
          }}
        >
          {floater.symbol}
        </span>
      ))}
    </>
  );
};

export default CodeFloater;
