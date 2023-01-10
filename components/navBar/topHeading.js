import React from "react";

import { FaPhoneVolume, FaUser } from "react-icons/fa";

export default function TopHeading() {
  const data = [
    {
      name: "Заказать звонок",
      icon: <FaPhoneVolume />,
    },
    {
      name: "Личный кабинет",
      icon: <FaUser />,
    },
  ];

  return (
    <section className={`bg-[#E4E4E4] py-1 md:p-0 w-full md:h-[51px]`}>
      <div className="w-full h-full flex justify-center md:justify-between flex-wrap md:flex-nowrap  items-center myContainer text-[14px] lg:text-[16px]">
        <div>
          <p>Какой то краткий лозунг о чем магазин</p>
        </div>
        <div className="flex items-center gap-x-[30px]">
          {data.map((item) => (
            <div
              className="flex  items-center gap-x-2 lg:gap-x-[10px]"
              key={item.name}
            >
              <div className="w-[24px] h-[24px] flex justify-center items-center bg-[#636679] text-white rounded-full text-xs lg:text-[14px]">
                {item.icon}
              </div>
              <p className=" cursor-pointer active:text-[#94D9FF] hover:text-[#039BE5;] hover:underline">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
