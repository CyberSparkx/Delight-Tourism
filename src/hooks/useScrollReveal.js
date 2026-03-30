import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const useScrollReveal = (selector, options = {}) => {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(selector, 
        { y: options.y ?? 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: options.duration ?? 0.8,
          ease: options.ease ?? 'power2.out',
          stagger: options.stagger ?? 0,
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, [selector, options.y, options.duration, options.ease, options.stagger]);
  return ref;
};
