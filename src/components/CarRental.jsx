import { useScrollReveal } from '../hooks/useScrollReveal';
import { fleet } from '../data/fleet';

const CarRental = () => {
  const headerRef = useScrollReveal('.reveal');
  const gridRef = useScrollReveal('.reveal-child', { stagger: 0.15 });

  return (
    <section id="car-rental" className="py-[100px] bg-bg-warm">
      <div className="container mx-auto px-6 max-w-[1200px]">
        
        <div className="text-center max-w-[600px] mx-auto mb-[60px]" ref={headerRef}>
          <span className="reveal inline-block text-[11px] tracking-[0.2em] uppercase text-accent mb-4">
            Get Around
          </span>
          <h2 className="reveal font-heading text-[clamp(28px,3.5vw,44px)] leading-[1.25] text-[#1a1a1a]">
            Car Rentals <em className="italic text-[#8a6c3e]">From NJP Station</em>
          </h2>
          <p className="reveal text-[15px] text-text-muted leading-[1.7] mt-4">
            All vehicles are sanitised, GPS-tracked, and driven by verified,
            experienced hill drivers. Pick up right outside NJP — no extra waiting.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" ref={gridRef}>
          {fleet.map((car) => (
            <div 
              key={car.id} 
              className={`reveal-child bg-white border ${car.featured ? 'border-accent border-2' : 'border-border'} overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] group flex flex-col`}
            >
              <div className="relative h-[180px] overflow-hidden">
                <img 
                  src={car.image} 
                  alt={car.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className={`absolute top-3 right-3 text-[10px] tracking-[0.1em] uppercase px-2.5 py-1 ${car.featured ? 'bg-accent text-primary font-bold' : 'bg-primary text-white'}`}>
                  {car.featured ? 'Most Booked' : car.type}
                </span>
              </div>
              
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-heading text-[18px] font-normal text-[#1a1a1a] mb-2.5">
                  {car.name}
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-3.5">
                  <span className="text-[11px] bg-bg-warm px-2.5 py-1 text-text-muted">👥 {car.capacity}</span>
                  {car.features.map(f => (
                    <span key={f} className="text-[11px] bg-bg-warm px-2.5 py-1 text-text-muted">{f === 'AC' ? '❄️ AC' : f === '2 Bags' || f === '4 Bags' || f === '5 Bags' ? `🧳 ${f}` : f}</span>
                  ))}
                </div>
                
                <div className="flex items-baseline gap-1.5 mb-2">
                  <span className="text-[11px] text-text-muted">From</span>
                  <span className="text-[22px] font-display font-semibold text-accent">{car.price}</span>
                  <span className="text-[12px] text-text-muted">/ day</span>
                </div>
                
                <p className="text-[11px] text-text-muted italic mb-4 flex-1">
                  Best for: {car.bestFor}
                </p>
                
                <div className="flex gap-2 mt-auto">
                  <a href={`#booking`} onClick={() => { setTimeout(() => { const sel = document.getElementById('destination'); if(sel) sel.value = 'car-rental'; }, 100); }} className="flex-1 text-center bg-primary hover:bg-accent text-white hover:text-primary text-[12px] font-medium tracking-[0.08em] uppercase py-2.5 transition-colors">
                    Book Now
                  </a>
                  <a 
                    href={`https://api.whatsapp.com/send?phone=919800759408&text=I+want+to+book+${encodeURIComponent(car.name)}`} 
                    target="_blank" 
                    rel="noreferrer"
                    className="px-3.5 py-2.5 border border-[#25d366] text-[#25d366] hover:bg-[#25d36620] text-[12px] uppercase tracking-[0.08em] transition-colors whitespace-nowrap"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Rent With Us Strip */}
        <div className="mt-[60px] bg-primary py-9 px-6 md:px-12 flex flex-col md:flex-row justify-between gap-6" ref={headerRef}>
          <div className="reveal flex items-center gap-4 text-white">
            <span className="text-[28px]">📍</span>
            <div>
              <strong className="block text-[14px] text-accent-light mb-1">NJP Station Pickup</strong>
              <span className="text-[12px] text-white/60">Walk out, car is waiting</span>
            </div>
          </div>
          <div className="reveal flex items-center gap-4 text-white">
            <span className="text-[28px] font-bold text-accent">✓</span>
            <div>
              <strong className="block text-[14px] text-accent-light mb-1">Verified Hill Drivers</strong>
              <span className="text-[12px] text-white/60">Trained for mountain roads</span>
            </div>
          </div>
          <div className="reveal flex items-center gap-4 text-white">
            <span className="text-[28px]">📞</span>
            <div>
              <strong className="block text-[14px] text-accent-light mb-1">5-Min Response</strong>
              <span className="text-[12px] text-white/60">Fastest in Siliguri</span>
            </div>
          </div>
          <div className="reveal flex items-center gap-4 text-white">
            <span className="text-[28px]">🔒</span>
            <div>
              <strong className="block text-[14px] text-accent-light mb-1">No Hidden Costs</strong>
              <span className="text-[12px] text-white/60">Full price quoted upfront</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CarRental;
