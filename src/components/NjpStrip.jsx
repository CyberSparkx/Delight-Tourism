const NjpStrip = () => {
  return (
    <div className="bg-primary py-10 border-y border-accent/20">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-7">
          <div className="text-4xlshrink-0">🚂</div>
          <div className="flex-1 flex flex-col gap-1 text-center md:text-left">
            <strong className="text-[17px] text-accent-light font-heading font-normal">
              Walk out of NJP Station — your car is already waiting.
            </strong>
            <span className="text-[14px] text-white/65">
              2-minute pickup from NJP Railway Station. No waiting, no hassle.
            </span>
          </div>
          <a
            href="#booking"
            className="inline-block bg-accent hover:bg-accent-light text-[#0a0a14] text-[13px] font-medium tracking-[0.1em] uppercase px-8 py-3.5 transition-colors whitespace-nowrap"
          >
            Book Pickup Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default NjpStrip;
