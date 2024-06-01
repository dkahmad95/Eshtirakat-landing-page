"use client";
import { useEffect, useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Partners from "./Components/Partners";
import Featuers from "./Components/Featuers";
import Benefits from "./Components/Benefits";
import AllOverLebanon from "./Components/AllOverLebanon";
import Prices from "./Components/Prices";
import Testimonials from "./Components/Testimonials";

export default function Home() {
  return (
    <div>
      <Header />
      <section id="home" className="h-screen flex items-center justify-center">
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

      <section
        id="pricing"
      >
        <Prices/>
      </section>
     
      <section
        id="about"
        className=" flex items-center justify-center bg-[#F6FBFE]"
      >
      <Testimonials />
      </section>
      <section
        id="support"
        className="h-screen flex items-center justify-center bg-gray-400"
      >
        <h1 className="text-3xl">Support Section</h1>
      </section>
      <section
        id="contact"
        className="h-screen flex items-center justify-center bg-gray-500"
      >
        <h1 className="text-3xl">Contact Section</h1>
      </section>
      <section
        id="download"
        className="h-screen flex items-center justify-center bg-gray-600"
      >
        <h1 className="text-3xl">Download Section</h1>
      </section>
      {/* <Footer/> */}
    </div>
  );
}
