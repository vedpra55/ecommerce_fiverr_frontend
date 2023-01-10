import React, { useState } from "react";

import { NavBar, Footer, Breadcrumbs } from "../../components";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export default function AllBrandsPage() {
  return (
    <main>
      <NavBar />
      <section className="myContainer mt-[20px]">
        <Breadcrumbs text={"Хлебные крошки"} />
        <div className="mt-[30px]">
          <h1 className="font-bold text-3xl">Все бренды</h1>
          <div className="mt-5  grid grid-cols-12 gap-x-5 flex-wrap md:gap-x-[40px] gap-y-5 items-start">
            {Array.from(Array(12)).map((item, i) => (
              <Card key={i} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

function Card() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="col-span-12  flex flex-col md:col-span-6">
      <div
        onClick={() => setOpen(!isOpen)}
        className=" cardHover cursor-pointer  px-5 md:px-[30px] h-[60px] w-full 3xl:w-[580px] flex justify-between items-center myshadow bg-white rounded-[5px]"
      >
        <p className="font-medium md:text-[18px]">Часто задаваемые вопросы ?</p>

        {isOpen ? (
          <div className="bg-main btnHover cursor-pointer rounded-full  w-[24px] h-[24px] flex justify-center items-center">
            <AiOutlineMinus
              onClick={() => setOpen(false)}
              className="text-xl text-white"
            />
          </div>
        ) : (
          <div className="bg-main btnHover cursor-pointer rounded-full  w-[24px] h-[24px] flex justify-center items-center">
            <AiOutlinePlus
              onClick={() => setOpen(true)}
              className="text-xl text-white"
            />
          </div>
        )}
      </div>

      {isOpen && (
        <div className="w-full mb-12 h-56 px-5 py-5 flex gap-y-1 flex-col">
          <p>Random item</p>
          <p>Random item</p>
          <p>Random item</p>
          <p>Random item</p>
          <p>Random item</p>
          <p>Random item</p>
          <p>Random item</p>
          <p>Random item</p>
          <p>Random item</p>
        </div>
      )}
    </div>
  );
}
