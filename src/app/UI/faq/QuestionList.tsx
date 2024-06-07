import React, { useState } from "react";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/16/solid";

interface Question {
  id: number;
  question: string;
  answer: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "كيف يمكنني الاشتراك في إشتراكات؟",
    answer: "للاشتراك في إشتراكات، قم بزيارة موقعنا عبر الإنترنت وانقر على زر \"الاشتراك\". اتبع الخطوات البسيطة لإعداد حسابك واختيار خطة الاشتراك التي تناسب احتياجاتك. إذا واجهتك أي مشكلة، فإن فريق الدعم لدينا هنا لمساعدتك."
  },
  {
    id: 2,
    question: "ما هي طرق الدفع المتاحة؟",
    answer: "نحن نقبل جميع بطاقات الائتمان الرئيسية، بالإضافة إلى طرق الدفع عبر الإنترنت مثل PayPal وApple Pay."
  },
  {
    id: 3,
    question: "هل يمكنني تغيير خطة الاشتراك الخاصة بي؟",
    answer: "نعم، يمكنك تغيير خطة الاشتراك الخاصة بك في أي وقت من خلال حسابك على الموقع. اختر الخطة التي تناسب احتياجاتك."
  },
  {
    id: 4,
    question: "كيف يمكنني إلغاء اشتراكي؟",
    answer: "لإلغاء اشتراكك، قم بتسجيل الدخول إلى حسابك وانتقل إلى قسم الاشتراكات. من هناك، يمكنك إلغاء الاشتراك بسهولة."
  },
  {
    id: 5,
    question: "هل يمكنني الحصول على فترة تجريبية مجانية؟",
    answer: "نعم، نحن نقدم فترة تجريبية مجانية لمدة 7 أيام لجميع المشتركين الجدد. يمكنك البدء بالتجربة المجانية عبر التسجيل في موقعنا."
  },
  {
    id: 6,
    question: "كيف يمكنني استعادة كلمة المرور الخاصة بي؟",
    answer: "إذا نسيت كلمة المرور الخاصة بك، يمكنك استعادتها عبر النقر على رابط \"نسيت كلمة المرور\" في صفحة تسجيل الدخول واتباع التعليمات."
  },
  {
    id: 7,
    question: "ما هي سياسة استرداد الأموال؟",
    answer: "نحن نقدم سياسة استرداد أموال لمدة 30 يومًا. إذا لم تكن راضيًا عن الخدمة، يمكنك طلب استرداد أموالك في غضون 30 يومًا من تاريخ الاشتراك."
  },
  {
    id: 8,
    question: "كيف يمكنني التواصل مع دعم العملاء؟",
    answer: "يمكنك التواصل مع دعم العملاء عبر البريد الإلكتروني أو الهاتف. تتوفر تفاصيل الاتصال في صفحة \"اتصل بنا\" على موقعنا."
  },
  {
    id: 9,
    question: "هل معلوماتي الشخصية آمنة؟",
    answer: "نعم، نحن نلتزم بأعلى معايير الأمان لحماية معلوماتك الشخصية. يتم تشفير جميع البيانات الحساسة وتأمينها بشكل كامل."
  },
  {
    id: 10,
    question: "هل هناك تطبيق للهواتف المحمولة؟",
    answer: "نعم، لدينا تطبيق متاح للهواتف المحمولة على كل من iOS وAndroid. يمكنك تنزيل التطبيق من متجر التطبيقات الخاص بجهازك."
  }
];

const QuestionList: React.FC = () => {
  const [visibleAnswers, setVisibleAnswers] = useState<{ [key: number]: boolean }>({ 1: true  });
  const [showAll, setShowAll] = useState(false);

  const toggleAnswerVisibility = (id: number) => {
    setVisibleAnswers((prevVisibleAnswers) => ({
      ...prevVisibleAnswers,
      [id]: !prevVisibleAnswers[id],
    }));
  };

  const handleShowAll = () => {
    setShowAll(true);
  };

  const handleShowLess = () => {
    setShowAll(false);
  };

  const displayedQuestions = showAll ? questions : questions.slice(0, 3);

  return (
    <main className="flex flex-col  items-center gap-y-4">
      {displayedQuestions.map(({ id, question, answer }) => (
        <div key={id} className={`flex flex-col justify-center shadow-md shadow-gray-400 p-4 gap-y-4 w-full ${visibleAnswers[id] ? 'bg-white' : 'bg-[#F2F4F5]'}`}>
          <div className="flex flex-row justify-between items-center">
            <span className="text-lg font-bold text-[#052533]">
              {question}
            </span>
            {visibleAnswers[id] ? (
              <MinusCircleIcon
                className="h-4 w-4 text-[#052533] cursor-pointer"
                onClick={() => toggleAnswerVisibility(id)}
              />
            ) : (
              <PlusCircleIcon
                className="h-4 w-4 text-[#052533] cursor-pointer"
                onClick={() => toggleAnswerVisibility(id)}
              />
            )}
          </div>
          
          {visibleAnswers[id] && (
            <p className="text-sm text-[#052533]"> {answer} </p>
          )}
        </div>
      ))}
      {!showAll ? (
        <button onClick={handleShowAll} className="mt-4 text-xs text-[#052533] underline w-full text-end">
          عرض المزيد
        </button>
      ) : (
        <button onClick={handleShowLess} className="mt-4 text-xs text-[#052533] underline w-full text-end">
          عرض أقل
        </button>
      )}
    </main>
  );
};

export default QuestionList;
