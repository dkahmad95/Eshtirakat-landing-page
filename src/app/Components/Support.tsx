import Image from "next/image";
import React from "react";

const Support = () => {
  return (
    <main className="  w-full h-full flex justify-center  items-center">
      
     
      <div className="relative w-3/4 flex-col flex justify-center items-center  gap-y-6  py-4 mt-[75px]">
      <Image
        src="/suppurtBg.png"
        alt="support Background"
        width={100}
        height={500}
        className="absolute z-0 w-full h-full  rounded-lg   "
      />

        <h1 className="text-2xl md:text-3xl z-10  mt-2 text-[#F6FBFE]">
          دعم العملاء
        </h1>
        <span className="text-sm md:text-lg text-center z-10  w-3/4 text-[#F6FBFE]">
          فريقنا جاهز لتقديم المساعدة والإجابة على استفساراتكم. وللحصول على
          مساعدة فورية، يرجى الاتصال بفريق دعم العملاء لدينا.
        </span>
        <button className="w-[100px] md:w-[180px] h-[30px] md:h-[40px] bg-[#F29912] text-[#F6FBFE] rounded-xl z-10 ">
          إتصل بنا الآن
        </button>
      
      </div>
    </main>
  );
};

export default Support;
