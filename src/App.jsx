import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import NjpStrip from './components/NjpStrip';
import Destinations from './components/Destinations';
import Packages from './components/Packages';
import CarRental from './components/CarRental';
import Advantages from './components/Advantages';
import SeniorSpecial from './components/SeniorSpecial';
import Testimonials from './components/Testimonials';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div className="font-body">
      <Navbar />
      <main>
        <Hero />
        <About />
        <NjpStrip />
        <Destinations />
        <Packages />
        <CarRental />
        <Advantages />
        <SeniorSpecial />
        <Testimonials />
        <BookingForm />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
