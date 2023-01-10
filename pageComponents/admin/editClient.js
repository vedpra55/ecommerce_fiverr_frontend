import React, { useState } from "react";

export default function EditClient() {
  return (
    <div className="col-span-12 md:col-span-8 3xl:col-span-9">
      <h2 className="font-bold text-2xl mb-5">
        Редактирование клиента 3407762
      </h2>
      <form className="flex flex-col gap-y-[25px]">
        <div>
          <label className="">Полное имя*</label>
          <input
            className=" mt-[10px] h-[55px] accountInput"
            placeholder="Ваше имя"
            type={"text"}
          />
        </div>
        <div>
          <label className="">Телефон*</label>
          <input
            className=" mt-[10px] h-[55px]   accountInput"
            placeholder="+7  ___ - __ - __"
            type={"text"}
          />
        </div>
        <div>
          <label className="">E-mail</label>
          <input
            className=" mt-[10px] h-[55px]   accountInput"
            placeholder="E-mail"
            type={"text"}
          />
        </div>

        <div className="flex gap-x-3 sm:gap-x-5 justify-between items-center">
          <div className="flex items-center gap-x-2">
            <input className=" border-[#ABABAB]" type={"checkbox"} />
            <p>Пользователь является админом</p>
          </div>
          <button
            className={`btnHover bg-main text-white lg:w-[305px] lg:h-[55px] flex justify-center items-center px-14 py-2 rounded-[90px]`}
          >
            Сохранить
          </button>
        </div>
      </form>
    </div>
  );
}
