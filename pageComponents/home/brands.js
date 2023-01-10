import Image from "next/image";
import React, { useState } from "react";

export default function Brands() {
  const data = [
    {
      imgUrl: "/assets/brand1.png",
    },
    {
      imgUrl: "/assets/brand2.png",
    },
    {
      imgUrl: "/assets/brand3.png",
    },
    {
      imgUrl: "/assets/brand4.png",
    },
  ];

  return (
    <section className="myContainer mt-[50px] md:mt-[70px]">
      <p className=" font-bold text-xl md:text-3xl">
        Брнеды которые мы доставляем
      </p>
      <div className="grid grid-cols-12 gap-5 3xl:gap-x-[27px] mt-5 ">
        {data.map((item, i) => (
          <div
            className={`w-full cardHover  cursor-pointer cardShadow 3xl:w-[280px] 3xl:h-[130px] relative col-span-6 md:col-span-3 lg:col-span-3 h-28 md:h-36 bg-white shadow-md rounded-lg`}
            key={item.imgUrl}
          >
            <Image
              className="w-full h-full object-contain px-5"
              fill
              sizes="30vh"
              alt="brands"
              src={item.imgUrl}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
