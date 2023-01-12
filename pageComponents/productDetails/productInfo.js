import React, { useState, useEffect } from "react";
import { GiShoppingCart } from "react-icons/gi";
import { AiFillStar, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import { useCart } from "react-use-cart";
import { toast } from "react-hot-toast";

import { adaptPrice } from "../../helper/adpatPrice";

export default function ProductInfo({ product }) {
  const colors = [
    "bg-gray-200",
    "bg-green-500",
    "bg-orange-500",
    "bg-black",
    "bg-lime-400",
  ];

  const [selectSize, setSelectedSize] = useState(null);
  const [selectColor, setSelectedColor] = useState(2);

  const { addItem, getItem } = useCart();
  const [qty, setQty] = useState(1);
  const [sizeAvailable, setSizeAvailable] = useState([]);
  const cartItem = getItem(product.data._id);

  function handleAddToCart() {
    if (selectSize !== null) {
      const data = {
        name: product.data.productName,
        brand: product.data.productBrand,
        image: product?.data.image,
        price: product.data.price,
        productId: product.data._id,
        id: product.data._id + selectSize,
        selectedSize: product.data.productDetails.sizes[selectSize].sizeName,
      };
      addItem(data, qty);
      toast.success("Product added to cart");
    } else {
      toast.error("Please select a size");
    }
  }

  function handleQty(symbol) {
    if (symbol === "plus") {
      setQty(qty + 1);
    } else {
      if (qty != 1) {
        setQty(qty - 1);
      }
    }
  }

  function checkSizeAvailabel() {
    const sizes = product.data.productDetails.sizes;
    let sizeAvailables = [];
    if (sizes.length) {
      sizes.map((item, i) => {
        if (item.sizeAvailable) {
          sizeAvailables.push(item);
        }
      });
      setSizeAvailable(sizeAvailables);
    } else {
      setSizeAvailable([]);
    }
  }

  useEffect(() => {
    checkSizeAvailabel();
  }, [product]);

  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-6 flex flex-col ">
      <h2 className="font-bold text-3xl">{product.data.productName}</h2>
      <div className="mt-[10px] flex justify-between items-center">
        <div className="flex gap-x-2  items-center">
          <div className="rounded-full p-1 bg-[#8CC851]"></div>
          <p>{sizeAvailable.length === 0 ? "Out of stock" : "В наличии"}</p>
        </div>
        <div className="flex items-center">
          <AiFillStar className=" text-[#F8991D]" />
          <p>{`(${"5"})`}</p>
        </div>
      </div>
      <div className="mt-[15px] flex-wrap gap-y-2 flex gap-x-10 items-center">
        <p>Артикул: {product.data.id}</p>
        <p>
          Бренд: <span className="pl-1">{product.data.productBrand}</span>
        </p>
        <p>
          Total Sales: <span className="pl-1">{product.data.totalSales}</span>
        </p>
        <a
          target={"_blank"}
          href={product.data.productUrl}
          className="text-main underline cursor-pointer"
        >
          Ссылка на товар
        </a>
      </div>
      <p className="mt-[15px]">{product.data.productDetails.description}</p>
      <div className="mt-[15px]">
        <p className="font-semibold text-xl">Цена:</p>
        <div className="flex gap-x-5 items-center mt-[10px]">
          <p className="text-main text-2xl font-semibold">
            {adaptPrice(product.data.price)} ₽
          </p>
        </div>
      </div>
      <div className="mt-[20px]">
        <div className="flex items-end gap-x-5">
          <p className="font-semibold text-xl">Размер</p>
          <p className="text-main underline font-medium">
            Руководство по размерам
          </p>
        </div>
        <div className="flex items-start gap-x-[10px] gap-y-2 mt-[15px] mr-10 flex-wrap">
          {product.data.productDetails.sizes.map((item, i) => (
            <div key={item._id}>
              <div
                disabled={true}
                onClick={() => {
                  item.sizeAvailable && setSelectedSize(i);
                }}
                key={i}
                className={`${
                  i === selectSize &&
                  "font-bold bg-[#0f6ea4] text-white cursor-pointer"
                } ${
                  !item.sizeAvailable &&
                  "bg-gray-200 text-gray-500 hover:bg-gray-400 cursor-default"
                } border cursor-pointer  btnHover hover:text-white w-[65px] h-[50px] flex justify-center items-center rounded-md`}
              >
                {item.sizeName}
              </div>
              {!item.sizeAvailable && (
                <p className="text-red-500 font-medium text-xs">Out Of Stock</p>
              )}
            </div>
          ))}
        </div>
      </div>
      {!cartItem && (
        <div className="mt-[20px]">
          <p className="font-bold text-xl">Количество</p>
          <div className="border w-[195px] h-[52px] justify-between  items-center gap-x-5 rounded-lg mt-[10px] flex py-2 px-5 ">
            <AiOutlineMinus
              onClick={() => handleQty("minus")}
              className="text-[#5E5E5E] w-56 text-2xl cursor-pointer"
            />
            <div className="h-5 w-[18px] opacity-60 bg-[#5D5D5D]"></div>
            <p className="text-[#5E5E5E] text-xl font-medium px-5">{qty}</p>
            <div className="h-5 w-[18px] opacity-60 bg-[#5D5D5D]"></div>
            <AiOutlinePlus
              onClick={() => handleQty("plus")}
              className="text-[#5E5E5E] w-56 text-2xl  cursor-pointer"
            />
          </div>
        </div>
      )}
      <div className="mt-[30px]">
        <p className="font-bold text-xl">Цвет</p>
        <div className="flex gap-x-[15px] mt-[10px] items-center">
          {colors.map((item, i) =>
            selectColor === i ? (
              <div
                key={i}
                className={`${item}  cursor-pointer text-white rounded-full flex items-center justify-center  border-[10px]  border-opacity-80 border-orange-100  h-[50px] w-[50px]`}
              >
                <BsCheckLg />
              </div>
            ) : (
              <div
                onClick={() => setSelectedColor(i)}
                key={i}
                className={`${item} ${selectColor}  cursor-pointer rounded-full  h-[25px] w-[25px]`}
              ></div>
            )
          )}
        </div>
      </div>
      <div className="mt-[30px]">
        <button
          disabled={sizeAvailable.length ? false : true}
          onClick={handleAddToCart}
          className={` disabled:border-gray-400 disabled:text-gray-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-400 btnHover hover:text-white text-main  w-[220px] h-[50px] border border-main  flex justify-center items-center rounded-3xl gap-x-3 md:gap-x-3 py-2  px-5`}
        >
          <GiShoppingCart className=" md:text-2xl" />
          <p className=" text-[15px] font-semibold whitespace-nowrap">
            Добавить в корзину
          </p>
        </button>
      </div>
    </div>
  );
}
