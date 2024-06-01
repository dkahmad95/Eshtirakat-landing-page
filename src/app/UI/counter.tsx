'use client'

import CountUp from "react-countup";

interface BadgeProps {
    containerStyles?: string;
    endCountNum: number;
    endCountText?: string;
    badgeText?: string;
  }
  
  const Badge: React.FC<BadgeProps> = ({ containerStyles, endCountNum, endCountText, badgeText }) => {
    return (
    <div className={`${containerStyles}`} >
      <div className="flex flex-col items-center gap-y-4">
        <div className="text-2xl leading-none font-bold text-[#F6FBFE] ">
          <CountUp end={endCountNum} delay={1} duration={4} />
          {endCountText}
        
        </div>
        <div className="max-w-[70px] leading-none text-[15px] font-medium text-white">
          {badgeText}
        </div>
      </div>
    </div>
  )
}

export default Badge