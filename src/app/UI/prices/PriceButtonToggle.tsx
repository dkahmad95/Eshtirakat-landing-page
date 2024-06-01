import React, { useState } from "react";

interface PriceButtonToggleProps {
  activeButton: string;
  setActiveButton: (button: string) => void;
}

const PriceButtonToggle: React.FC<PriceButtonToggleProps> = ({ activeButton, setActiveButton }) => {


  return (
    <div className="relative w-[160px] h-[40px] bg-white rounded-[35px] border-2  shadow-lg shadow-neutral-500 flex justify-between items-center p-1">
      <div
        className={`absolute  top-1 bottom-1 w-[70px] h-[30px]  bg-[#0C5678] rounded-[20px] transition-transform duration-300 ease-in-out ${
          activeButton === "3 اشهر" ? "-translate-x-1" : "-translate-x-full"
        }`}
      ></div>

      <button
        className={`w-1/2 h-full z-10 flex justify-center items-center text-lg ${
          activeButton === "3 اشهر" ? "text-white" : "text-black"
        }`}
        onClick={() => setActiveButton("3 اشهر")}
      >
        3 اشهر
      </button>
      <button
        className={`w-1/2 h-full z-10 flex justify-center items-center text-lg  ${
          activeButton === "سنوي" ? "text-white" : "text-black"
        }`}
        onClick={() => setActiveButton("سنوي")}
      >سنوي
      </button>
    </div>
  );
};

export default PriceButtonToggle;
