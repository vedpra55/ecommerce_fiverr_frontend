/* eslint-disable @next/next/no-img-element */
import React from "react";

import { useFilterContext } from "../../context/filterDataContext";
import { useRouter } from "next/router";

export default function TopCategories() {
  const router = useRouter();
  const data = [
    {
      imgUrl: "/assets/category1.png",
      name: "Men Blazer Zara",
      price: "",
      href: {
        brand: "zara",
        mainCategory: "ERKEK",
        category: "BLAZER",
      },
    },

    {
      imgUrl: "/assets/category2.png",
      name: "H&m Kids",
      price: "376 товара",
      href: {
        brand: "h&m",
        mainCategory: "Bebek",
        category: "Erkek Bebek",
      },
    },
    {
      imgUrl: "/assets/category3.png",
      name: "Women Jeans Zara",
      price: "376 товара",
      href: {
        brand: "zara",
        mainCategory: "KADIN",
        category: "JEAN",
      },
    },
    {
      imgUrl: "/assets/category4.png",
      name: "Women Dress Zara ",
      price: "376 товара",
      href: {
        brand: "zara",
        mainCategory: "KADIN",
        category: "ELBİSE | TULUM",
      },
    },
    {
      imgUrl: "/assets/category5.png",
      name: "Men T-shirt Zara",
      price: "376 товара",
      href: {
        brand: "zara",
        mainCategory: "ERKEK",
        category: "POLO T-SHIRT",
      },
    },
  ];

  const {
    resetAllFilterValue,
    setSelectedBrand,
    setSelectedMainCategory,
    setSelectedCategory,
  } = useFilterContext();

  function handleCatalogNavigation(i) {
    resetAllFilterValue();
    setSelectedBrand(data[i].href.brand);
    setSelectedMainCategory([data[i].href.mainCategory]);
    setSelectedCategory([data[i].href.category]);
    router.push("/catalog");
  }

  return (
    <section className="my-10 myContainer">
      <h5 className=" font-bold text-3xl pb-5">Популярные категории</h5>
      <div className=" grid grid-cols-12 gap-2 md:gap-[15px] h-full w-full">
        {data.map((item, i) => (
          <div
            key={item.name}
            className={` relative ${
              i === 0 && " row-span-2 h-full"
            } h-full md:col-span-4 col-span-6 p-0 rounded-xl`}
          >
            <div className="w-full h-full">
              <img
                className="w-full h-full rounded-xl"
                src={item.imgUrl}
                alt={item.name}
              />
            </div>
            <div className="z-10 absolute inset-0 py-2 md:py-5 gap-y-1 md:gap-y-[15px] flex flex-col text-white justify-end items-start px-2 md:px-[25px] h-full">
              <h5 className="font-medium text-[18px] md:font-bold lg:text-xl w-full md:w-44 leading-6  md:text-[24px] ">
                {item.name}
              </h5>
              <p className=" opacity-60 text-[13px] md:text-[18px]">
                {item.price}
              </p>
              <button
                onClick={() => handleCatalogNavigation(i)}
                className="btnHover hover:bg-red-600  active:bg-red-800 lg:w-[172px] lg:h-[44px] flex justify-center items-center bg-main rounded-[90px]   md:w-auto text-[15px] md:text-[16px] px-5 py-1  font-semibold  whitespace-nowrap lg:px-[52px]"
              >
                В каталог
              </button>
            </div>
            <div className="categoryCardGradient absolute inset-0 w-full rounded-xl h-full"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
