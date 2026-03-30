import { useScrollReveal } from '../hooks/useScrollReveal';

const About = () => {
  const sectionRef = useScrollReveal('.reveal', { y: 50, duration: 0.8 });
  const badgesRef = useScrollReveal('.reveal-child', { y: 40, stagger: 0.15 });

  return (
    <section id="about" className="py-[100px] bg-bg-warm">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          
          {/* Text Content */}
          <div className="about-text" ref={sectionRef}>
            <span className="reveal inline-block text-[11px] tracking-[0.2em] uppercase text-accent mb-4">
              Who We Are
            </span>
            <h2 className="reveal font-heading text-[clamp(28px,3.5vw,44px)] leading-[1.25] text-[#1a1a1a] mb-6">
              Siliguri's Most Trusted<br />
              <em className="italic text-[#8a6c3e]">Himalayan Travel Partner</em>
            </h2>
            <p className="reveal text-[15px] leading-[1.8] text-text-muted mb-4">
              Founded in 2017 by Kushum Parijat, Delight Tourism was built
              on a simple idea — travellers arriving at NJP Station should
              have a reliable, friendly partner waiting for them. Nine years
              later, we've turned that vision into 400+ five-star memories
              across Sikkim, Darjeeling, and beyond.
            </p>
            <p className="reveal text-[15px] leading-[1.8] text-text-muted mb-8">
              Our office is steps from NJP Railway Station. Whether you
              arrive at midnight or dawn, we're ready to take you to the
              mountains — on time, every time.
            </p>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" ref={badgesRef}>
              {[
                'Verified Drivers',
                'Senior Citizen Special',
                'Multilingual Staff',
                '5-Min Response Time'
              ].map((text, i) => (
                <div key={i} className="reveal-child flex items-center gap-2.5 text-[13px] text-[#1a1a1a] font-medium bg-white px-4 py-3 border border-border border-l-[3px] border-l-accent">
                  <span className="text-accent font-bold text-[15px]">✓</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Block */}
          <div className="about-image relative mt-8 md:mt-0" ref={sectionRef}>
            <div className="reveal">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80&auto=format"
                alt="Delight Tourism team ready at NJP"
                className="w-full h-[300px] md:h-[520px] object-cover block"
                loading="lazy"
              />
              <div className="absolute -bottom-5 left-4 md:-bottom-6 md:-left-6 bg-primary text-white p-5 md:px-7 md:py-5 text-center shadow-lg">
                <span className="block font-display text-3xl md:text-4xl text-accent">4.9★</span>
                <span className="block text-[10px] md:text-[11px] tracking-[0.15em] uppercase opacity-70 mt-1">Google Rating</span>
                <span className="block text-[11px] md:text-[12px] text-accent-light mt-0.5">400+ Reviews</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
