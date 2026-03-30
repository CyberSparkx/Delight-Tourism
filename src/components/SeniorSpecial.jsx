import { useScrollReveal } from '../hooks/useScrollReveal';

const SeniorSpecial = () => {
  const sectionRef = useScrollReveal('.reveal');

  return (
    <section id="senior-special" className="py-[100px] bg-bg-warm">
      <div className="container mx-auto px-6 max-w-[1200px]" ref={sectionRef}>
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          
          {/* Left: Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=700&q=80&auto=format"
              alt="Senior travellers enjoying Himalayan tour"
              className="reveal w-full h-[360px] md:h-[500px] object-cover block"
              loading="lazy"
            />
            <div className="absolute right-0 bottom-[-20px] md:right-[-20px] md:bottom-[24px] bg-white border border-border border-l-[4px] border-l-accent p-4 md:px-5 md:py-4 flex items-center gap-3 shadow-[0_8px_30px_rgba(0,0,0,0.1)] max-w-[280px]">
              <span className="text-2xl pt-1">❤️</span>
              <div>
                <strong className="block text-[13px] text-[#1a1a1a] mb-[3px]">Senior Citizen Special</strong>
                <span className="text-[11px] text-text-muted">Slow-paced · Medical-aware · Caring Drivers</span>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="mt-8 md:mt-0">
            <span className="reveal inline-block text-[11px] tracking-[0.2em] uppercase text-accent mb-4">
              For Our Elders
            </span>
            <h2 className="reveal font-heading text-[clamp(28px,3.5vw,44px)] leading-[1.25] text-[#1a1a1a]">
              The Mountains Welcome <em className="italic text-[#8a6c3e]">Every Age</em>
            </h2>
            <p className="reveal text-[15px] leading-[1.8] text-text-muted my-5 md:my-8">
              We believe the Himalayas are for everyone. Our Senior Citizen Special
              tours are designed with care — slower pace, longer rest stops,
              medical-stop awareness, and drivers trained in first-aid awareness.
            </p>

            <div className="flex flex-col gap-5 mb-9">
              <div className="reveal flex items-start gap-4">
                <div className="w-11 h-11 bg-white border border-border flex items-center justify-center text-[20px] shrink-0">
                  🕐
                </div>
                <div>
                  <strong className="block text-[14px] text-[#1a1a1a] mb-1">Slower-Paced Itineraries</strong>
                  <p className="text-[13px] text-text-muted m-0">More time at each destination, no rushing between stops.</p>
                </div>
              </div>

              <div className="reveal flex items-start gap-4">
                <div className="w-11 h-11 bg-white border border-border flex items-center justify-center text-[20px] shrink-0">
                  🏥
                </div>
                <div>
                  <strong className="block text-[14px] text-[#1a1a1a] mb-1">Medical Stop Awareness</strong>
                  <p className="text-[13px] text-text-muted m-0">Routes planned around pharmacies and medical facilities.</p>
                </div>
              </div>

              <div className="reveal flex items-start gap-4">
                <div className="w-11 h-11 bg-white border border-border flex items-center justify-center text-[20px] shrink-0">
                  🍽️
                </div>
                <div>
                  <strong className="block text-[14px] text-[#1a1a1a] mb-1">Food Restrictions Considered</strong>
                  <p className="text-[13px] text-text-muted m-0">Dietary needs noted and communicated to every hotel.</p>
                </div>
              </div>

              <div className="reveal flex items-start gap-4">
                <div className="w-11 h-11 bg-white border border-border flex items-center justify-center text-[20px] shrink-0">
                  🤝
                </div>
                <div>
                  <strong className="block text-[14px] text-[#1a1a1a] mb-1">Assistance at Every Step</strong>
                  <p className="text-[13px] text-text-muted m-0">Drivers help with luggage and are patient at altitude.</p>
                </div>
              </div>
            </div>

            <a href="#booking" onClick={() => { setTimeout(() => { const sel = document.getElementById('seniorCitizen'); if(sel) sel.checked = true; }, 100); }} className="reveal inline-block bg-accent hover:bg-accent-light text-[#0a0a14] text-[13px] font-medium tracking-[0.1em] uppercase px-8 py-3.5 transition-colors">
              Plan a Senior Citizen Trip →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SeniorSpecial;
