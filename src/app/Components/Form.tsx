import Image from "next/image";
import React from "react";
import ContactForm from "../UI/form/ContactForm";

const Form = () => {
  return (
    <main className=" w-full h-full flex justify-center  items-center">
      <div className="w-3/4 flex justify-center items-center shadow-md shadow-neutral-500  border-2 border-[#F6FBFE] rounded-xl">
        {/* form */}
        <div className="flex-1 flex justify-center items-center">
          <ContactForm />
        </div>
        {/* image */}

        <Image
          src="/contactimg.png"
          alt="contact"
          width={400}
          height={500}
          className=" hidden flex-1 lg:flex h-full object-fill   "
        />
      </div>
    </main>
  );
};

export default Form;
