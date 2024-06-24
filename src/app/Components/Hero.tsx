import React from "react";
import Image from "next/image";
import { Button } from "../UI/Button";

const Hero = () => {
  return (
    <main className="relative w-full h-full overflow-hidden">
      {/* Hero background */}
      <Image
        src="/hero-bg.png"
        alt="Hero Background"
        fill
        className="absolute inset-0 z-0 h-screen"
        priority
      />

      {/* Hero Info and image */}
      <div className="relative flex flex-col  justify-center items-center h-full w-full z-10 p-8  gap-y-4 xl:gap-y-10 xl:p-20">
        {/* Hero Info */}
        <div className="flex flex-col  text-center items-center justify-between text-white mt-16 gap-x-5  w-full max-w-max mx-auto">
          <h3 className=" w-full text-lg 2xl:text-xl text-gray-50  text-center md:text-right ">
            نظام آلي متطور لإدارة فعالة لاشتراكاتك
          </h3>

          <div className="flex-1 flex flex-col items-center md:items-start justify-center w-full ">
            <div
              className="flex flex-col md:flex-row justify-center gap-8">
              <h1 className="flex-1 text-3xl md:text-4xl xl:text-6xl font-bold   md:justify-center  md:text-start ">
                إدارة <span className="text-[#F29912]">إشتراكاتك</span>{" "}
                الكهربائية بكل سهولة
              </h1>
              <div className="flex-1 ">
                <p className=" w-3/4 text-sm md:text-lg lg:text-xl xl:text-2xl md:w-full mx-auto md:mx-0 lg:text-start">
                  تجربة سلسة وسهلة للتحكم في اشتراكاتك الكهربائية اين ما كنت,
                  باستخدام تكنولوجيا مبتكرة وأنظمة ذكية وللمستهلكين، حمّل
                  التطبيق الآن لمتابعة فواتيرك بسهولة
                </p>
                <div className="flex w-full justify-center md:justify-start gap-x-4 mt-4">
                  <Button className="text-black">تحميل التطبيق</Button>
                  <Button className="text-black bg-[#F29912]">
                    طلب تجريـبي
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="hidden lg:flex relative  z-10 w-[900px] h-[400px] justify-center items-end  overflow-hidden ">
          {/* <div className="relative w-fit z-0 bg-red-600 flex justify-center items-center"> */}
          <Image
            src="/dashtab.png"
            alt="Tab Image"
            width={900}
            height={400}
            className="relative -bottom-28  "
          />
          <Image
            src="/phone.png"
            alt="Phone Image"
            width={450}
            height={450}
            className="absolute z-10 left-6 "
          />
          {/* </div> */}
        </div>
      </div>
    </main>
  );
};

export default Hero;
