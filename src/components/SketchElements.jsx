import { useEffect, useRef } from 'react';

/**
 * Animated sketch underline — draws itself using SVG stroke-dashoffset
 */
export const SketchUnderline = ({ width = 300, color = '#0a0a0a', delay = 0.5 }) => {
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
          path.style.transition = `stroke-dashoffset 1.3s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`;
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
      className="sketch-underline"
      style={{ position: 'absolute', bottom: -14, left: -6, width: width + 12, height: 18, overflow: 'visible', pointerEvents: 'none' }}
      viewBox={`0 0 ${width + 12} 18`}
    >
      <path
        ref={pathRef}
        d={`M4,10 C${width * 0.1},6 ${width * 0.3},14 ${width * 0.5},10 C${width * 0.65},6 ${width * 0.8},13 ${width + 6},9`}
        stroke={color}
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
};

/**
 * Animated wobbly circle / oval around text
 */
export const SketchCircle = ({ children, color = '#0a0a0a', delay = 0.3 }) => {
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
          path.style.transition = `stroke-dashoffset 1.5s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`;
          path.style.strokeDashoffset = '0';
          observer.disconnect();
        }
      },
      { threshold: 0.6 }
    );
    observer.observe(path);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      {children}
      <svg
        style={{ position: 'absolute', top: '-14px', left: '-14px', width: 'calc(100% + 28px)', height: 'calc(100% + 28px)', overflow: 'visible', pointerEvents: 'none' }}
        viewBox="0 0 100 40"
        preserveAspectRatio="none"
      >
        <path
          ref={pathRef}
          d="M8,20 C6,8 18,2 50,2 C82,2 95,8 94,20 C93,32 82,38 50,38 C18,38 7,32 8,20 C9,10 14,3 50,3"
          stroke={color}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>
    </span>
  );
};

/**
 * Decorative scattered sketch marks — arrows, stars, dots
 */
export const SketchDoodles = ({ count = 8 }) => {
  const svgRef = useRef(null);

  const doodles = [
    // Small arrow right
    (x, y, s) => `M${x},${y} L${x+s*2},${y} M${x+s},${y-s} L${x+s*2},${y} L${x+s},${y+s}`,
    // Small cross / asterisk
    (x, y, s) => `M${x-s},${y} L${x+s},${y} M${x},${y-s} L${x},${y+s} M${x-s*.7},${y-s*.7} L${x+s*.7},${y+s*.7}`,
    // Small wavy line
    (x, y, s) => `M${x-s*1.5},${y} C${x-s},${y-s} ${x},${y+s} ${x+s},${y} C${x+s*1.2},${y-s*.7} ${x+s*1.5},${y}`,
    // Tiny star dots
    (x, y, s) => `M${x},${y-s} L${x},${y+s} M${x-s},${y} L${x+s},${y}`,
    // Small spiral start
    (x, y, s) => `M${x},${y} C${x},${y-s} ${x+s*1.2},${y-s} ${x+s*1.2},${y} C${x+s*1.2},${y+s*.5} ${x+s*.5},${y+s*.5} ${x+s*.5},${y}`,
  ];

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const paths = svg.querySelectorAll('path');
    paths.forEach((path) => {
      const len = path.getTotalLength ? path.getTotalLength() : 30;
      path.style.strokeDasharray = len;
      path.style.strokeDashoffset = len;
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          paths.forEach((path, i) => {
            path.style.transition = `stroke-dashoffset 0.8s ease ${i * 0.15}s`;
            path.style.strokeDashoffset = '0';
          });
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(svg);
    return () => observer.disconnect();
  }, []);

  // Generate random positions
  const positions = Array.from({ length: count }, (_, i) => ({
    x: 10 + (i * 97) % 80,
    y: 10 + (i * 67) % 80,
    type: i % doodles.length,
    size: 4 + (i % 4),
    opacity: 0.15 + (i % 3) * 0.07,
  }));

  return (
    <svg
      ref={svgRef}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', overflow: 'visible' }}
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 100 100"
    >
      {positions.map((p, i) => (
        <path
          key={i}
          d={doodles[p.type](p.x, p.y, p.size)}
          stroke="#0a0a0a"
          strokeWidth="0.6"
          fill="none"
          strokeLinecap="round"
          opacity={p.opacity}
        />
      ))}
    </svg>
  );
};

/**
 * Drawing bracket decorations around a section
 */
export const SketchBrackets = () => {
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
            path.style.transition = `stroke-dashoffset 1s cubic-bezier(0.4,0,0.2,1) ${idx * 0.2}s`;
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
      <svg style={{ position: 'absolute', left: -28, top: '50%', transform: 'translateY(-50%)', height: 60, width: 20, overflow: 'visible' }} viewBox="0 0 20 60">
        <path ref={leftRef} d="M16,4 L4,4 L4,56 L16,56" stroke="#0a0a0a" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.3" />
      </svg>
      {/* Right bracket */}
      <svg style={{ position: 'absolute', right: -28, top: '50%', transform: 'translateY(-50%)', height: 60, width: 20, overflow: 'visible' }} viewBox="0 0 20 60">
        <path ref={rightRef} d="M4,4 L16,4 L16,56 L4,56" stroke="#0a0a0a" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.3" />
      </svg>
    </>
  );
};

/**
 * Animated sketch arrow pointing somewhere
 */
export const SketchArrow = ({ style = {} }) => {
  const pathRef = useRef(null);
  const headRef = useRef(null);

  useEffect(() => {
    [pathRef, headRef].forEach((ref, i) => {
      const path = ref.current;
      if (!path) return;
      const len = path.getTotalLength();
      path.style.strokeDasharray = len;
      path.style.strokeDashoffset = len;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            path.style.transition = `stroke-dashoffset 0.7s ease ${i * 0.3}s`;
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
    <svg
      width="60" height="30"
      viewBox="0 0 60 30"
      style={{ overflow: 'visible', ...style }}
    >
      <path ref={pathRef} d="M4,15 C15,13 35,17 52,15" stroke="#0a0a0a" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.35" />
      <path ref={headRef} d="M46,8 L54,15 L46,22" stroke="#0a0a0a" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.35" />
    </svg>
  );
};

export default SketchDoodles;
