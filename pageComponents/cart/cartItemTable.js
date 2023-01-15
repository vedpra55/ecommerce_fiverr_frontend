import React from "react";
import Image from "next/image";

import { AiOutlineMinus, AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import { useCart } from "react-use-cart";
import Link from "next/link";
import { toast } from "react-hot-toast";

import { imageUrl } from "../../helper/imageUrl";
import { adaptPrice } from "../../helper/adpatPrice";

export default function CartItemTable({ item }) {
  const { updateItemQuantity, removeItem } = useCart();

  function handleQty(symbol) {
    if (symbol === "plus") {
      updateItemQuantity(item.id, item.quantity + 1);
    } else {
      updateItemQuantity(item.id, item.quantity - 1);
    }
  }

  function handleRemoveProduct() {
    removeItem(item.id);
    toast.success("Item Removed");
  }

  return (
    <div className="hidden md:grid grid-cols-12 gap-x-5">
      <div className="relative w-full h-[125px] col-span-1">
        <Image
          className=" object-cover"
          fill
          sizes="20vh"
          src={item?.image ? imageUrl(item?.image) : "/assets/product1.png"}
          alt={item.name}
        />
      </div>
      <div className="col-span-3 cursor-pointer w-[90%] hover:text-main">
        <Link href={`/${item.productId}?brand=${item.brand}`}>
          <p>{item.name}</p>
        </Link>
      </div>
      <div className="col-span-2">
        <p>{item.selectedSize}</p>
      </div>
      <div className="col-span-2 flex gap-x-4  items-start">
        <div
          onClick={() => handleQty("minus")}
          className="border rounded-lg p-1 cursor-pointer"
        >
          <AiOutlineMinus />
        </div>
        <p>{item.quantity}</p>
        <div
          onClick={() => handleQty("plus")}
          className="border rounded-lg p-1 cursor-pointer"
        >
          <AiOutlinePlus />
        </div>
      </div>
      <div className="col-span-2">
        <p>{adaptPrice(item.price)} ₽</p>
      </div>
      <div className="col-span-2 relative">
        <p>{adaptPrice(item.itemTotal)} ₽</p>
        <button className="absolute  inset-0 flex justify-end">
          <AiOutlineClose
            onClick={handleRemoveProduct}
            className="text-[#EE4932] text-2xl cursor-pointer"
          />
        </button>
      </div>
      <div className="border-[1px] border-[#EAEAEA] col-span-12 w-full my-5 "></div>
    </div>
  );
}
