import Image from "next/image";
import React, { useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";

export default function ContactUs() {
  const [isHover, setHover] = useState(false);
  return (
    <div className="mt-20 lg:mt-[115px]">
      <div className="relative w-full h-[344px]">
        <Image
          fill
          sizes="50vh"
          className="w-full h-full object-cover"
          alt="banner"
          src={
            "https://res.cloudinary.com/dtme6qv4c/image/upload/v1673353175/fiverr%20zara/banner.webp"
          }
        />
        <div className="bannerGradient  absolute inset-0 w-full  h-full">
          <div className="myContainer text-white gap-y-2 justify-center items-start h-full flex flex-col py-5">
            <p className=" font-bold text-xl md:text-3xl">
              Возникли проблемы с поиском ?
            </p>
            <p>Задайте вопросы менеджеру</p>
            <button
              onMouseLeave={() => setHover(null)}
              onMouseEnter={() => setHover(true)}
              className={` btnHover  mt-3 xl:w-[271px] xl:h-[55px] rounded-[90px] border border-main items-center justify-center  py-2 px-10 flex gap-x-5`}
            >
              <div
                className={`${
                  isHover ? "bg-white text-main" : "text-white bg-[#039BE5]  "
                }  rounded-full w-[30px] h-[30px] flex justify-center items-center  `}
              >
                <FaTelegramPlane />
              </div>
              <p>Telegram чат</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
