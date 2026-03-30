import { useScrollReveal } from '../hooks/useScrollReveal';

const Advantages = () => {
  const headerRef = useScrollReveal('.reveal');
  const gridRef = useScrollReveal('.reveal-child', { stagger: 0.15 });

  return (
    <section id="advantages" className="py-[100px] bg-primary">
      <div className="container mx-auto px-6 max-w-[1200px]">
        
        <div className="text-center mb-[60px]" ref={headerRef}>
          <span className="reveal inline-block text-[11px] tracking-[0.2em] uppercase text-accent mb-4">
            Why Choose Us
          </span>
          <h2 className="reveal font-heading text-[clamp(28px,3.5vw,44px)] leading-[1.25] text-white">
            Three Reasons Travellers <em className="italic text-[#8a6c3e]">Choose Delight</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-accent/15" ref={gridRef}>
          
          <div className="reveal-child bg-primary p-10 lg:p-12 hover:bg-white/5 transition-colors relative">
            <div className="font-display text-[72px] font-light text-accent/15 leading-[1] -mb-5 relative">
              01
            </div>
            <h3 className="font-heading text-[20px] font-normal text-white leading-[1.4] mb-4 relative z-10">
              Walk Out of NJP —<br/>We're Already There
            </h3>
            <p className="text-[14px] leading-[1.8] text-white/60 mb-6">
              Our office is on NJP Railway Station Road. Your car is at the
              station gate within 2 minutes of your call. No apps, no waiting
              room — just instant service.
            </p>
            <div className="text-[10px] tracking-[0.15em] uppercase text-accent border-t border-accent/30 pt-4">
              NJP Proximity Advantage
            </div>
          </div>

          <div className="reveal-child bg-primary p-10 lg:p-12 hover:bg-white/5 transition-colors relative">
            <div className="font-display text-[72px] font-light text-accent/15 leading-[1] -mb-5 relative">
              02
            </div>
            <h3 className="font-heading text-[20px] font-normal text-white leading-[1.4] mb-4 relative z-10">
              Bespoke Itineraries —<br/>Built Around You
            </h3>
            <p className="text-[14px] leading-[1.8] text-white/60 mb-6">
              We don't sell fixed dates. You tell us your group, budget, dietary
              needs, and travel style — we build a complete custom itinerary.
              Senior citizen requirements? Handled.
            </p>
            <div className="text-[10px] tracking-[0.15em] uppercase text-accent border-t border-accent/30 pt-4">
              Full Customisation
            </div>
          </div>

          <div className="reveal-child bg-primary p-10 lg:p-12 hover:bg-white/5 transition-colors relative">
            <div className="font-display text-[72px] font-light text-accent/15 leading-[1] -mb-5 relative">
              03
            </div>
            <h3 className="font-heading text-[20px] font-normal text-white leading-[1.4] mb-4 relative z-10">
              Verified Drivers —<br/>Trained for the Hills
            </h3>
            <p className="text-[14px] leading-[1.8] text-white/60 mb-6">
              Every driver is background-verified, experienced on mountain roads,
              and briefed on your group's needs before departure.
              4.9★ rated by 400+ travellers.
            </p>
            <div className="text-[10px] tracking-[0.15em] uppercase text-accent border-t border-accent/30 pt-4">
              Safety First
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Advantages;
