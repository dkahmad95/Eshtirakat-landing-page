"use client";
import Image from "next/image";

import { animateScroll } from "react-scroll";
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
        { title: "مميزات البرنامج", link: "home" },
        { title: "لماذا نحن", link: "home" },
      ],
    },
    {
      title: "حولنا",
      subtitles: [
        { title: "في كل لبنان", link: "about" },
        { title: "قصتنا ورؤيتنا", link: "about" },
      ],
    },
    {
      title: "الاسعار",
      subtitles: [
        { title: "الخطط والاسعار", link: "pricing" },
        { title: "التوفير عبر السنة", link: "pricing" },
      ],
    },
    {
      title: "دعم العملاء",
      subtitles: [
        { title: "اتصل بنا الآن", link: "support" },
        { title: "الاسئلة المتكررة ", link: "support" },
      ],
    },
    {
      title: "تواصل مع المبيعات",
      subtitles: [
        { title: "مكالمة هاتفية مباشرة", link: "contact" },
        { title: " ارسال بريد إلكتروني", link: "contact" },
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
      <div className="md:w-3/4 mx-8 md:mx-0 h-full  flex flex-col p-2 gap-y-2 ">
        {/* link to top */}
        <span
          onClick={() => animateScroll.scrollToTop(scrollOptions)}
          className=" w-full justify-left underline text-white text-xs cursor-pointer "
        >
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
            {/* mobile view */}
            <div className="md:hidden  flex flex-col items-center gap-2 mt-8 ">
              {links2.map((link2, index) => (
                <span key={index} className=" text-white text-s whitespace-nowrap underline text-start w-full cursor-pointer">
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
                <Link
                  activeClass="active"
                  key={link.subtitles[0].link}
                  to={link.subtitles[0].link}
                  smooth={true}
                  duration={500}
                >
                  <span className=" text-white text-xs  opacity-70  mt-2 cursor-pointer">
                    {link.subtitles[0].title}
                  </span>
                </Link>
                <Link
                  activeClass="active"
                  key={link.subtitles[1].link}
                  to={link.subtitles[1].link}
                  smooth={true}
                  duration={500}
                >
                  <span className=" text-white text-xs opacity-70 mt-[4px] cursor-pointer">
                    {link.subtitles[1].title}
                  </span>
                </Link>
              </div>
            ))}
          </div>
          {/* 3rd */}
          <div className=" hidden md:flex flex-col items-center gap-2 ">
            {links2.map((link2, index) => (
              <span key={index} className=" text-white text-s underline  cursor-pointer ">
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
