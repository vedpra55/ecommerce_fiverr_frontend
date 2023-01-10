import React from "react";
import Image from "next/image";
import Link from "next/link";

import { adaptPrice } from "../../helper/adpatPrice";
import { imageUrl } from "../../helper/imageUrl";

export default function OrderItemTable({ item }) {
  return (
    <div className="hidden md:grid grid-cols-12 gap-x-5">
      <div className="relative h-[125px] w-[85px] col-span-2">
        <Image
          className=" object-cover"
          fill
          src={imageUrl(item.image)}
          sizes="15vh"
          alt={item.name}
        />
      </div>
      <div className="col-span-3 w-[90%]">
        <Link href={`/${item.productId}?brand=${item.brand}`}>
          <p className=" hover:text-main cursor-pointer">{item.name}</p>
        </Link>
      </div>
      <div className="col-span-2">
        <p>{item.selectedSize}</p>
      </div>
      <div className="col-span-3">
        <p>{item.quantity}</p>
      </div>

      <div className="col-span-2">
        <p>{adaptPrice(item.itemTotal)} Р</p>
      </div>

      <div className="border-[1px] border-[#EAEAEA] col-span-12 w-full my-5 "></div>
    </div>
  );
}
