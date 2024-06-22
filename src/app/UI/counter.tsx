'use client'

import React, { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface BadgeProps {
  containerStyles?: string;
  endCountNum: number;
  endCountText?: string;
  badgeText?: string;
}

const Badge: React.FC<BadgeProps> = ({ containerStyles, endCountNum, endCountText, badgeText }) => {
  const [countUpStart, setCountUpStart] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView) {
        setCountUpStart(true);
      }
    }
  });

  return (
    <div className={`${containerStyles}`} ref={ref}>
      <div className="flex flex-col items-center gap-y-4">
        <div className="text-2xl leading-none font-bold text-[#F6FBFE]">
          {countUpStart && <CountUp end={endCountNum} delay={0} duration={4} />}
          {endCountText}
        </div>
        <div className="max-w-[70px] leading-none text-[15px] font-medium text-white">
          {badgeText}
        </div>
      </div>
    </div>
  );
};

export default Badge;
