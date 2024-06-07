import React from 'react';

interface AboutInfoCardProps {
  title: string;
  content: string;
  svg: string;
}

const AboutInfoCard: React.FC<AboutInfoCardProps> = ({ title, content, svg }) => {
  return (
    <div className="flex flex-col justify-center items-center  gap-6 p-4">
      <div dangerouslySetInnerHTML={{ __html: svg }} className="w-8  h-8 text-white text-center" />
      <div className="text-[#F6FBFE] text-lg text-center font-bold">{title}</div>
      <p className="text-[#F6FBFE] text-xs text-center   ">{content}</p>
    </div>
  );
};

export default AboutInfoCard;
