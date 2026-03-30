const Footer = () => {
  return (
    <footer className="bg-[#0a0a14] text-white/70">
      <div className="py-20 border-b border-accent/15">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-10 lg:gap-[60px]">
            
            {/* Column 1: Brand */}
            <div>
              <div className="font-display text-[28px] font-light text-white mb-4">
                Delight <em className="italic text-accent">Tourism</em>
              </div>
              <p className="text-[13px] leading-[1.8] mb-5 max-w-[280px]">
                Siliguri's most trusted Himalayan travel partner since 2017.
                Specialising in budget to mid-range tours across Sikkim,
                Darjeeling & North East India — departing right from NJP Station.
              </p>
              <div className="flex gap-4 mb-4">
                <a href="https://api.whatsapp.com/send?phone=919800759408" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="hover:text-accent transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.112 1.524 5.84L0 24l6.336-1.502A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.65-.493-5.177-1.355l-.371-.22-3.763.892.952-3.671-.242-.378A9.944 9.944 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                  </svg>
                </a>
              </div>
              <div className="flex items-center gap-2 mt-4 text-[13px]">
                <span className="text-accent text-[16px]">★★★★★</span>
                <span>4.9/5 · 400+ Reviews</span>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-[11px] tracking-[0.2em] uppercase text-accent mb-5 font-medium">Quick Links</h4>
              <ul className="list-none flex flex-col gap-2.5">
                <li><a href="#home" className="text-[13px] text-white/60 hover:text-accent-light transition-colors">Home</a></li>
                <li><a href="#packages" className="text-[13px] text-white/60 hover:text-accent-light transition-colors">Tour Packages</a></li>
                <li><a href="#car-rental" className="text-[13px] text-white/60 hover:text-accent-light transition-colors">Car Rental</a></li>
                <li><a href="#about" className="text-[13px] text-white/60 hover:text-accent-light transition-colors">About Us</a></li>
                <li><a href="#contact" className="text-[13px] text-white/60 hover:text-accent-light transition-colors">Contact & Booking</a></li>
              </ul>
            </div>

            {/* Column 3: Popular Destinations */}
            <div>
              <h4 className="text-[11px] tracking-[0.2em] uppercase text-accent mb-5 font-medium">Destinations</h4>
              <ul className="list-none flex flex-col gap-2.5">
                <li><a href="#packages" className="text-[13px] text-white/60 hover:text-accent-light transition-colors">Darjeeling Offbeat</a></li>
                <li><a href="#packages" className="text-[13px] text-white/60 hover:text-accent-light transition-colors">North Sikkim</a></li>
                <li><a href="#packages" className="text-[13px] text-white/60 hover:text-accent-light transition-colors">Sikkim Complete</a></li>
                <li><a href="#packages" className="text-[13px] text-white/60 hover:text-accent-light transition-colors">Assam & North East</a></li>
                <li><a href="#booking" className="text-[13px] text-white/60 hover:text-accent-light transition-colors">Custom Itinerary</a></li>
              </ul>
            </div>

            {/* Column 4: Contact Info */}
            <div id="contact">
              <h4 className="text-[11px] tracking-[0.2em] uppercase text-accent mb-5 font-medium">Get In Touch</h4>
              <div className="flex gap-3 mb-[14px] text-[13px]">
                <span>📞</span>
                <div className="flex flex-col gap-1 text-white/60 leading-[1.8]">
                  <a href="tel:+919800759408" className="hover:text-accent-light transition-colors">+91 98007 59408</a>
                  <a href="tel:+918918297957" className="hover:text-accent-light transition-colors">+91 89182 97957</a>
                  <a href="tel:+919647073272" className="hover:text-accent-light transition-colors">+91 96470 73272</a>
                </div>
              </div>
              <div className="flex gap-3 mb-[14px] text-[13px]">
                <span>📧</span>
                <div className="flex flex-col gap-1 text-white/60 leading-[1.8]">
                  <a href="mailto:kusumparijat@gmail.com" className="hover:text-accent-light transition-colors">kusumparijat@gmail.com</a>
                  <a href="mailto:reservation@exploretourism.in" className="hover:text-accent-light transition-colors">reservation@exploretourism.in</a>
                </div>
              </div>
              <div className="flex gap-3 text-[13px]">
                <span>📍</span>
                <a href="https://www.google.com/maps/search/?api=1&query=NJP+Railway+Station+Road,+Near+HDFC+Bank,+Babupara,+Siliguri+734004" target="_blank" rel="noreferrer" className="text-white/60 leading-[1.7] m-0 hover:text-accent-light transition-colors block">
                   NJP Railway Station Road,<br/>
                   Near HDFC Bank, Babupara,<br/>
                   Siliguri, WB 734004
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="py-5">
        <div className="container mx-auto px-6 max-w-[1200px] flex flex-wrap justify-between items-center gap-3">
          <p className="text-[12px] text-white/35">© 2026 Delight Tourism. All rights reserved. | Managed by Kushum Parijat</p>
          <div className="flex gap-6">
            <a href="#" className="text-[12px] text-white/35 hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="text-[12px] text-white/35 hover:text-accent transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
