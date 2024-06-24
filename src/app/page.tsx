"use client";

import Hero from "./Components/Hero";
import Partners from "./Components/Partners";
import Featuers from "./Components/Featuers";
import Benefits from "./Components/Benefits";
import AllOverLebanon from "./Components/AllOverLebanon";
import Prices from "./Components/Prices";
import Testimonials from "./Components/Testimonials";
import About from "./Components/About";
import FAQ from "./Components/FAQ";
import Support from "./Components/Support";
import Form from "./Components/Form";


export default function Home() {
  return (
    <div>
      <section id="home">
        <Hero />
      </section>

      <div className="mt-8">
        <Partners />
      </div>
      <div className="mt-8">
        <Featuers />
      </div>
      <div className="mt-12">
        <Benefits />
      </div>
      <div className="mt-12">
        <AllOverLebanon />
      </div>

      <section id="pricing">
        <Prices />
      </section>

      <section
        
        className=" flex items-center justify-center bg-[#F6FBFE]"
      >
        <Testimonials />
      </section>

      <section
        id="about"
        className=" h-full flex items-center justify-center my-12"
      >
        <About />
      </section>

      <div className="my-12">
        <FAQ />
      </div>
      <section id="support">
        <div className="my-12">
          <Support />
        </div>
      </section>

      <section id="contact" className="flex items-center justify-center">
        <div className="my-12">
          <Form />
        </div>
      </section>

      
    </div>
  );
}
