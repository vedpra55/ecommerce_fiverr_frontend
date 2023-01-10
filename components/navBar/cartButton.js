import React, { useEffect, useState } from "react";
import { BsCart4 } from "react-icons/bs";
import { useCart } from "react-use-cart";
import { adaptPrice } from "../../helper/adpatPrice";
import Link from "next/link";

export default function CartButton() {
  const { cartTotal, totalItems } = useCart();
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  if (!client) return false;

  return (
    <Link href={"/cart"}>
      <div className="flex items-center gap-x-2">
        <div
          className={` text-white linkHover    hover:text-main cursor-pointer flex justify-center items-center w-[30px] h-[30px] md:w-[50px] md:h-[50px]  bg-[#039BE5] rounded-full text-xl md:text-3xl `}
        >
          <BsCart4 />
        </div>
        <div>
          <p className=" font-medium">Корзина:</p>
          <p>{totalItems === 0 ? "0" : adaptPrice(cartTotal)} ₽</p>
        </div>
      </div>
    </Link>
  );
}
