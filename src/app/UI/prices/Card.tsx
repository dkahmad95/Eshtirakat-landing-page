import React from "react";
import Line from "../Line";
import { CheckCircleIcon, PlusCircleIcon } from "@heroicons/react/16/solid";


const Card = ({activeButton}:{activeButton: string}) => {
  const plans = [
    {
      id: 1,
      name: "خطة النمو",
      priceAnnually: "1556",
      priceQuarterly: "760",
      priceMonthly: "132 ",
      features: ["تصل إلى 300 مشترك", "مع 1 تطبيق للموظفين"],
      featuresPluse: [
        "إضافة 100 مشترك بتكلفة 15$ كل شهر",
        "إضافة تطبيق للموظفين بتكلفة 15$ كل شهر",
      ],
    },
    {
      id: 2,
      name: "خطة التطور",
      priceAnnually: "1400",
      priceQuarterly: "560",
      priceMonthly: "159",
      features: ["تصل إلى 800 مشترك", "مع 2 تطبيق للموظفين"],
      featuresPluse: [
        "إضافة 100 مشترك بتكلفة 10$ كل شهر",
        "إضافة تطبيق للموظفين بتكلفة 10$ كل شهر",
      ],
    },
    {
      id: 3,

      name: "خطة الريادة",
      priceAnnually: "1200",
      priceQuarterly: "650",
      priceMonthly: "192",
      features: ["عدد مشتركين غير محدود", "عدد تطبيقات غير محدود"],
      featuresPluse: [
        "لا تكاليف اضافية على الاشتراكات الجديدة",
        "لا تكاليف إضافية على التطبيقات الجديدة",
      ],
    },
  ];


  return (
    <main className=" flex flex-col md:flex-row gap-6 ">
      {/* card 1 */}
      <div className="w-[250px] min-h-[450px] flex flex-col bg-gradient-radial bg-[#FFFFFF]  rounded-lg shadow-md shadow-neutral-500  border-2 border-[#F6FBFE] ">
        {/* title and price */}
        <div className="flex flex-col justify-center items-center p-4  gap-y-2">
          <span className="text-[#052533] font-bold">{plans[0].name}</span>
          <span className="text-[#F29912] font-bold text-2xl">

            ${activeButton=== "3 اشهر"? plans[0].priceQuarterly : plans[0].priceAnnually }
          </span>
          <span className="text-[#052533] text-xs opacity-70">
            ${plans[0].priceMonthly} شهريا
          </span>
        </div>

        <Line />

        <div className="flex flex-col justify-center items-center gap-y-2 my-2">
          <span className="text-xs opacity-80 ">
            تصل إلى<b> 300 مشترك</b>
          </span>
          <span className="text-xs opacity-80 ">
            <b>مع 1 تطبيق</b> للموظفين
          </span>
        </div>
        <Line />

        {/*  package scoop*/}
        <div className="flex flex-col p-2 ">
          <span className="font-bold  text-[#052533] text-lg">الميزات</span>

          <div className="flex flex-row items-center gap-x-2 m-2">
            <CheckCircleIcon className="h-4 w-4 text-[#052533]" />
            <span className="text-xs text-[#052533] ">
              يتضمن كل ميزات إشتراكات
            </span>
          </div>
          <div className="flex flex-row items-center gap-x-2 m-2">
            <CheckCircleIcon className="h-4 w-4 text-[#052533]" />
            <span className="text-xs text-[#052533] ">
              دعم فني متميز على مدار 24 ساعة
            </span>
          </div>
        </div>

        <Line />

        {/* featuers2 */}
        <div className="flex flex-col p-2 ">
          {plans[0].featuresPluse.map((feat , index) => (
            <div key={index} className="flex flex-row items-center gap-x-2 m-2">
              <PlusCircleIcon className="h-4 w-4 text-[#052533]" />
              <span className="text-xs text-[#052533] ">{feat}</span>
            </div>
          ))}
        </div>

        <Line />

        {/* button */}
        <div className=" flex justify-center items-center mt-6 ">
          <button className=" flex h-8 justify-center items-center rounded-[24px] px-6  font-medium  shadow-md text-white p-2 text-xs shadow-neutral-500 bg-[#0C5678]  ">
            تقدم بطلبك الآن
          </button>
        </div>
      </div>

      {/* card 2 */}
      <div className=" w-[250px] h-[450px] flex flex-col bg-gradient-radial  from-[#0F6A94] to-[#0C5678] rounded-lg shadow-md shadow-neutral-500  md:transform md:-translate-y-3 ">
        {/* title and price */}
        <div className="flex flex-col justify-center items-center p-4  gap-y-2">
          <span className=" text-white font-bold">{plans[1].name}</span>
          <span className="text-[#F29912] font-bold text-2xl">
          ${activeButton=== "3 اشهر"? plans[1].priceQuarterly : plans[1].priceAnnually }
          </span>
          <span className="text-white text-xs opacity-70">
            ${plans[1].priceMonthly} شهريا
          </span>
        </div>

        <Line />

        <div className="flex flex-col justify-center items-center gap-y-2 my-2">
          <span className="text-xs text-white opacity-80 ">
            تصل إلى<b> 300 مشترك</b>
          </span>
          <span className="text-xs text-white opacity-80 ">
            <b>مع 1 تطبيق</b> للموظفين
          </span>
        </div>
        <Line />

        {/*  package scoop*/}
        <div className="flex flex-col p-2 ">
          <span className="font-bold text-white text-lg">الميزات</span>

          <div className="flex flex-row items-center gap-x-2 m-2">
            <CheckCircleIcon className="h-4 w-4 text-white" />
            <span className="text-xs text-white ">
              يتضمن كل ميزات إشتراكات
            </span>
          </div>
          <div className="flex flex-row items-center gap-x-2 m-2">
            <CheckCircleIcon className="h-4 w-4 text-white" />
            <span className="text-xs text-white ">
              دعم فني متميز على مدار 24 ساعة
            </span>
          </div>
        </div>

        <Line />

        {/* featuers2 */}
        <div className="flex flex-col p-2 ">
          {plans[1].featuresPluse.map((feat , index) => (
            <div key={index} className="flex flex-row items-center gap-x-2 m-2">
              <PlusCircleIcon className="h-4 w-4 text-white" />
              <span className="text-xs text-white ">{feat}</span>
            </div>
          ))}
        </div>

        <Line />

        {/* button */}
        <div className=" flex justify-center items-center mt-6 ">
          <button className=" flex h-8 justify-center items-center rounded-[24px] px-6  font-medium border-[1px]  shadow-md text-white p-2 text-xs shadow-neutral-500 bg-[#0C5678]  ">
            تقدم بطلبك الآن
          </button>
        </div>
      </div>

      {/* card 3 */}
      <div className="w-[250px] h-[450px] flex flex-col  rounded-lg shadow-md shadow-neutral-500  border-2 border-[#F6FBFE] ">
        {/* title and price */}
        <div className="flex flex-col justify-center items-center p-4  gap-y-2">
          <span className="text-[#052533] font-bold">{plans[2].name}</span>
          <span className="text-[#F29912] font-bold text-2xl">
          ${activeButton=== "3 اشهر"? plans[2].priceQuarterly : plans[2].priceAnnually }
          </span>
          <span className="text-[#052533] text-xs opacity-70">
            ${plans[2].priceMonthly} شهريا
          </span>
        </div>

        <Line />

        <div className="flex flex-col justify-center items-center gap-y-2 my-2">
          <span className="text-xs opacity-80 ">عدد مشتركين غير محدود</span>
          <span className="text-xs opacity-80 ">عدد تطبيقات غير محدود</span>
        </div>
        <Line />

        {/*  package scoop*/}
        <div className="flex flex-col p-2 ">
          <span className="font-bold  text-[#052533] text-lg">الميزات</span>

          <div className="flex flex-row items-center gap-x-2 m-2">
            <CheckCircleIcon className="h-4 w-4 text-[#052533]" />
            <span className="text-xs text-[#052533] ">
              يتضمن كل ميزات إشتراكات
            </span>
          </div>
          <div className="flex flex-row items-center gap-x-2 m-2">
            <CheckCircleIcon className="h-4 w-4 text-[#052533]" />
            <span className="text-xs text-[#052533] ">
              دعم فني متميز على مدار 24 ساعة
            </span>
          </div>
        </div>

        <Line />

        {/* featuers2 */}
        <div className="flex flex-col p-2 ">
          {plans[2].featuresPluse.map((feat, index) => (
            <div key={index} className="flex flex-row items-center gap-x-2 m-2">
              <PlusCircleIcon className="h-4 w-4 text-[#052533]" />
              <span className="text-xs text-[#052533] ">{feat}</span>
            </div>
          ))}
        </div>

        <Line />

        {/* button */}
        <div className=" flex justify-center items-center mt-6 ">
          <button className=" flex h-8 justify-center items-center rounded-[24px] px-6  font-medium  shadow-md text-white p-2 text-xs shadow-neutral-500 bg-[#0C5678]  ">
            تقدم بطلبك الآن
          </button>
        </div>
      </div>
    </main>
  );
};

export default Card;
