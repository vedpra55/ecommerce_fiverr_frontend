import React from "react";
import Image from "next/image";

import { adaptPrice } from "../../helper/adpatPrice";
import { imageUrl } from "../../helper/imageUrl";

export default function OrderItemCard({ item }) {
  return (
    <div className="md:hidden">
      <div className="grid grid-cols-12 gap-x-3">
        <div className="col-span-4">
          <div className="relative w-full h-40">
            <Image
              fill
              className="w-full h-full object-cover"
              src={imageUrl(item.image)}
              alt={item.name}
            />
          </div>
        </div>
        <div className="col-span-8 gap-y-2 w-full flex flex-col items-start justify-start">
          <p>{item.name} </p>
          <p>Размер: {item.selectedSize}</p>
          <p>Количество: {item.quantity}</p>
          <p>{adaptPrice(item.itemTotal.toFixed(2))} Р</p>
        </div>
      </div>
      <div className="border-[1px] border-[#EAEAEA] col-span-12 w-full my-5 "></div>
    </div>
  );
}
