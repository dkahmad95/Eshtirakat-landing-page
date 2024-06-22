import React, { useState } from "react";
import PriceButtonToggle from "../UI/prices/PriceButtonToggle";
import Image from "next/image";
import Card from "../UI/prices/Card";

const Prices = () => {
  const [activeButton, setActiveButton] = useState("3 اشهر");
  return (
    
    <main className="h-full w-full flex flex-col  items-center   gap-y-8 ">
       
      {/* title */}
      <div className="flex flex-col  items-center justify-center gap-y-4 mt-[70px]" >
        <h1 className="text-xl md:text-3xl font-bold mt-2 md:text-start">
          خطط وأسعار
          <span className="text-[#F29912]"> للجميع</span>
        </h1>
        <span className=" text-sm  md:text-lg  w-3/4 text-center text-[#052533] opacity-70">
          نقدم خطط أسعار متنوعة تتناسب مع حجم ونوع عملك. سواء كنت تدير عددًا
          صغيرًا أو كبيرًا من الاشتراكات، لدينا الحل الأمثل لك.
        </span>
      </div>
      {/* Button Toggle and Image */}
      <div className="relative flex flex-col items-center">
        <PriceButtonToggle activeButton={activeButton} setActiveButton={setActiveButton}/>
        <Image
          src="/save30.png"
          alt="save 30% Image"
          width={100}
          height={100}
          className=" hidden md:flex absolute -left-32 -bottom-6 w-[120px]"
        />
      </div>

      {/* more info */}
      <span className=" text-xs  md:text-sm  w-3/4 text-center text-[#052533] opacity-70">
        لمعرفة المزيد عن خططنا وكيف يمكنها أن تساهم في تطوير عملك، يرجى التواصل
        مع فريق المبيعات لدينا أو طلب عرض توضيحي.
      </span>

      {/* cardes */}
      <div>
        <Card activeButton={activeButton}  />
      </div>
      {/* bottom info */}
      <span className="text-xs md:text-sm text-[#052533] w-3/4 text-center opacity-70 mb-10">
        جميع الأسعار المذكورة أعلاه تشمل كافة الميزات الأساسية. الأسعار المعروضة
        للخطط الإضافية, هي لتوسيع نطاق الخدمة وتلبية احتياجات عملك المتنامية.
      </span>
    </main>
  );
};

export default Prices;
