import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-400 ease-in-out ${
        scrolled
          ? 'bg-primary/95 backdrop-blur-[16px] py-4'
          : 'bg-transparent py-[28px]'
      }`}
    >
      <div className="container mx-auto px-6 max-w-[1200px] flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-display text-2xl lg:text-3xl tracking-wide font-light">
          Delight <span className="italic text-accent">Tourism</span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-8 text-[13px] uppercase tracking-widest text-[#ffffffb3]">
          <li><a href="#home" className="hover:text-accent-light transition-colors">Home</a></li>
          <li><a href="#packages" className="hover:text-accent-light transition-colors">Packages</a></li>
          <li><a href="#car-rental" className="hover:text-accent-light transition-colors">Car Rental</a></li>
          <li><a href="#about" className="hover:text-accent-light transition-colors">About</a></li>
          <li><a href="#contact" className="hover:text-accent-light transition-colors">Contact</a></li>
        </ul>

        {/* Call CTA & Mobile Toggle */}
        <div className="flex items-center gap-6">
          <a href="tel:+919800759408" className="hidden md:flex text-accent font-semibold text-sm hover:text-accent-light transition-colors">
            📞 98007 59408
          </a>
          
          <button 
            className="md:hidden text-white text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-primary flex flex-col items-center py-6 space-y-6 text-sm uppercase tracking-widest transition-all ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <a href="#home" onClick={() => setMenuOpen(false)} className="text-white hover:text-accent">Home</a>
        <a href="#packages" onClick={() => setMenuOpen(false)} className="text-white hover:text-accent">Packages</a>
        <a href="#car-rental" onClick={() => setMenuOpen(false)} className="text-white hover:text-accent">Car Rental</a>
        <a href="#about" onClick={() => setMenuOpen(false)} className="text-white hover:text-accent">About</a>
        <a href="#contact" onClick={() => setMenuOpen(false)} className="text-white hover:text-accent">Contact</a>
        <a href="tel:+919800759408" className="text-accent font-semibold pt-4">📞 98007 59408</a>
      </div>
    </nav>
  );
};

export default Navbar;
