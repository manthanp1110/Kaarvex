import { useEffect, useRef } from 'react';

const ParticleCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let mouse = { x: -9999, y: -9999 };

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    canvas.parentElement?.addEventListener('mousemove', onMouseMove);

    const NUM = 100;
    const particles = Array.from({ length: NUM }, () => ({
      x: Math.random() * (canvas.width || 800),
      y: Math.random() * (canvas.height || 600),
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.4 + 0.1,
      // Randomly assign cyan or violet tint
      type: Math.random() > 0.5 ? 'cyan' : 'violet'
    }));

    const CONNECT = 120;
    const REPEL = 100;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < REPEL) {
          const f = (REPEL - dist) / REPEL;
          p.vx += (dx / dist) * f * 0.6;
          p.vy += (dy / dist) * f * 0.6;
        }
        p.vx *= 0.98; p.vy *= 0.98;
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Glowing particles
        const color = p.type === 'cyan' ? `rgba(0, 212, 255, ${p.alpha})` : `rgba(124, 58, 237, ${p.alpha})`;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = color;
        ctx.fill();
        ctx.shadowBlur = 0; // reset for lines

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const d2 = Math.sqrt((p.x - q.x) ** 2 + (p.y - q.y) ** 2);
          if (d2 < CONNECT) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            // Mix colors for the line based on distance opacity
            const opacity = (1 - d2 / CONNECT) * 0.15;
            ctx.strokeStyle = p.type === 'cyan' ? `rgba(0, 212, 255, ${opacity})` : `rgba(124, 58, 237, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} id="particle-canvas" />;
};

export default ParticleCanvas;
