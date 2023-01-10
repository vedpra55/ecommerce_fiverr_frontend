import Image from "next/image";
import React, { useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { BsPlayFill } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";

export default function Hero() {
  const [buttonHover, setHover] = useState(false);

  return (
    <section className="w-full h-full ">
      <div className=" bg-black opacity-95 bg-hero-pattern bg-no-repeat w-full h-full md:h-[450px] xl:h-[480px] 2xl:h-[600px] bg-cover">
        <div className="myContainer text-white flex flex-col gap-y-10 md:flex-row h-full justify-between gap-x-40 lg:gap-x-56  items-start py-10 xl:py-16">
          <div className="flex flex-col items-start justify-start w-full md:w-[35%] lg:w-[40%] 3xl:w-[45%]">
            <h1 className=" text-3xl lg:text-4xl 3xl:leading-[50px] 3xl:text-[48px] font-bold pb-2">
              Заказите товар через баера с Европы
            </h1>
            <h4 className="font-semibold 3xl:mt-4">
              Видеоотчет о покупке Вашго товара
            </h4>
            <div className="flex items-center gap-x-4 py-5">
              <div className=" rounded-full p-2 bg-[#54aae059]">
                <div className="rounded-full text-xl p-1 bg-main opacity-100">
                  <BsPlayFill />
                </div>
              </div>
              <p>Пример видеоотчета</p>
            </div>
            <p>Топовые бренды:</p>
            <div className="flex flex-wrap sm:flex-nowrap gap-y-2 gap-x-2 lg:gap-x-5 items-center py-2">
              {Array.from(Array(3)).map((item, i) => (
                <div key={i} className="border border-white rounded-md px-5">
                  <div className=" relative  w-14 h-8 md:w-20 md:h-12 3xl:w-[136px] 3xl:h-[56px]">
                    <Image
                      fill
                      sizes="10vh"
                      className="w-full h-full object-contain"
                      alt="brands"
                      src="/assets/brands.png"
                    />
                  </div>
                </div>
              ))}
              <div className="border btnHover hover:text-white cursor-pointer border-main text-main rounded-full p-2">
                <AiOutlineRight />
              </div>
            </div>
            <button className="border btnHover  lg:w-[289px] lg:h-[52px] border-main text-white px-10 mt-4 py-2 rounded-[90px]">
              <p className=" font-medium whitespace-nowrap ">
                Рассчитатьс стоимость
              </p>
            </button>
          </div>
          <div className="flex flex-col text-center  justify-center gap-y-5 text-xl bg-black py-10 3xl:h-[362px] 3xl:py-14 w-full md:w-80 lg:w-96 3xl:w-[436px] px-10 rounded-xl items-center border border-[#636679]">
            <h4 className=" font-semibold xl:text-[24px] ">
              Свяжитесь с нами для консультации
            </h4>
            <p className="text-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
            </p>
            <button
              onMouseLeave={() => setHover(false)}
              onMouseEnter={() => setHover(true)}
              className=" btnHover lg:w-[340px] lg:h-[65px] flex justify-center items-center px-14 py-2 border border-main rounded-[90px]"
            >
              <div className="flex gap-x-5 items-start">
                <div
                  className={` ${
                    buttonHover ? "bg-white text-main" : "bg-[#039BE5]"
                  }  text-[14px] rounded-full p-2`}
                >
                  <FaTelegramPlane />
                </div>
                <p className="text-[15px] font-medium whitespace-nowrap">
                  Связаться с нами
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
