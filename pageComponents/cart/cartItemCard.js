import Image from "next/image";
import React from "react";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import { useCart } from "react-use-cart";
import { toast } from "react-hot-toast";
import { imageUrl } from "../../helper/imageUrl";

import { adaptPrice } from "../../helper/adpatPrice";
import Link from "next/link";

export default function CartItemCard({ item }) {
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
    <div className="md:hidden">
      <button
        onClick={handleRemoveProduct}
        className=" cursor-pointer mb-2 flex justify-end"
      >
        <AiOutlineClose className="text-[#EE4932] text-2xl" />
      </button>
      <Link href={`/${item.productId}?brand=${item.brand}`}>
        <div className="  grid grid-cols-12 gap-x-3">
          <div className="col-span-4">
            <div className="relative w-full h-40">
              <Image
                fill
                className="w-full h-full object-cover"
                src={imageUrl(item.image)}
                sizes="20vh"
                alt={item.name}
              />
            </div>
          </div>
          <div className="col-span-8 gap-y-2 w-full flex flex-col items-start justify-start">
            <p>{item.name}</p>
            <div className="flex items-center gap-x-5">
              <p className="text-xs line-through">{adaptPrice(item.price)} ₽</p>
              <p>{adaptPrice(item.itemTotal)} ₽</p>
            </div>
            <p>Размер: {item.selectedSize}</p>

            <div className="flex gap-x-4  items-start">
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
          </div>
        </div>
      </Link>
      <div className="border-[1px] border-[#EAEAEA] col-span-12 w-full my-5 "></div>
    </div>
  );
}
