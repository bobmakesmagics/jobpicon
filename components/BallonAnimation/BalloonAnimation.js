import React, { useState, useEffect } from 'react';

const getRandomColor = () => {
  const baseColor = [180, 182, 233];
  const variation = 30;
  const color = baseColor.map(
    (channel) => channel + Math.floor(Math.random() * variation)
  );
  return `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.8)`;
};

const getRandomAnimation = (index) => {
  // const duration = Math.random() * 10 + 5;
  const x = Math.random() * 20 - 10;
  const y = Math.random() * 20 - 10;
  const angle = Math.random() * 20 - 10;
  return `
    @keyframes move-${index} {
      0% {
        transform: translate3d(0, 0, 0) rotate(0);
      }
      100% {
        transform: translate3d(${x}px, ${y}px, 0) rotate(${angle}deg);
      }
    }
  `;
};

const Balloon = ({ index }) => {
  const size = Math.random() * 200 + 100;
  const style = {
    left: Math.random() * 100 + '%',
    top: Math.random() * 100 + '%',
    width: size + 'px',
    height: size + 'px',
    background: getRandomColor(),
    animation: `move-${index} ${Math.random() * 10 + 5}s infinite alternate ease-in-out`,
  };

  return <div className={`balloon balloon-${index}`} style={style} />;
};

const BalloonAnimation = ({ numberOfBalloons }) => {
  const [balloons, setBalloons] = useState([]);

  useEffect(() => {
    const generatedBalloons = Array.from({ length: numberOfBalloons }, (_, i) => (
      <Balloon key={i} index={i} />
    ));
    setBalloons(generatedBalloons);
  }, [numberOfBalloons]);

  const animations = balloons.map((_, i) => getRandomAnimation(i)).join('');

  return (
    <>
      <style>{animations}</style>
      <div className="balloonContainer">{balloons}</div>
    </>
  );
};

export default BalloonAnimation;
