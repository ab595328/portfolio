import React, { useState, useEffect } from 'react';

const Cursor = () => {
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosX(e.clientX);
      setPosY(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div
        className="cursor-dot"
        style={{
          left: `${posX}px`,
          top: `${posY}px`,
        }}
      />
      <div
        className="cursor-outline"
        style={{
          left: `${posX}px`,
          top: `${posY}px`,
        }}
        ref={(ref) => {
          if (ref) {
            ref.animate(
              [
                {
                  left: `${posX}px`,
                  top: `${posY}px`,
                },
              ],
              {
                duration: 500,
                fill: 'forwards',
              }
            );
          }
        }}
      />
    </div>
  );
};

export default Cursor;