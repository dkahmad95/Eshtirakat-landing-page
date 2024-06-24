'use client'
import Image from "next/image";

import { animateScroll } from 'react-scroll';
import React from "react";
import Line from "../UI/Line";
import {} from "@heroicons/react/16/solid";
import Socials from "../UI/Socials";
import { Link } from "react-scroll";

const Footer = () => {
  const links = [
    {
      title: "الرئيسية",
      subtitles: [
        { title: "مميزات البرنامج", link: "#" },
        { title: "لماذا نحن", link: "#our-story" },
      ],
    },
    {
      title: "حولنا",
      subtitles: [
        { title: "في كل لبنان", link: "#all-lebanon" },
        { title: "قصتنا ورؤيتنا", link: "#our-story" },
      ],
    },
    {
      title: "الاسعار",
      subtitles: [
        { title: "الخطط والاسعار", link: "#all-lebanon" },
        { title: "التوفير عبر السنة", link: "#our-story" },
      ],
    },
    {
      title: "دعم العملاء",
      subtitles: [
        { title: "اتصل بنا الآن", link: "#all-lebanon" },
        { title: "الاسئلة المتكررة ", link: "#our-story" },
      ],
    },
    {
      title: "تواصل مع المبيعات",
      subtitles: [
        { title: "مكالمة هاتفية مباشرة", link: "#all-lebanon" },
        { title: " ارسال بريد إلكتروني", link: "#our-story" },
      ],
    },
  ];

  const links2 = [
    {
      title: "تسجيل الدخول",
      link: "#login",
    },
    {
      title: "تحميل التطبيق",
      link: "#download-app",
    },
    {
      title: "طلب تجريـبي ",
      link: "#request-app",
    },
  ];


  const scrollOptions = {
    // your options here, for example:
    duration: 500,
    smooth: true,
  };
  return (
    <footer className=" w-full bg-[#0C5678] flex flex-col justify-center items-center ">
      {/* footer container */}
      <div className="w-3/4 h-full  flex flex-col p-2 gap-y-2 ">
        {/* link to top */}
       
        <span onClick={()=>animateScroll.scrollToTop(scrollOptions)} className=" w-full justify-left underline text-white text-xs cursor-pointer ">
          العودة إلى الأعلى
        </span>
        <div className="flex flex-row justify-between  ">
          {/* 1st */}
          <div className="flex flex-col ">
            <Image
              src="/enLogo.png"
              alt="english logo"
              width={150}
              height={150}
              className="object-contain mt-2"
              sizes="(max-width: 768px) 100vw, 33vw"
            />

            <span
              dir="ltr"
              className=" text-white text-xs text-right  mt-4 opacity-70"
            >
              +961 70 777 888
            </span>
            <span className=" text-white text-xs opacity-70 ">
              info@eshtirakat.co
            </span>
            {/*  */}
            <div className="md:hidden  flex flex-col items-center gap-2 mt-8 ">
              {links2.map((link2, index) => (
                <span className=" text-white text-s underline text-start w-full">
                  {link2.title}
                </span>
              ))}
            </div>
          </div>
          {/* 2nd */}
          <div className="flex flex-row md:flex-col flex-wrap md:w-1/2 w-full md:h-[200px]  mx-4 ">
            {links.map((link, index) => (
              <div key={index} className="flex flex-col p-2 ">
                {/* title */}
                <span className=" text-white md:text-s text-xs">
                  {link.title}
                </span>
                {/* links */}
                <span className=" text-white text-xs  opacity-70  mt-2">
                  {link.subtitles[0].title}
                </span>
                <span className=" text-white text-xs opacity-70 mt-[4px]">
                  {link.subtitles[1].title}
                </span>
              </div>
            ))}
          </div>
          {/* 3rd */}
          <div className=" hidden md:flex flex-col items-center gap-2 ">
            {links2.map((link2, index) => (
              <span className=" text-white text-s underline ">
                {link2.title}
              </span>
            ))}
          </div>
        </div>
        <Line />
        {/* bottom */}
        <div className=" flex md:flex-row flex-col md:justify-between items-center justify-center">
          <span className="text-white text-xs opacity-70">
            {" "}
            2024 All Rights Reserved ©️
          </span>

          <div
            dir="ltr"
            className="flex flex-row gap-x-2 justify-center items-center"
          >
            {" "}
            <span className="text-white text-xs opacity-70">Follow us:</span>
            <Socials
              containerStyles="flex flex-row items-center justify-center gap-x-1"
              iconsStyles="text-white text-xs"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
