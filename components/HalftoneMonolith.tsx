import React, { useRef, useEffect } from 'react';

const HalftoneMonolith: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set initial canvas size
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    let animationFrameId: number;
    let rotationX = 0;
    let rotationY = 0;

    // Configuration
    const gridSize = 40; 
    const spacing = 18;
    const objectWidth = 200;
    const objectHeight = 500; // Taller monolith
    const objectDepth = 100;
    
    // Generate points for a "Monolith" (Tall Cuboid)
    const points: { x: number; y: number; z: number }[] = [];
    
    // Create points only on the surface to look cleaner
    for (let x = -objectWidth / 2; x <= objectWidth / 2; x += spacing) {
      for (let y = -objectHeight / 2; y <= objectHeight / 2; y += spacing) {
        for (let z = -objectDepth / 2; z <= objectDepth / 2; z += spacing) {
          if (
            Math.abs(x) >= objectWidth / 2 - spacing ||
            Math.abs(y) >= objectHeight / 2 - spacing ||
            Math.abs(z) >= objectDepth / 2 - spacing
          ) {
            points.push({ x, y, z });
          }
        }
      }
    }

    const render = () => {
      const width = canvas.width;
      const height = canvas.height;
      
      // Clear with background color matching HomeView's right panel
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      // Gentle rotation
      rotationY += 0.003; 
      rotationX = Math.sin(Date.now() * 0.0005) * 0.15;

      const projectedPoints = points.map(p => {
        // Rotation Y
        const x1 = p.x * Math.cos(rotationY) - p.z * Math.sin(rotationY);
        const z1 = p.z * Math.cos(rotationY) + p.x * Math.sin(rotationY);
        
        // Rotation X
        const y2 = p.y * Math.cos(rotationX) - z1 * Math.sin(rotationX);
        const z2 = z1 * Math.cos(rotationX) + p.y * Math.sin(rotationX);

        // Perspective projection
        const focalLength = 1000;
        const scale = focalLength / (focalLength + z2);
        const x2D = x1 * scale + cx;
        const y2D = y2 * scale + cy;

        return { x: x2D, y: y2D, scale, z: z2 };
      });

      // Sort points by depth (painters algorithm) for transparency consistency
      projectedPoints.sort((a, b) => b.z - a.z);

      projectedPoints.forEach(p => {
        const size = Math.max(0.2, 2.5 * p.scale); 
        
        if (p.x > 0 && p.x < width && p.y > 0 && p.y < height) {
           const opacity = Math.min(1, Math.max(0.1, p.scale * 0.8));
           
           // Subtle gradient for dots based on height
           const heightRatio = (p.y - cy + objectHeight / 2) / objectHeight;
           ctx.globalAlpha = opacity;
           
           // Mixed color palette: Cyan to Fuchsia
           if (heightRatio > 0.7) {
             ctx.fillStyle = '#d946ef'; // Fuchsia bottom
           } else {
             ctx.fillStyle = '#00f3ff'; // Cyan top/middle
           }
           
           ctx.beginPath();
           ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
           ctx.fill();
        }
      });
      
      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Handle window resize with debouncing
    const handleResize = () => {
      if (canvas) {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="w-full h-full pointer-events-none"
    />
  );
};

export default HalftoneMonolith;