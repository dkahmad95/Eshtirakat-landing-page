import React from "react";
import QuestionList from "../UI/faq/QuestionList";

const FAQ = () => {
  return (
    <main className=" w-full h-full flex justify-center  items-center">
      <div className="w-3/4  flex-col flex md:flex-row p-4">
        {/* title */}
        <div className="flex-1 flex-col p-2  gap-y-8">
          <h1 className="text-2xl md:text-3xl font-bold mt-2">أسئلة مكررة</h1>
          <span className="text-sm md:text-lg  opacity-70 w-3/4 text-[#052533]">
            مرحبًا بك في قسم الاسئلة المتكررة. هنا يمكنك العثور على إجابات
            لأسئلتك الشائعة، والحصول على المساعدة والدعم اللازم لاستخدام نظام
            'إشتراكات'.
          </span>
        </div>

        
        <div className="flex-1 ">
          {/* question sec */}
          <div className=" mt-12 md:mt-2 ">
            <QuestionList />
          </div>
        
        </div>
      </div>
    </main>
  );
};

export default FAQ;
