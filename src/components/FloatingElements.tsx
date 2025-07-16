import { useEffect, useState } from 'react';

const FloatingElements = () => {
  const [elements, setElements] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    opacity: number;
    speed: number;
  }>>([]);

  useEffect(() => {
    const newElements = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 2 + Math.random() * 6,
      opacity: 0.1 + Math.random() * 0.4,
      speed: 0.5 + Math.random() * 1.5,
    }));

    setElements(newElements);

    const interval = setInterval(() => {
      setElements(prev => 
        prev.map(el => ({
          ...el,
          y: (el.y + el.speed * 0.1) % 100,
          x: el.x + Math.sin(Date.now() * 0.001 + el.id) * 0.1,
        }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute rounded-full bg-primary animate-pulse"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            opacity: element.opacity,
            transform: `translate(-50%, -50%)`,
          }}
        />
      ))}
      
      {/* Neural network connections */}
      <svg className="absolute inset-0 w-full h-full">
        {elements.slice(0, 6).map((element, index) => {
          const nextElement = elements[(index + 1) % 6];
          return (
            <line
              key={`line-${index}`}
              x1={`${element.x}%`}
              y1={`${element.y}%`}
              x2={`${nextElement?.x}%`}
              y2={`${nextElement?.y}%`}
              stroke="hsl(var(--primary))"
              strokeWidth="0.5"
              opacity="0.1"
              className="animate-pulse"
            />
          );
        })}
      </svg>
    </div>
  );
};

export default FloatingElements;