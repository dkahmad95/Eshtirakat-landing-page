"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../UI/Button";
import NavLinks from "../UI/NavLinks";
import Image from "next/image";
import Announcement from "./Announcement";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  ///fix this bug
  const [activeSection, setActiveSection] = useState("home");
  useEffect(() => {
    const handleScroll: any = () => {
      const sections = document.querySelectorAll("section");
      let currentActiveSection = ""; // Initialize a variable to hold the active section ID
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          currentActiveSection = section.id;
        }
      });
      setActiveSection(currentActiveSection); // Set activeSection outside the loop
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call handleScroll initially on component mount
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0  z-50">
      <Announcement/>
      <div className="h-[70px] w-full bg-[#073652] flex justify-center items-center">
        <div className="w-[90%] m-auto flex justify-between items-center">
          
          <div>
            <Image
              src="/arLogo2.png"
              alt="arabic logo"
              width={100}
              height={100}
              className=""
            />
          </div>
          <div className="hidden md:flex  flex-row space-y-2">
            <NavLinks
              className="flex md:flex-row "
              activeSection={activeSection}
            />
          </div>
          <Button>تسجيل الدخول</Button>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-[#073652]">
            <NavLinks
              className="flex flex-wrap justify-center items-center"
              onClick={toggleMenu}
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
