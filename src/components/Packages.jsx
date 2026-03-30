import { useScrollReveal } from '../hooks/useScrollReveal';
import { packages } from '../data/packages';

const Packages = () => {
  const headerRef = useScrollReveal('.reveal');
  const gridRef = useScrollReveal('.reveal-child', { stagger: 0.12 });

  return (
    <section id="packages" className="py-[100px] bg-white">
      <div className="container mx-auto px-6 max-w-[1200px]">
        
        <div className="text-center max-w-[600px] mx-auto mb-[60px]" ref={headerRef}>
          <span className="reveal inline-block text-[11px] tracking-[0.2em] uppercase text-accent mb-4">
            What We Offer
          </span>
          <h2 className="reveal font-heading text-[clamp(28px,3.5vw,44px)] leading-[1.25] text-[#1a1a1a]">
            Curated Himalayan <em className="italic text-[#8a6c3e]">Tour Packages</em>
          </h2>
          <p className="reveal text-[15px] text-text-muted leading-[1.7] mt-4">
            From a single day in the hills to a week-long journey across states —
            every package is customisable around your dates, group size, and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7" ref={gridRef}>
          {packages.map((pkg, index) => {
            if (pkg.id === 'custom') {
              return (
                <div key={pkg.id} className="reveal-child bg-bg-warm border-2 border-dashed border-border flex items-center lg:col-span-2">
                  <div className="p-8 md:p-10">
                    <span className="inline-block text-[11px] tracking-[0.2em] uppercase text-accent mb-3">
                      Can't find what you need?
                    </span>
                    <h3 className="font-display text-[28px] md:text-[32px] font-light leading-[1.3] text-[#1a1a1a] mb-4">
                      Build Your Own<br/><em className="italic text-[#8a6c3e]">Custom Itinerary</em>
                    </h3>
                    <p className="text-[14px] leading-[1.7] text-text-muted mb-6 max-w-[500px]">
                      Tell us your travel dates, group size, and favourite destinations.
                      We'll design a complete itinerary around you — including food
                      preferences, medical stops for senior travellers, and your budget.
                    </p>
                    <a href="#booking" className="inline-block bg-accent hover:bg-accent-light text-[#0a0a14] text-[13px] font-medium tracking-[0.1em] uppercase px-8 py-3.5 transition-colors">
                      Plan My Custom Trip
                    </a>
                  </div>
                </div>
              );
            }

            return (
              <div 
                key={pkg.id} 
                className={`reveal-child bg-white border ${pkg.featured ? 'border-accent border-2' : 'border-border'} overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] group flex flex-col`}
              >
                <div className="relative h-[220px] overflow-hidden">
                  <img 
                    src={pkg.image} 
                    alt={pkg.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className={`absolute top-4 left-4 text-[11px] tracking-[0.1em] uppercase px-3 py-1.5 ${pkg.featured ? 'bg-accent text-primary font-bold' : 'bg-primary text-white'}`}>
                    {pkg.badge}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-center mb-2.5">
                    <span className="text-[11px] tracking-[0.15em] uppercase text-accent">{pkg.destination}</span>
                    <span className="text-[14px] font-semibold text-[#1a1a1a]">{pkg.price}</span>
                  </div>
                  
                  <h3 className="font-heading text-[20px] font-normal text-[#1a1a1a] mb-2.5">
                    {pkg.name}
                  </h3>
                  
                  <p className="text-[13px] leading-[1.7] text-text-muted mb-4 flex-1">
                    {pkg.description}
                  </p>
                  
                  <ul className="list-none mb-6 space-y-1.5">
                    {pkg.highlights.map((item, i) => (
                      <li key={i} className="text-[12px] text-text-muted pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-accent">
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex gap-2.5 mt-auto">
                    <a href={`#booking`} onClick={() => { setTimeout(() => { const sel = document.getElementById('destination'); if(sel) sel.value = pkg.id; }, 100); }} className="flex-1 text-center bg-primary hover:bg-accent text-white hover:text-primary text-[12px] font-medium tracking-[0.08em] uppercase py-3 transition-colors">
                      Book This Trip
                    </a>
                    <a 
                      href={`https://api.whatsapp.com/send?phone=919800759408&text=${encodeURIComponent(pkg.whatsappText)}`} 
                      target="_blank" 
                      rel="noreferrer"
                      className="px-4 py-3 border border-[#25d366] text-[#25d366] hover:bg-[#25d36620] text-[12px] uppercase tracking-[0.08em] transition-colors whitespace-nowrap"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Packages;
