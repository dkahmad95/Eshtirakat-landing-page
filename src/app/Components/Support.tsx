import React from "react";

const Support = () => {
  return (
    <main className=" w-full h-full flex justify-center  items-center">
      <div className="w-3/4  flex-col flex justify-center items-center bg-[#0C5678] gap-y-6 rounded-lg py-4">
        <h1 className="text-2xl md:text-3xl  mt-2 text-[#F6FBFE]">
          دعم العملاء
        </h1>
        <span className="text-sm md:text-lg text-center  w-3/4 text-[#F6FBFE]">
          فريقنا جاهز لتقديم المساعدة والإجابة على استفساراتكم. وللحصول على
          مساعدة فورية، يرجى الاتصال بفريق دعم العملاء لدينا.
        </span>
        <button className="w-[100px] md:w-[180px] h-[30px] md:h-[40px] bg-[#F29912] text-[#F6FBFE] rounded-xl">
          إتصل بنا الآن
        </button>
      </div>
    </main>
  );
};

export default Support;
