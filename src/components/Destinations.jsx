import { useScrollReveal } from '../hooks/useScrollReveal';

const Destinations = () => {
  const headerRef = useScrollReveal('.reveal');
  const gridRef = useScrollReveal('.reveal-child', { stagger: 0.15 });

  return (
    <section id="destinations" className="py-[100px] bg-white">
      <div className="container mx-auto px-6 max-w-[1200px]">
        
        <div className="text-center max-w-[600px] mx-auto mb-[60px]" ref={headerRef}>
          <span className="reveal inline-block text-[11px] tracking-[0.2em] uppercase text-accent mb-4">
            Explore
          </span>
          <h2 className="reveal font-heading text-[clamp(28px,3.5vw,44px)] leading-[1.25] text-[#1a1a1a]">
            Where Would You Like <em className="italic text-[#8a6c3e]">to Go?</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr_1fr] md:auto-rows-[420px] gap-4" ref={gridRef}>
          
          <a href="#packages" className="reveal-child group relative overflow-hidden block h-[260px] md:h-full">
            <img 
              src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80&auto=format" 
              alt="Darjeeling" 
              className="w-full h-full object-cover transition-transform duration-600 ease-in-out group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-end p-7 transition-colors duration-300 bg-gradient-to-t from-[#0a0a14d9] via-[#0a0a1480] to-transparent group-hover:from-[#0a0a14eb] group-hover:via-[#0a0a1433]">
              <div>
                <h3 className="font-display text-[26px] font-light text-white mb-1.5">Darjeeling</h3>
                <span className="text-[12px] tracking-[0.08em] text-accent-light">Tea Gardens · Toy Train · Tiger Hill</span>
              </div>
            </div>
          </a>

          <a href="#packages" className="reveal-child group relative overflow-hidden block h-[260px] md:h-full">
            <img 
              src="https://images.unsplash.com/photo-1631643171709-626f69ca8be0?w=600&q=80&auto=format" 
              alt="North Sikkim" 
              className="w-full h-full object-cover transition-transform duration-600 ease-in-out group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-end p-7 transition-colors duration-300 bg-gradient-to-t from-[#0a0a14d9] via-[#0a0a1480] to-transparent group-hover:from-[#0a0a14eb] group-hover:via-[#0a0a1433]">
              <div>
                <h3 className="font-display text-[26px] font-light text-white mb-1.5">North Sikkim</h3>
                <span className="text-[12px] tracking-[0.08em] text-accent-light">Yumthang · Zero Point · Gurudongmar</span>
              </div>
            </div>
          </a>

          <a href="#packages" className="reveal-child group relative overflow-hidden block h-[260px] md:h-full">
            <img 
              src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=600&q=80&auto=format" 
              alt="North East India" 
              className="w-full h-full object-cover transition-transform duration-600 ease-in-out group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-end p-7 transition-colors duration-300 bg-gradient-to-t from-[#0a0a14d9] via-[#0a0a1480] to-transparent group-hover:from-[#0a0a14eb] group-hover:via-[#0a0a1433]">
              <div>
                <h3 className="font-display text-[26px] font-light text-white mb-1.5">North East India</h3>
                <span className="text-[12px] tracking-[0.08em] text-accent-light">Shillong · Cherrapunji · Kaziranga</span>
              </div>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
};

export default Destinations;
