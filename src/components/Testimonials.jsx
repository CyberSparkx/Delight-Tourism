import { useScrollReveal } from '../hooks/useScrollReveal';
import { reviews } from '../data/reviews';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const headerRef = useScrollReveal('.reveal');

  return (
    <section id="testimonials" className="py-[100px] bg-primary">
      <div className="container mx-auto px-6 max-w-[1200px]" ref={headerRef}>
        
        <div className="reveal text-center mb-10">
          <span className="inline-block text-[11px] tracking-[0.2em] uppercase text-accent mb-4">
            Real Travellers
          </span>
          <h2 className="font-heading text-[clamp(28px,3.5vw,44px)] leading-[1.25] text-white">
            What Our Guests <em className="italic text-accent-light">Say About Us</em>
          </h2>
          
          <div className="flex items-center justify-center gap-4 mt-4">
            <span className="font-display text-[56px] font-light text-accent leading-[1]">4.9</span>
            <div className="text-left flex flex-col pt-1">
              <div className="text-accent text-[18px] tracking-[2px]">★★★★★</div>
              <span className="text-[12px] text-white/50 mt-1 block">Based on 400+ verified reviews</span>
            </div>
          </div>
        </div>

        <div className="reveal">
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="pb-12"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id} className="h-auto">
                <div className="bg-white/5 border border-accent/20 p-8 h-full flex flex-col transition-colors hover:bg-white/10">
                  <div className="text-accent text-[16px] tracking-[2px] mb-4">
                    {'★'.repeat(review.rating)}
                  </div>
                  <p className="text-[14px] leading-[1.8] text-white/75 flex-1 font-italic italic mb-6">
                    "{review.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-[42px] h-[42px] rounded-full bg-accent text-primary flex items-center justify-center font-semibold text-[13px]">
                      {review.initials}
                    </div>
                    <div>
                      <strong className="block text-[14px] text-white leading-tight mb-1">{review.name}</strong>
                      <span className="text-[11px] text-white/45">{review.location} · {review.trip}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .swiper-pagination-bullet { background: rgba(255,255,255,0.3); opacity: 1; }
        .swiper-pagination-bullet-active { background: #c9a96e; }
      `}} />
    </section>
  );
};

export default Testimonials;
