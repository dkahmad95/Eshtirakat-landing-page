import React from "react";
import AboutInfoCard from "../UI/about/AboutInfoCard";

const About = () => {
  const aboutInfos = [
    {
      id: 1,
      title: "فرصة للانضمام إلى رحلة التغيير",
      content:
        "ندعوك لتكون جزءًا من مسعانا نحو عالم أكثر كفاءة في إدارة الطاقة. سواء كنت عميلاً يبحث عن حلول موثوقة أو محترفًا يرغب في الانضمام إلى فريقنا، فإن 'إشتراكات' تفتح أبوابها لك.",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-globe"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10A15.3 15.3 0 0 1 8 12a15.3 15.3 0 0 1 4-10z"></path></svg>`,
    },
    {
      id: 2,
      title: "تجربة متفوقة في إدارة الاشتراكات",
      content:
        "في 'إشتراكات'، نقدم تجربة متفوقة لإدارة اشتراكات الطاقة. فريقنا من الخبراء ملتزم بتقديم أفضل الحلول التي تتسم بالدقة والكفاءة. نحن نعمل جاهدين لضمان توفير خدمات مبتكرة تسهل عليكم إدارة اشتراكاتكم وتحقق أقصى استفادة من الطاقة المستخدمة.",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bar-chart-2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`,
    },
    {
      id: 3,
      title: "التزامنا بالجودة والابتكار",
      content:
        "في 'إشتراكات'، يعتبر التزامنا بتقديم خدمات عالية الجودة وموثوقة أساس عملنا. نحن نحرص على دفع عجلة الابتكار وتحسين خدماتنا باستمرار لتلبية وتجاوز توقعات عملائنا.",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-award"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7.21 18 12 15.9 16.79 18 15.79 13.89"></polyline><polyline points="6 2 12 0 18 2"></polyline></svg>`,
    },
  ];

  return (
    <main className=" w-full h-full flex justify-center items-center">
      <div className="w-3/4 min-h-3/4 flex flex-col justify-center items-center gap-y-6 mt-[85px] ">
        {/* title and button */}
        <div className="flex flex-col justify-center items-center gap-y-8">
          <h1 className="text-2xl md:text-5xl font-bold mt-2">
            قصتنا في
            <span className="text-[#F29912]"> "إشتراكات"</span>
          </h1>
          <span className="text-sm md:text-lg  text-center opacity-70 w-full text-[#052533]">
            تأسست 'إشتراكات' من رؤية لتبسيط عمليات الفوترة وإدارة الاشتراكات
            الكهربائية. بدأنا كفريق صغير من المهندسين والمطورين الطموحين،
            وتطورنا لنصبح روادًا في هذا المجال، مقدمين حلولاً تقنية متقدمة
            ومبتكرة{" "}
          </span>

          <button className="w-[120px] md:w-[200px] h-[40px] md:h-[50px] bg-[#F29912] text-[#F6FBFE] rounded-xl">
            إنضم إلينا
          </button>
        </div>
        {/* info blocks */}
        <div className="bg-[#0C5678] flex flex-col md:flex-row   justify-center items-center w-full h-full rounded-xl gap-8 p-4">
          {aboutInfos.map((info) => (
            <div
              key={info.id}
              className={`${
                info.id === 2
                  ? " border-y-2 md:border-y-0 md:border-x-2 border-white border-dashed border-opacity-50"
                  : ""
              }`}
            >
              <AboutInfoCard
                key={info.id}
                title={info.title}
                content={info.content}
                svg={info.svg}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default About;
