import Image from "next/image";
import React from "react";

const Partners = () => {
  return (
    <main className="flex flex-col items-center w-full h-auto gap-y-10 py-10">
      <div>
        {/* title */}
        <span className="text-lg text-[#052533]">
          شركاؤنا الاوائل في عالم المحروقات والكهربائيات
        </span>
      </div>
       {/* line */}
      <div className="w-full flex justify-center">
        <div className="h-[2px] w-3/4 bg-gray-300 bg-opacity-25 md:w-1/2 lg:w-1/3"></div>
      </div>
      {/* icons */}
      <div className="flex flex-wrap justify-center items-center  gap-6 md:gap-10 w-full">
        <Image
          src="/partnersIcons/carpicron.png"
          alt="partner Icon"
          width={100}
          height={100}
        />
        <Image
          src="/partnersIcons/coral.png"
          alt="partner Icon"
          width={100}
          height={100}
        />
        <Image
          src="/partnersIcons/enoc.png"
          alt="partner Icon"
          width={100}
          height={100}
        />
        <Image
          src="/partnersIcons/ipt.png"
          alt="partner Icon"
          width={100}
          height={100}
        />
        <Image
          src="/partnersIcons/petroluim.png"
          alt="partner Icon"
          width={100}
          height={100}
        />
      </div>
        {/* line */}
        <div className="w-full flex justify-center">
        <div className="h-[2px] w-3/4 bg-gray-300 bg-opacity-25 md:w-1/2 lg:w-1/3"></div>
      </div>
    </main>
  );
};

export default Partners;
