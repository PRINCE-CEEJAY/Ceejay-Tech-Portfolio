import React, { useEffect, useRef, useState } from "react";

const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  const lastSizeRef = useRef({ w: 0, h: 0 });
  const resizeTimerRef = useRef(null);
  const starIdRef = useRef(0);
  const meteorIdRef = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const generate = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      // skip if size didn't change (minor changes OK)
      if (lastSizeRef.current.w === w && lastSizeRef.current.h === h) return;
      lastSizeRef.current = { w, h };

      generateStars(w, h);
      generateMeteors(w, h);
    };

    // initial
    generate();

    const onResize = () => {
      // debounce resize
      if (resizeTimerRef.current) clearTimeout(resizeTimerRef.current);
      resizeTimerRef.current = setTimeout(() => {
        generate();
        resizeTimerRef.current = null;
      }, 150);
    };

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      if (resizeTimerRef.current) clearTimeout(resizeTimerRef.current);
    };
  }, []);

  const generateStars = (width = window?.innerWidth || 0, height = window?.innerHeight || 0) => {
    // base density, capped to avoid extremely large DOM
    const area = Math.max(1, width * height);
    const estimated = Math.floor(area / 10000);
    const numberOfStars = Math.max(20, Math.min(estimated, 600)); // min 20, max 600

    const newStars = new Array(numberOfStars).fill(0).map(() => ({
      id: `star_${starIdRef.current++}`,
      size: Math.random() * 3 + 1,
      x: Math.random() * width,
      y: Math.random() * height,
      opacity: Math.random() * 0.5 + 0.5,
      animationDuration: Math.random() * 4 + 2,
    }));

    setStars(newStars);
  };

  const generateMeteors = (width = window?.innerWidth || 0, height = window?.innerHeight || 0) => {
    // scale meteors with width, capped
    const estimated = Math.floor(width / 200); // rough scaling
    const numberOfMeteors = Math.max(3, Math.min(estimated, 20));

    const newMeteors = new Array(numberOfMeteors).fill(0).map(() => ({
      id: `meteor_${meteorIdRef.current++}`,
      size: Math.random() * 2 + 1,
      x: Math.random() * width,
      y: (Math.random() * height) / 5,
      delay: Math.random() * 15,
      animationDuration: Math.random() * 3 + 2,
    }));

    setMeteors(newMeteors);
  };

  if (typeof window === "undefined") return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "px",
            top: star.y + "px",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
            willChange: "opacity, transform",
          }}
        />
      ))}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 15 + "px",
            height: meteor.size + "px",
            left: meteor.x + "px",
            top: meteor.y + "px",
            animationDelay: meteor.delay + "s", // fixed: include unit
            animationDuration: meteor.animationDuration + "s",
            willChange: "transform, opacity",
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;
