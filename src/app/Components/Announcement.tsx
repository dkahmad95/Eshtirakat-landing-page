import React from "react";

const Announcement = () => {
  return (
    <div className="h-[15px] w-full bg-white flex justify-center items-center">
      <span className="text-[8px] md:text-xs text-center text-red-800 font-bold">
        جميع البيانات على هذا الموقع هي بيانات تجريبية للاستخدام في التطوير
        وليست بيانات حقيقية!!
      </span>
    </div>
  );
};

export default Announcement;
