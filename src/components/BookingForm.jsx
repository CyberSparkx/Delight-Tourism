import { useState, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { packages } from '../data/packages';

const BookingForm = () => {
  const infoRef = useScrollReveal('.reveal');
  const formRef = useScrollReveal('.reveal', { delay: 0.2 });

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    destination: '',
    travelDate: '',
    passengers: '',
    trainFlight: '',
    requirements: '',
    seniorCitizen: false
  });

  const [submitted, setSubmitted] = useState(false);

  // Read URL params
  useEffect(() => {
    const handleHashChange = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const pkgParam = urlParams.get('pkg');
      const typeParam = urlParams.get('type');
      
      if (pkgParam) {
        setFormData(prev => ({ ...prev, destination: pkgParam }));
      }
      if (typeParam === 'senior-citizen') {
        setFormData(prev => ({ ...prev, seniorCitizen: true }));
      }
    };
    
    // Check initial
    handleHashChange();
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Real implementation would send to backend
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '', phone: '', destination: '', travelDate: '', passengers: '', trainFlight: '', requirements: '', seniorCitizen: false
      });
    }, 4000);
  };

  return (
    <section id="booking" className="py-[100px] bg-white">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-[48px] md:gap-[80px] items-start">

          {/* Left: Form Info */}
          <div className="booking-info" ref={infoRef}>
            <span className="reveal inline-block text-[11px] tracking-[0.2em] uppercase text-accent mb-4">
              Quick Booking
            </span>
            <h2 className="reveal font-heading text-[clamp(28px,3.5vw,44px)] leading-[1.25] text-[#1a1a1a]">
              Plan Your Trip —<br/><em className="italic text-[#8a6c3e]">We Respond in 5 Minutes</em>
            </h2>
            <p className="reveal text-[15px] leading-[1.8] text-text-muted mt-5 mb-7">
              Fill in your details and our team will reach out with a
              personalised itinerary and pricing. For fastest response,
              WhatsApp us directly.
            </p>
            
            <div className="reveal flex flex-col gap-3.5 mb-7">
              <div className="flex items-start gap-3 text-[14px] text-[#1a1a1a]">
                <span>📞</span>
                <div>
                  <a href="tel:+919800759408" className="block hover:text-accent transition-colors">+91 98007 59408</a>
                  <a href="tel:+918918297957" className="block hover:text-accent transition-colors">+91 89182 97957</a>
                </div>
              </div>
              <div className="flex items-start gap-3 text-[14px] text-[#1a1a1a]">
                <span>📧</span>
                <a href="mailto:kusumparijat@gmail.com" className="hover:text-accent transition-colors">kusumparijat@gmail.com</a>
              </div>
              <div className="flex items-start gap-3 text-[14px] text-[#1a1a1a]">
                <span>📍</span>
                <a href="https://www.google.com/maps/search/?api=1&query=NJP+Railway+Station+Road,+Near+HDFC+Bank,+Babupara,+Siliguri+734004" target="_blank" rel="noreferrer" className="leading-[1.6] hover:text-accent transition-colors">
                  NJP Railway Station Road, Near HDFC Bank,<br/>Babupara, Siliguri 734004
                </a>
              </div>
            </div>

            <a 
              href="https://api.whatsapp.com/send?phone=919800759408&text=Hi+Delight+Tourism%2C+I+want+to+plan+a+trip" 
              target="_blank" 
              rel="noreferrer"
              className="reveal inline-flex items-center gap-2.5 bg-[#25d366] hover:bg-[#1da851] text-white text-[14px] font-medium px-7 py-3.5 transition-colors"
            >
              💬 Chat on WhatsApp (Fastest)
            </a>
          </div>

          {/* Right: Form */}
          <div className="booking-form bg-bg-warm p-8 md:p-12 border border-border" ref={formRef}>
            {submitted ? (
              <div className="reveal text-center py-10">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-heading text-2xl mb-2">Request Sent Successfully!</h3>
                <p className="text-text-muted text-sm">Our team will reach out to you shortly via WhatsApp or Phone.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="reveal">
                
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="fullName" className="text-[12px] font-medium tracking-[0.06em] uppercase text-[#1a1a1a]">Full Name *</label>
                    <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required placeholder="Your name" className="border border-border p-3 text-[14px] font-body text-[#1a1a1a] bg-white outline-none focus:border-accent transition-colors w-full" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-[12px] font-medium tracking-[0.06em] uppercase text-[#1a1a1a]">Phone / WhatsApp *</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+91 XXXXX XXXXX" className="border border-border p-3 text-[14px] font-body text-[#1a1a1a] bg-white outline-none focus:border-accent transition-colors w-full" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="destination" className="text-[12px] font-medium tracking-[0.06em] uppercase text-[#1a1a1a]">Destination *</label>
                    <select id="destination" name="destination" value={formData.destination} onChange={handleChange} required className="border border-border p-3 text-[14px] font-body text-[#1a1a1a] bg-white outline-none focus:border-accent transition-colors w-full h-[47px]">
                      <option value="">Select destination...</option>
                      {packages.map(pkg => (
                         <option key={pkg.id} value={pkg.id}>{pkg.name}</option>
                      ))}
                      <option value="car-rental">Car Rental Only</option>
                      <option value="custom">Custom / Other</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="travelDate" className="text-[12px] font-medium tracking-[0.06em] uppercase text-[#1a1a1a]">Travel Date *</label>
                    <input type="date" id="travelDate" name="travelDate" value={formData.travelDate} onChange={handleChange} required className="border border-border p-3 text-[14px] font-body text-[#1a1a1a] bg-white outline-none focus:border-accent transition-colors w-full h-[47px]" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="passengers" className="text-[12px] font-medium tracking-[0.06em] uppercase text-[#1a1a1a]">No. of Passengers *</label>
                    <select id="passengers" name="passengers" value={formData.passengers} onChange={handleChange} required className="border border-border p-3 text-[14px] font-body text-[#1a1a1a] bg-white outline-none focus:border-accent transition-colors w-full h-[47px]">
                      <option value="">Select...</option>
                      <option value="1">1 Person (Solo)</option>
                      <option value="2">2 People (Couple)</option>
                      <option value="3-4">3–4 People</option>
                      <option value="5-8">5–8 People (Group)</option>
                      <option value="8+">8+ People (Large Group)</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="trainFlight" className="text-[12px] font-medium tracking-[0.06em] uppercase text-[#1a1a1a]">
                      Train / Flight No. <span className="text-[10px] text-text-muted lowercase tracking-normal font-normal pl-1">(optional — for NJP/IXB pickup)</span>
                    </label>
                    <input type="text" id="trainFlight" name="trainFlight" value={formData.trainFlight} onChange={handleChange} placeholder="e.g. 12345 / 6E-432" className="border border-border p-3 text-[14px] font-body text-[#1a1a1a] bg-white outline-none focus:border-accent transition-colors w-full h-[47px]" />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 mb-5">
                  <label htmlFor="requirements" className="text-[12px] font-medium tracking-[0.06em] uppercase text-[#1a1a1a]">Special Requirements</label>
                  <textarea id="requirements" name="requirements" value={formData.requirements} onChange={handleChange} rows="3" placeholder="Dietary needs, medical requirements, senior citizen care, budget range, preferred vehicle type..." className="border border-border p-3 text-[14px] font-body text-[#1a1a1a] bg-white outline-none focus:border-accent transition-colors w-full"></textarea>
                </div>

                <div className="flex items-start gap-2.5 mb-6 text-[13px] text-text-muted leading-[1.5]">
                  <input type="checkbox" id="seniorCitizen" name="seniorCitizen" checked={formData.seniorCitizen} onChange={handleChange} className="mt-1" />
                  <label htmlFor="seniorCitizen" className="cursor-pointer">
                    This trip includes senior citizens (65+) — please plan a slower-paced itinerary with medical-stop awareness.
                  </label>
                </div>

                <button type="submit" className="w-full bg-primary hover:bg-accent text-white hover:text-primary border-none p-4 text-[14px] font-medium tracking-[0.08em] uppercase cursor-pointer font-body transition-colors">
                  Send Booking Request →
                </button>
                
                <p className="text-[11px] text-text-muted text-center mt-3.5 italic">
                  We typically respond within 5–60 minutes during business hours. For urgent bookings, WhatsApp is faster.
                </p>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default BookingForm;
