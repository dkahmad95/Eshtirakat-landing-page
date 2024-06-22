"use client";

import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faStar as faStarEmpty,
} from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface Testimonial {
  id: number;
  profilePic: string;
  name: string;
  occupation: string;
  testimonial: string;
  starRating: number;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      profilePic: "/pp.jpg",
      name: "يوسف الجمال",
      occupation: "المالك لاشتراكات هادي",
      testimonial:
        "اكتشفت أن 'إشتراكات' هو حلاً بسيطًا وفعّالًا لإدارة الاشتراكات. يوفر لي الوقت والراحة في تنظيم وتتبع الدفوعات والمدفوعات. واجهة المستخدم سهلة الاستخدام ومفصلة، مما يجعل التفاعل مع البيانات أمرًا سلسًا.",
      starRating: 5,
    },
    {
      id: 2,
      profilePic: "/pp.jpg",
      name: "سارة أحمد",
      occupation: "مديرة مشاريع",
      testimonial:
        "منصة 'إشتراكات' ساعدتني في توفير الكثير من الوقت في إدارة اشتراكاتنا. أداتهم رائعة وسهلة الاستخدام وتوفر تقارير دقيقة.",
      starRating: 4.5,
    },
    {
      id: 3,
      profilePic: "/pp.jpg",
      name: "علي محمد",
      occupation: "رائد أعمال",
      testimonial:
        "تجربتي مع 'إشتراكات' كانت ممتازة. التطبيق يوفر لي كل ما أحتاجه لتنظيم مدفوعاتي والاشتراكات الشهرية بشكل فعال.",
      starRating: 5,
    },
    {
      id: 4,
      profilePic: "/pp.jpg",
      name: "نورة السالم",
      occupation: "محاسبة",
      testimonial:
        "بفضل 'إشتراكات' تمكنت من تنظيم وإدارة جميع اشتراكاتنا بسهولة. الواجهة بسيطة وسهلة الفهم، والتقارير دقيقة ومفصلة.",
      starRating: 3,
    },
    {
      id: 5,
      profilePic: "/pp.jpg",
      name: "خالد عبد الله",
      occupation: "مدير تسويق",
      testimonial:
        "خدمة 'إشتراكات' غيرت طريقتي في إدارة المدفوعات الشهرية. التطبيق ممتاز وسهل الاستخدام ويوفر الكثير من الوقت.",
      starRating: 3.5,
    },
  ];
  
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    return (
      <>
         {halfStar && (
          <FontAwesomeIcon
            key="half"
            icon={faStarHalfAlt}
            className="text-[#FADB14] h-[32px] w-[32px]"
          />
        )}
        {[...Array(fullStars)].map((_, index) => (
          <FontAwesomeIcon
            key={`full-${index}`}
            icon={faStar}
            className="text-[#FADB14] h-[32px] w-[32px]"
          />
        ))}
       
       
      </>
    );
  };

  return (
    <main className="flex flex-col w-full items-center">
      {/* title */}
      <div className="flex flex-col justify-center items-center gap-y-10 mt-12 ">
        <div className="flex flex-col items-center justify-center gap-y-4">
          <h1 className="text-2xl md:text-5xl font-bold mt-2">
            قصص نجاح <span className="text-[#F29912]">عملائنا</span>
          </h1>
          <h3 className="text-sm text-center opacity-70 text-[#052533] w-3/4">
            استمع إلى تجارب وشهادات عملائنا الرائعين واكتشف كيف ساهمت خدماتنا في
            جعلهم سعداء وراضين.
          </h3>
        </div>
      </div>

      {/* clients */}
      <div className="w-full">
        <Swiper
          className="h-[600px]"
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{ clickable: true  }}
        >
          {testimonials.map((testi) => (
            <SwiperSlide key={testi.id}>
              <div className=" w-full mt-8 flex  items-center flex-col gap-y-8">
                {/* image */}
                <Image
                  src={testi.profilePic}
                  alt="client photo"
                  width={220}
                  height={220}
                  className="rounded-full h-[160px] w-[160px] md:h-[220px] md:w-[220px] object-cover"
                />
                {/* name and occupation */}
                <div className="flex flex-col items-center justify-center">
                  <span className="text-sm font-bold">{testi.name}</span>
                  <span className="text-xs font-bold opacity-50">
                    {testi.occupation}
                  </span>
                </div>
                {/* testimonial */}
                <span className="text-xs opacity-70 text-center w-3/4 min-h-[126px]">
                  {testi.testimonial}
                </span>

                {/* rating stars */}
                <div className="flex gap-x-1 min-w-[208px] justify-center items-center">
                  {renderStars(testi.starRating)}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
};

export default Testimonials;
