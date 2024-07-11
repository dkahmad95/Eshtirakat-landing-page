import React from "react";
import CustomSelect from "../Select";
import CustomInput from "../Input";
import { Input } from "antd";
import { CheckCircleIcon } from "@heroicons/react/16/solid";
import { useFormik } from "formik";
import * as Yup from "yup";

const { TextArea } = Input;

interface FormValues {
  fullName: string;
  phoneNumber: string;
  companyName: string;
  region: string;
  subscriptionSize: string;
  howDidYouHear: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const selectOptions = [
    { value: "jack", label: "Jack" },
    { value: "lucy", label: "Lucy" },
    { value: "Yiminghe", label: "Yiminghe" },
    { value: "disabled", label: "Disabled", disabled: true },
  ];

  const formik = useFormik<FormValues>({
    initialValues: {
      fullName: "",
      phoneNumber: "",
      companyName: "",
      region: "بيروت",
      subscriptionSize: "صغير (تحت 300)",
      howDidYouHear: "من صديق",
      message: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("الاسم الكامل مطلوب"),
      phoneNumber: Yup.string().required("رقم الهاتف مطلوب"),
      companyName: Yup.string().required("اسم المؤسسة مطلوب"),
      region: Yup.string().required("منطقة مطلوب"),
      subscriptionSize: Yup.string().required("حجم الاشتراك مطلوب"),
      howDidYouHear: Yup.string().required("هذه الخانة مطلوبة"),
      message: Yup.string(),
    }),
    onSubmit: (values) => {
      console.log(values);
      // Handle form submission
    },
  });

  return (
    <main className="h-full w-full flex flex-col items-center gap-y-2">
      {/* title */}
      <div className="flex flex-col items-center justify-center gap-y-2">
        <h1 className="text-lg md:text-xl font-bold mt-2 md:text-start">
          تواصل مع فريق المبيعات
        </h1>
        <span className="text-xs md:text-sm w-3/4 text-center text-[#052533] opacity-70">
          هل أنت مهتم بمعرفة المزيد عن 'إشتراكات'؟ فريق المبيعات لدينا جاهز
          للإجابة على كل استفساراتك وتقديم عرض توضيحي شامل لنظامنا.
        </span>
      </div>

      {/* form */}
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col w-full justify-center items-center gap-y-2 p-6"
      >
        <div className="flex flex-col md:flex-row justify-center items-center w-full">
          {/* right sec */}
          <div className="flex flex-col w-full">
            <div className="flex flex-col p-2 gap-y-2">
              <label  className="text-xs md:text-sm  lg:text-lg"  htmlFor="fullName">الاسم الكامل*</label>
              <CustomInput
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="ادخل اسمك الكامل"
                value={formik.values.fullName}
                name="fullName"
              />
              {formik.touched.fullName && formik.errors.fullName ? (
                <div className="text-red-500 text-xs">{formik.errors.fullName}</div>
              ) : null}
            </div>
            <div className="flex flex-col p-2 gap-y-2">
              <label  className="text-xs md:text-sm  lg:text-lg" htmlFor="phoneNumber">رقم الهاتف* </label>
              <CustomInput
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="ادخل رقم هاتفك"
                value={formik.values.phoneNumber}
                name="phoneNumber"
              />
              {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                <div className="text-red-500 text-xs">{formik.errors.phoneNumber}</div>
              ) : null}
            </div>
            <div className="flex flex-col p-2 gap-y-2">
              <label  className="text-xs md:text-sm  lg:text-lg" htmlFor="companyName">اسم المؤسسة* </label>
              <CustomInput
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="ادخل اسم مؤسستك"
                value={formik.values.companyName}
                name="companyName"
              />
              {formik.touched.companyName && formik.errors.companyName ? (
                <div className="text-red-500 text-xs">{formik.errors.companyName}</div>
              ) : null}
            </div>
          </div>

          {/* left sec */}
          <div className="flex flex-col w-full">
            <div className="flex flex-col p-2 gap-y-2">
              <label  className="text-xs md:text-sm  lg:text-lg" htmlFor="region">من منطقة* </label>
              <CustomSelect
                id="region"
                name="region"
                value={formik.values.region}
                defaultValue="بيروت"
                options={selectOptions}
                onChange={(name, value) => formik.setFieldValue(name, value)}
                onBlur={(name, e) => formik.handleBlur(e)}
              />
              {formik.touched.region && formik.errors.region ? (
                <div className="text-red-500 text-xs">{formik.errors.region}</div>
              ) : null}
            </div>
            <div className="flex flex-col p-2 gap-y-2">
              <label  className="text-xs md:text-sm  lg:text-lg" htmlFor="subscriptionSize">حجم إشتراكاتك* </label>
              <CustomSelect
                id="subscriptionSize"
                name="subscriptionSize"
                value={formik.values.subscriptionSize}
                defaultValue="صغير (تحت 300)"
                options={selectOptions}
                onChange={(name, value) => formik.setFieldValue(name, value)}
                onBlur={(name, e) => formik.handleBlur(e)}
              />
              {formik.touched.subscriptionSize && formik.errors.subscriptionSize ? (
                <div className="text-red-500 text-xs">{formik.errors.subscriptionSize}</div>
              ) : null}
            </div>
            <div className="flex flex-col p-2 gap-y-2">
              <label  className="text-xs md:text-sm  lg:text-lg" htmlFor="howDidYouHear">كيف تعرفت علينا؟ </label>
              <CustomSelect
                id="howDidYouHear"
                name="howDidYouHear"
                value={formik.values.howDidYouHear}
                defaultValue="من صديق"
                options={selectOptions}
                onChange={(name, value) => formik.setFieldValue(name, value)}
                onBlur={(name, e) => formik.handleBlur(e)}
              />
              {formik.touched.howDidYouHear && formik.errors.howDidYouHear ? (
                <div className="text-red-500 text-xs">{formik.errors.howDidYouHear}</div>
              ) : null}
            </div>
          </div>
        </div>
        {/* bottom sec */}
        <div className="w-full">
          {/* textarea */}
          <div className="flex flex-col gap-y-2 w-full">
            <label  className="text-xs md:text-sm  lg:text-lg" htmlFor="message">كيف تعرفت علينا؟ </label>
            <TextArea
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              name="message"
              allowClear
            />
            {formik.touched.message && formik.errors.message ? (
              <div className="text-red-500 text-xs">{formik.errors.message}</div>
            ) : null}
          </div>
        </div>
        {/* button */}
        <button
          type="submit"
          className="w-full bg-[#0C5678] h-[40px] flex flex-row justify-center items-center rounded-xl gap-x-4"
        >
          <CheckCircleIcon className="h-4 w-4 text-white" />
          <span className="text-white">إرسال الطلب للمبيعات</span>
        </button>
      </form>
    </main>
  );
};

export default ContactForm;
