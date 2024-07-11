import Image from "next/image";
import React from "react";

const partnersData = [
  { src: "/partnersIcons/carpicron.png", alt: "partner Icon carpicron" },
  { src: "/partnersIcons/coral.png", alt: "partner Icon coral" },
  { src: "/partnersIcons/enoc.png", alt: "partner Icon enoc" },
  { src: "/partnersIcons/ipt.png", alt: "partner Icon ipt" },
  { src: "/partnersIcons/petroluim.png", alt: "partner Icon petroluim" },
];

const Partners = () => {
  return (
    <main className="flex flex-col items-center w-full h-auto gap-y-10 p-6">
      <div>
        {/* title */}
        <span className="flex text-lg text-[#052533] text-center ">
          شركاؤنا الاوائل في عالم المحروقات والكهربائيات
        </span>
      </div>
      {/* line */}
      <div className="w-full flex justify-center">
        <div className="h-[2px] w-3/4 bg-gray-300 bg-opacity-25 md:w-1/2 lg:w-1/3"></div>
      </div>
      {/* icons */}
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 w-full">
        {partnersData.map((partner, index) => (
          <div key={index} className="relative w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32">
            <Image
              src={partner.src}
              alt={partner.alt}
              fill
             className="object-contain"
             sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        ))}
      </div>
      {/* line */}
      <div className="w-full flex justify-center">
        <div className="h-[2px] w-3/4 bg-gray-300 bg-opacity-25 md:w-1/2 lg:w-1/3"></div>
      </div>
    </main>
  );
};

export default Partners;
