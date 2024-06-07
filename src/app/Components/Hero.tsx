import React from "react";
import Image from "next/image";
import { Button } from "../UI/Button";

const Hero = () => {
  return (
    <main className="relative w-full h-screen overflow-hidden">
      {/* Hero background */}
      <Image
        src="/hero-bg.png"
        alt="Hero Background"
        fill
        className="absolute inset-0 z-0  w-full h-full"
        priority
      />

      {/* Hero Info and image */}
      <div className="relative flex flex-col  justify-between items-center h-full w-full z-10 p-8 mt-4">
        {/* Hero Info */}
        <div className="flex flex-col md:flex-row text-center text-white mt-16 gap-x-5 gap-y-20 w-full max-w-6xl mx-auto">
          <div className="flex-1 flex flex-col md:items-start justify-center">
            <h3 className="text-lg text-gray-50 ">
              نظام آلي متطور لإدارة فعالة لاشتراكاتك
            </h3>
            <h1 className="text-3xl md:text-5xl font-bold mt-2 md:text-start">
              إدارة <span className="text-[#F29912]">إشتراكاتك</span> الكهربائية
              بكل سهولة
            </h1>
          </div>
          <div className="flex-1 flex flex-col items-center md:items-start mt-4 justify-center">
            <p className=" md:mt-4 mb-8 w-3/4 text-lg md:w-full mx-auto md:mx-0 md:text-start">
              تجربة سلسة وسهلة للتحكم في اشتراكاتك الكهربائية اين ما كنت,
              باستخدام تكنولوجيا مبتكرة وأنظمة ذكية وللمستهلكين، حمّل التطبيق
              الآن لمتابعة فواتيرك بسهولة
            </p>
            <div className="flex justify-center md:justify-start gap-x-4">
              <Button className="text-black">تحميل التطبيق</Button>
              <Button className="text-black bg-[#F29912]">طلب تجريـبي</Button>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="hidden md:flex relative w-full justify-center items-end mt-8 md:mt-0">
          <Image
            src="/phone.png"
            alt="Phone Image"
            width={600}
            height={600}
            className="z-10 h-[250px] w-[400px]"
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
