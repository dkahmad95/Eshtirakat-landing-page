import Image from "next/image";
import React, { useState } from "react";


const Featuers = () => {
  const features = [
    {
      id: 1,
      title: "نظام فوترة آلي متطور لإدارة الاشتراكات بكفاءة",
      description:
        "نظام فوترة آلي متطور لإدارة سلسة وفعالة لاشتراكاتك، موفرًا الوقت والجهد بتصميم بديهي.",
    },
    {
      id: 2,
      title: "حلول محاسبية مبسطة لتتبع المصروفات والأرباح",
      description:
        "نظام محاسبي مبسط يضمن التوازن المالي، مع تحليلات دقيقة لدعم قراراتك الاستراتيجية.",
    },
    {
      id: 3,
      title: "لوحة تحليل ديناميكية لرصد الإيرادات الشهرية",
      description:
        "لوحة تحليل متطورة تقدم رؤية شاملة لإيراداتك الشهرية وتحليلات أحمال الطاقة، مع واجهة تفاعلية.",
    },
    {
      id: 4,
      title: "برنامج متعدد الأجهزة بتجربة  فائقة السهولة",
      description:
        "برنامج شامل متعدد الأجهزة، يوفر تجربة استخدام آمنة ومرنة مع أعلى مستويات الأمان والخصوصية.",
    },
    {
      id: 5,
      title: "تطبيق جوال لإدارة قراءات العدادات بكفاءة",
      description:
        "تطبيق موبايل متطور لتسهيل عملية جمع البيانات وضمان الدقة والفعالية في إدارة الفواتير.",
    },
  ];
  const [hoveredFeature, setHoveredFeature] = useState<Number | null>(1);

  return (
    <main className="w-full gap-6 flex flex-col items-center h-auto gap-y-10 py-10 ">
      {/* title */}
      <div className=" flex flex-col justify-center items-center gap-y-10">
        <div className=" flex flex-col items-center justify-center gap-y-4">
          <h1 className="text-2xl md:text-5xl font-bold mt-2 ">
            إكتشف مميزات <span className="text-[#F29912]">إشتراكات</span>
          </h1>
          <h3 className=" w-3/4 text-sm text-center">
            تقنيات مبتكرة وحديثة لتسهيل إدارة اشتراكات الكهرباء وتحسين الكفاءة
            والسرعة والدقة في العمل, تطوير عملك ليس بالامر الصعب بعد الان.
          </h3>
        </div>
      </div>
      {/* featuers and img */}
      <div className="flex flex-row justify-center items-center w-11/12 mt-8 ">
        {/* featuers */}
        <div className="flex md:flex-1 flex-col justify-center items-center">
          {features.map((feature) => (
            <div
              onMouseEnter={() => setHoveredFeature(feature.id)}
              onMouseLeave={() => setHoveredFeature(1)}
              key={feature.id}
              className="w-11/12 lg:w-3/4 p-4 rounded-md transition-colors duration-300 ease-in-out hover:bg-[#F6FBFE]">
              <div className="flex items-center justify-start gap-x-4">
                <div className="bg-[#011936] text-white rounded-xl w-10 h-10 flex items-center justify-center mr-4">
                  {feature.id}
                </div>
                <div className="text-lg text-[#052533] font-bold cursor-pointer transition-colors duration-300 ease-in-out">
                  {feature.title}
                </div>
              </div>
              <div
                className={`mt-4 mr-12 text-gray-700 transition-all duration-300 ease-in-out ${
                  hoveredFeature === feature.id ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0'
                } overflow-hidden`}>
                {feature.description}
              </div>
            </div>
          ))}
        </div>
        {/* img */}
        <div className="hidden md:flex flex-1 justify-center items-center ">
          <Image
            src="/dashbord.png"
            alt="dashbourd"
            width={550}
            height={500}
            className=" p-[20px] rounded-2xl bg-gradient-to-b to-[#4FBBED] from-[#0E648B]"
          />
        </div>
      </div>
    </main>
  );
};

export default Featuers;

