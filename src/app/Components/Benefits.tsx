import React from "react";

const Benefits = () => {
  const benefits = [
    {
      id: 1,
      icon: "⏳",
      title: "توفير الوقت",
      description:
        "باستخدام 'إشتراكات'، يمكنك توفير 70% من وقتك في إدارة الاشتراكات بفضل تصميم متقدم وواجهة مستخدم سهلة الاستخدام، مما يعزز كفاءة عملياتك.",
    },
    {
      id: 2,
      icon: "💰",
      title: "زيادة الإيرادات",
      description:
        "مع 'إشتراكات'، يمكنك تحقيق زيادة تصل إلى 30% في الإيرادات بفضل التحليل المتقدم وتتبع الأداء المالي الدقيق، مما يساعدك على اتخاذ قرارات استراتيجية فعالة.",
    },
    {
      id: 3,
      icon: "😊",
      title: "عملاء سعداء",
      description:
        "'إشتراكات' تفتخر بأن لديها 90% من العملاء السعداء بفضل خدماتها المتميزة والدعم الفني المستمر، مما يعزز من رضا العملاء وتجربتهم الإيجابية.",
    },
  ];

  return (
    <main className="flex flex-col justify-center items-center gap-y-10 bg-[#F6FBFE] p-10">
      {/* title */}
      <div className="flex justify-center flex-col items-center gap-y-5">
        {/* maintitle */}
        <h1 className="text-2xl md:text-3xl font-bold mt-2 text-center">
          ما الذي يمكنك أن تحصل عليه من
          <span className="text-[#F29912]"> إشتراكات</span>
        </h1>
        {/* subtitle */}
        <div className=" text-sm md:text-lg  w-1/2 text-center text-[#052533] opacity-70">
          ببساطة، 'إشتراكات' هي المنصة المثالية لكل من يبحث عن سهولة وكفاءة في
          إدارة الاشتراكات. مع تصميم متقدم وواجهة مستخدم سهلة الاستخدام، نحن
          نجعل عملية إدارة وتحليل اشتراكاتك أمرًا سلسًا ومباشرًا. سواء كنت تدير
          اشتراكات فردية أو على مستوى المؤسسة، فإن 'إشتراكات' تساعدك على التركيز
          في نمو عملك وتعزيز تجربة عملائك بفعالية.
        </div>
      </div>
      <div className="flex flex-col md:flex-row  items-center justify-center w-3/4 gap-5">
        {benefits.map((benefit) => (
          <div
            key={benefit.id}
            className="md:min-h-[220px] md:max-w-[366px] border-2 rounded-md border-[#C4C7C8] bg-white"
          >
            <div className="flex flex-row justify-start m-4">
              <div>{benefit.icon}</div>
              <div className="mr-4 text-xl font-bold">{benefit.title}</div>
            </div>
            <div className="flex text-sm md:text-lg m-4 text-[#052533] opacity-70">
              {benefit.description}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Benefits;
