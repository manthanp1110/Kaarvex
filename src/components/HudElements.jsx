import { useEffect, useRef } from 'react';

/**
 * Animated HUD Underline — sharp tech line that draws under text
 */
export const HudUnderline = ({ width = 300, color = '#00d4ff', delay = 0.5 }) => {
  const pathRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    const len = path.getTotalLength();
    path.style.strokeDasharray = len;
    path.style.strokeDashoffset = len;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          path.style.transition = `stroke-dashoffset 1s cubic-bezier(0.1, 0.9, 0.2, 1) ${delay}s`;
          path.style.strokeDashoffset = '0';
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(path);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <svg
      className="hud-underline"
      style={{ position: 'absolute', bottom: -10, left: 0, width: '100%', height: 16, overflow: 'visible', pointerEvents: 'none' }}
      viewBox={`0 0 ${width} 16`}
      preserveAspectRatio="none"
    >
      <path
        ref={pathRef}
        d={`M0,8 L${width - 20},8 L${width - 10},2 L${width},2`}
        stroke={color}
        strokeWidth="2"
        fill="none"
        strokeLinejoin="miter"
      />
      {/* Decorative dot at the end */}
      <circle cx={width} cy="2" r="3" fill={color} opacity="0.8">
        <animate attributeName="opacity" values="0.2;1;0.2" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
};

/**
 * Animated HUD Connector — circuit trace linking two points
 */
export const HudConnector = ({ style = {}, color = 'rgba(0,212,255,0.4)' }) => {
  const pathRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    const len = path.getTotalLength();
    path.style.strokeDasharray = len;
    path.style.strokeDashoffset = len;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          path.style.transition = `stroke-dashoffset 0.8s cubic-bezier(0.1, 0.9, 0.2, 1) 0.2s`;
          path.style.strokeDashoffset = '0';
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(path);
    return () => observer.disconnect();
  }, []);

  return (
    <svg width="80" height="40" viewBox="0 0 80 40" style={{ overflow: 'visible', ...style }}>
      <path
        ref={pathRef}
        d="M0,20 L30,20 L40,10 L70,10"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
        strokeLinejoin="miter"
      />
      <circle cx="70" cy="10" r="2" fill={color} />
      <circle cx="0" cy="20" r="2" fill={color} />
    </svg>
  );
};

/**
 * Animated HUD Bracket — enclosing a section like a targeting reticle
 */
export const HudBracket = ({ color = '#00d4ff' }) => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    [leftRef, rightRef].forEach((ref, idx) => {
      const path = ref.current;
      if (!path) return;
      const len = path.getTotalLength();
      path.style.strokeDasharray = len;
      path.style.strokeDashoffset = len;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            path.style.transition = `stroke-dashoffset 0.8s cubic-bezier(0.1, 0.9, 0.2, 1) ${idx * 0.15}s`;
            path.style.strokeDashoffset = '0';
            observer.disconnect();
          }
        },
        { threshold: 0.3 }
      );
      observer.observe(path);
      return () => observer.disconnect();
    });
  }, []);

  return (
    <>
      {/* Left bracket */}
      <svg style={{ position: 'absolute', left: -24, top: '50%', transform: 'translateY(-50%)', height: 60, width: 20, overflow: 'visible' }} viewBox="0 0 20 60">
        <path ref={leftRef} d="M16,2 L4,2 L4,58 L16,58" stroke={color} strokeWidth="2" fill="none" strokeLinejoin="miter" opacity="0.6" />
      </svg>
      {/* Right bracket */}
      <svg style={{ position: 'absolute', right: -24, top: '50%', transform: 'translateY(-50%)', height: 60, width: 20, overflow: 'visible' }} viewBox="0 0 20 60">
        <path ref={rightRef} d="M4,2 L16,2 L16,58 L4,58" stroke={color} strokeWidth="2" fill="none" strokeLinejoin="miter" opacity="0.6" />
      </svg>
    </>
  );
};
