"use client";

import { useEffect, useRef, useState } from "react";

export default function NumberCounter({ target, suffix = "", prefix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let currentCount = 0;
          const increment = target / 60;
          const timer = setInterval(() => {
            currentCount += increment;
            if (currentCount >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(currentCount));
            }
          }, 30);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [target]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
