import Image from "next/image";
import React from "react";

const Form = () => {
  return (
    <main className=" w-full h-full flex justify-center  items-center">
      <div className="w-3/4 flex justify-center items-center border-green-800 border-2">
        {/* form */}
        <div className="flex-1 border-2 border-red-700 flex justify-center items-center">form</div>
        {/* image */}

        <Image
          src="/contactimg.png"
          alt="contact"
          width={400}
          height={500}
          className=" flex-1 h-[560px] w-[440px] object-fill "
        />
      </div>
    </main>
  );
};

export default Form;
