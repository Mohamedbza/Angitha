'use client';

import TopBanner from '@/components/TopBanner';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Partners from '@/components/Partners';
import Services from '@/components/Services'; 
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className='font-sans min-h-screen'>
      {/* <TopBanner /> */}
      <Navbar />
      <Hero />
      <Partners />
      {/* <About /> */}
      <Services /> 
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
}
