import React from 'react';

const Blob = ({ color, size, top, bottom, left, right, delay }) => {
  return (
    <div 
      className="blob"
      style={{
        width: size,
        height: size,
        background: color,
        top,
        bottom,
        left,
        right,
        animationDelay: delay,
      }}
    />
  );
};

export default Blob;