import Link from "next/link";
import React from "react";

export default function CategoryBar() {
  const data = [
    {
      name: "Главная",
      href: "",
    },
    {
      name: "Каталог товаров",
      href: "catalog",
    },
    {
      name: "Бренды",
      href: "brands",
    },
    {
      name: "Profile",
      href: "account",
    },
    {
      name: "Контакты",
      href: "contactUs",
    },
  ];

  return (
    <section className="bg-[#181818] h-[65px]">
      <div className="w-full h-full flex flex-wrap md:flex-nowrap justify-between gap-x-10 md:gap-0 text-xs md:text-[20px] cursor-pointer  gap-y-1 md:justify-between items-center myContainer">
        {data.map((item) => (
          <div key={item.name}>
            <Link href={`/${item?.href}`}>
              <p
                className={` text-white hover:text-main active:text-[#94D9FF]`}
              >
                {item.name}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
