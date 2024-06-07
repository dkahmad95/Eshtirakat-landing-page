import React, { useState } from "react";

interface PriceButtonToggleProps {
  activeButton: string;
  setActiveButton: (button: string) => void;
}

const PriceButtonToggle: React.FC<PriceButtonToggleProps> = ({ activeButton, setActiveButton }) => {


  return (
    <div className=" w-[160px] h-[40px] bg-white rounded-[35px] border-2  shadow-lg shadow-neutral-500 flex justify-between items-center p-1">
      {/* <div
        className={`absolute  top-1 bottom-1 w-[70px] h-[30px]  bg-[#0C5678] rounded-[20px] transition-transform duration-300 ease-in-out ${
          activeButton === "3 اشهر" ? "-translate-x-1" : "-translate-x-full"
        }`}
      ></div> */}

      <button
        className={`w-full h-full flex justify-center items-center text-lg rounded-[35px] ${
          activeButton === "3 اشهر" ? "text-white bg-[#0C5678]" : "text-black bg-white"
        }`}
        onClick={() => setActiveButton("3 اشهر")}
      >
        3 اشهر
      </button>
      <button
        className={`w-full h-full flex justify-center items-center text-lg rounded-[35px]  ${
          activeButton === "سنوي" ? "text-white bg-[#0C5678]" : "text-black  bg-white"
        }`}
        onClick={() => setActiveButton("سنوي")}
      >سنوي
      </button>
    </div>
  );
};

export default PriceButtonToggle;
