const FloatingButtons = () => {
  return (
    <div className="fixed bottom-7 right-6 flex flex-col gap-3 z-50">
      
      {/* WhatsApp */}
      <a 
        href="https://api.whatsapp.com/send?phone=919800759408&text=Hi+Delight+Tourism%2C+I+want+to+plan+a+trip" 
        target="_blank" 
        rel="noreferrer" 
        aria-label="WhatsApp"
        className="w-[48px] h-[48px] md:w-[52px] md:h-[52px] rounded-full bg-[#25d366] flex items-center justify-center text-white shadow-[0_4px_20px_rgba(0,0,0,0.25)] transition-all duration-200 hover:scale-110 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] animate-[bounce_2s_infinite]"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-[22px] h-[22px] md:w-[24px] md:h-[24px]">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.112 1.524 5.84L0 24l6.336-1.502A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.65-.493-5.177-1.355l-.371-.22-3.763.892.952-3.671-.242-.378A9.944 9.944 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
        </svg>
      </a>

      {/* Call */}
      <a 
        href="tel:+919800759408" 
        aria-label="Call us"
        className="w-[48px] h-[48px] md:w-[52px] md:h-[52px] rounded-full bg-primary border-2 border-accent flex items-center justify-center text-white shadow-[0_4px_20px_rgba(0,0,0,0.25)] transition-all duration-200 hover:scale-110 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:bg-[#20203a]"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-[20px] h-[20px] md:w-[22px] md:h-[22px]">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
      </a>

    </div>
  );
};

export default FloatingButtons;
