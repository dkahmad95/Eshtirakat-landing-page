import Image from "next/image";
import React from "react";
import Badge from "../UI/counter";

const AllOverLebanon = () => {
  const counterData = [
    { id: 1, title: "منطقة", count: 16 },
    { id: 2, title: "مستخدمين", count: 918 },
    { id: 3, title: "اشتراكات", count: 33 },
    { id: 4, title: "شريك", count: 42 },
  ];

  return (
    <main className=" relative flex flex-col gap-y-10 items-center justify-center w-full h-[500px] overflow-hidden ">
      <Image
        src="/counterb-g.png"
        alt="AllOverLebanon Background"
        width={100}
        height={500}
        className="absolute z-0 object-center w-full h-[350px] "
      />
      {/* info container */}
      <div className="relative z-10 w-full flex flex-col gap-y-10  ">
        {/* title and sub title */}
        <div className="flex flex-col justify-center items-center gap-y-8">
          <h1 className="text-xl md:text-3xl  font-bold text-white mt-2 md:text-start">
            <span className="text-[#F29912]"> إشتراكات </span>
            في كل لبنان
          </h1>
          <span className=" text-sm  md:text-lg  w-1/2 text-center text-[#F6FBFE] opacity-70">
            الريادة في إدارة اشتراكات المولدات بلبنان. انضم إلى شبكتنا المتنامية
            من أصحاب المولدات الذين يحققون الكفاءة والدقة في إدارة عملياتهم
            واشتراكات مستهلكيهم، كل ذلك بفضل حلولنا المبتكرة.
          </span>
        </div>
        {/* counters */}
        <div className="text-white flex flex-row justify-center items-center gap-x-4 md:gap-x-10 mt-8">
          {/* line */}
          <div className="h-full flex justify-center">
            <div className="w-[1px] bg-[#F6FBFE] opacity-50 "></div>
          </div>
          {counterData.map((counts) => (
            <>
              <Badge
                key={counts.id}
                endCountNum={counts.count}
                badgeText={counts.title}
              />
              {/* line */}
              <div key={counts.id} className="h-full flex justify-center">
                <div className="w-[1px] bg-[#F6FBFE] opacity-50 "></div>
              </div>
            </>
          ))}
        </div>
      </div>
    </main>
  );
};

export default AllOverLebanon;
