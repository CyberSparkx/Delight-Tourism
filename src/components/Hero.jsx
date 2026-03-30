import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const IMAGES = [
  'photo-1464822759023-fed622ff2c3b',
  'photo-1544735716-392fe2489ffa',
  'photo-1506905925346-21bda4d32df4',
  'photo-1454496522488-7a8e488e8606'
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setMounted(true), 500);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % IMAGES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax on hero-bg
      gsap.to('.hero-bg', {
        yPercent: 25,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Load animation sequence
      gsap.timeline({ delay: 0.2 })
        .fromTo('.hero-tag',      { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' })
        .fromTo('.hero-title',    { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' }, '-=0.3')
        .fromTo('.hero-subtitle', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out' }, '-=0.4')
        .fromTo('.hero-btns',     { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }, '-=0.3')
        .fromTo('.hero-stats',    { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out' }, '-=0.2');
        
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="hero relative h-screen min-h-[680px] flex flex-col justify-end overflow-hidden" ref={heroRef}>
      
      {/* Background Slideshow */}
      <div className="hero-bg absolute inset-0 z-0 bg-[#0a0a14]">
        {IMAGES.map((imgId, index) => (
          (index === 0 || mounted) ? (
            <img
              key={index}
              src={`https://images.unsplash.com/${imgId}?w=1920&q=80&auto=format`}
              srcSet={`https://images.unsplash.com/${imgId}?w=640&q=80&auto=format 640w, 
                       https://images.unsplash.com/${imgId}?w=1024&q=80&auto=format 1024w, 
                       https://images.unsplash.com/${imgId}?w=1920&q=80&auto=format 1920w`}
              sizes="100vw"
              alt={`Himalayan Mountains ${index + 1}`}
              loading={index === 0 ? "eager" : "lazy"}
              fetchpriority={index === 0 ? "high" : "auto"}
              className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-[1400ms] ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            />
          ) : null
        ))}
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a14] via-[#0a0a14cc] to-[#0a0a1440] opacity-90" />
      </div>

      {/* Main Content */}
      <div className="hero-content relative z-10 w-full max-w-[1200px] mx-auto px-6 lg:px-16 pb-[120px] md:pb-[140px]">
        <div className="max-w-[720px]">
          <span className="hero-tag inline-block text-[12px] tracking-[0.18em] uppercase text-accent border border-accent/40 px-4 py-1.5 mb-5">
            Est. 2017 · Siliguri, West Bengal
          </span>
          
          <h1 className="hero-title font-display text-[clamp(42px,6vw,78px)] font-light leading-[1.15] text-white mb-5">
            Your Himalayan Journey<br />
            <em className="italic text-accent-light not-italic">Starts at NJP</em>
          </h1>
          
          <p className="hero-subtitle text-[16px] leading-[1.7] text-white/70 mb-9 max-w-[500px]">
            From the station to the mountains in minutes.<br />
            Custom tours across Sikkim, Darjeeling & North East India.
          </p>
          
          <div className="hero-btns flex flex-wrap gap-4">
            <a href="#packages" className="inline-block bg-accent hover:bg-accent-light text-[#0a0a14] text-[13px] font-medium tracking-[0.1em] uppercase px-9 py-4 transition-all duration-300 hover:-translate-y-0.5">
              Explore Packages
            </a>
            <a href="https://api.whatsapp.com/send?phone=919800759408&text=Hi%2C+I+want+to+book+a+tour" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-white/35 hover:border-[#25d366] hover:bg-[#25d3661a] text-white text-[13px] tracking-[0.1em] uppercase px-9 py-4 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#25d366]">
                  <path fillRule="evenodd" d="M12 0a12 12 0 100 24 12 12 0 000-24zm5.54 16.7c-.2.57-1.12 1.09-1.6 1.15-.45.06-1.02.16-3.23-.74-2.65-1.09-4.34-3.79-4.47-3.97-.13-.18-1.07-1.42-1.07-2.7 0-1.29.68-1.93.92-2.19.24-.26.51-.33.68-.33.17 0 .34 0 .49.01.16.01.37-.06.57.43.21.5.73 1.77.8 1.91.06.14.1.3-.01.5-.1.19-.16.31-.32.5-.16.19-.34.42-.48.55-.16.16-.34.34-.15.66.19.32.84 1.38 1.8 2.22 1.23 1.09 2.27 1.43 2.6 1.58.32.16.51.13.7-.09.2-.21.84-.96 1.07-1.29.22-.32.44-.27.73-.16.29.11 1.83.86 2.14 1.02.32.16.52.24.6.38.07.14.07.82-.13 1.39z" clipRule="evenodd" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="hero-stats absolute bottom-0 left-0 right-0 z-20 bg-[#0a0a14bf] backdrop-blur-[12px] border-t border-accent/20">
        <div className="max-w-[1200px] mx-auto px-6 py-4 md:py-5 flex flex-wrap md:flex-nowrap items-center justify-between gap-y-4">
          <div className="flex-1 text-center w-[45%] md:w-auto">
            <span className="block font-display text-[28px] font-semibold text-accent leading-tight">400+</span>
            <span className="text-[11px] tracking-[0.12em] uppercase text-white/50">Verified Reviews</span>
          </div>
          <div className="hidden md:block w-px h-10 bg-accent/25" />
          <div className="flex-1 text-center w-[45%] md:w-auto">
            <span className="block font-display text-[28px] font-semibold text-accent leading-tight">4.9★</span>
            <span className="text-[11px] tracking-[0.12em] uppercase text-white/50">Average Rating</span>
          </div>
          <div className="hidden md:block w-px h-10 bg-accent/25" />
          <div className="flex-1 text-center w-[45%] md:w-auto">
            <span className="block font-display text-[28px] font-semibold text-accent leading-tight">9 Yrs</span>
            <span className="text-[11px] tracking-[0.12em] uppercase text-white/50">In Business</span>
          </div>
          <div className="hidden md:block w-px h-10 bg-accent/25" />
          <div className="flex-1 text-center w-[45%] md:w-auto">
            <span className="block font-display text-[28px] font-semibold text-accent leading-tight">50+</span>
            <span className="text-[11px] tracking-[0.12em] uppercase text-white/50">Destinations</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
