import React, { useRef, useEffect } from 'react';

const HalftoneMonolith: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let rotationX = 0;
    let rotationY = 0;

    // Configuration
    const gridSize = 40; 
    const spacing = 16;
    const objectSize = 240;
    
    // Generate points for a "Monolith" (Tall Cuboid)
    const points: { x: number; y: number; z: number }[] = [];
    
    // Create a dense volume of points, but only on surface to save perf and look cleaner
    for (let x = -objectSize / 2; x <= objectSize / 2; x += spacing) {
      for (let y = -objectSize; y <= objectSize; y += spacing) {
        for (let z = -objectSize / 4; z <= objectSize / 4; z += spacing) {
          // Only add points on the "skin" or sparsely inside
          if (
            Math.abs(x) >= objectSize / 2 - spacing ||
            Math.abs(y) >= objectSize - spacing ||
            Math.abs(z) >= objectSize / 4 - spacing
          ) {
            points.push({ x, y, z });
          }
        }
      }
    }

    const render = () => {
      // Resize handling
      if (canvas.width !== canvas.clientWidth || canvas.height !== canvas.clientHeight) {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
      }
      
      const width = canvas.width;
      const height = canvas.height;
      
      ctx.fillStyle = '#020202'; // Deep black background
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      // Rotate
      rotationY += 0.005; 
      rotationX = Math.sin(Date.now() * 0.001) * 0.2;

      const projectedPoints = points.map(p => {
        // Rotation Y
        const x1 = p.x * Math.cos(rotationY) - p.z * Math.sin(rotationY);
        const z1 = p.z * Math.cos(rotationY) + p.x * Math.sin(rotationY);
        
        // Rotation X
        const y2 = p.y * Math.cos(rotationX) - z1 * Math.sin(rotationX);
        const z2 = z1 * Math.cos(rotationX) + p.y * Math.sin(rotationX);

        // Perspective projection
        const scale = 800 / (800 + z2);
        const x2D = x1 * scale + cx;
        const y2D = y2 * scale + cy;

        return { x: x2D, y: y2D, scale, z: z2 };
      });

      // Draw
      
      projectedPoints.forEach(p => {
        const size = Math.max(0.5, 3 * p.scale * p.scale); 
        
        // Only draw if within bounds
        if (p.x > 0 && p.x < width && p.y > 0 && p.y < height) {
           ctx.globalAlpha = Math.min(1, Math.max(0.2, p.scale)); // Fade distant points
           
           // Neon Cyan Color for the Hacker Aesthetic
           ctx.fillStyle = '#00f3ff';
           
           ctx.beginPath();
           ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
           ctx.fill();
        }
      });
      
      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="w-full h-[600px] md:h-[800px] pointer-events-none"
    />
  );
};

export default HalftoneMonolith;