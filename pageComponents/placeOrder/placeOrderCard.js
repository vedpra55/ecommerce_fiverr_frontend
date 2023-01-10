import React, { useState } from "react";
import { useCreateOrder } from "../../hooks/useCreateOrder";
import { useRouter } from "next/router";

import { OrderPrice } from "../../helper/orderPrices";

export default function PlaceOrderCard({ cartItem, cartTotal, user }) {
  const router = useRouter();

  const { discount, totalPrice, shippingPrice } = OrderPrice(cartTotal);

  const [clicked, setClicked] = useState(false);

  const { createOrder } = useCreateOrder();
  const URL = "http://localhost:4000/api/order/getQiwiBill";

  async function handlePlaceOrder() {
    const data = {
      products: cartItem,
      totalAmount: totalPrice,
      discount: discount,
      shippingPrice: shippingPrice,
      userId: user._id,
      shippingAddress: {
        userName: user.name + "-" + user.sirName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        zipCode: user.address.zipCode,
        state: user.address.state,
        city: user.address.city,
        landMark: user.address.landMark,
      },
    };
    await createOrder(data);
    router.push("/account?tab=1");
  }

  async function handlePayment() {
    setClicked(true);
    const data = {
      amount: totalPrice,
      email: user.email,
      userId: user._id,
    };

    const response = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const resData = await response.json();
    setClicked(false);
    window.open(resData.url);
  }

  return (
    <div className="col-span-12 lg:col-span-4 w-full py-5 lg:w-[350px] lg:h-[311px] rounded-lg flex flex-col justify-center px-[20px] bg-white myshadow">
      <p className="text-[22px] font-semibold">Стоимость заказа</p>
      <div className="flex flex-col gap-y-3 pt-5">
        <div className="flex text-[20px] items-center justify-between">
          <p>Товары:</p>
          <p>{cartTotal} Р</p>
        </div>
        <div className="flex text-[20px] items-center justify-between ">
          <p>Доставка:</p>
          <p>{shippingPrice} Р</p>
        </div>
        <div className="flex text-[20px] items-center justify-between ">
          <p>Discount:</p>
          <p>{discount} Р</p>
        </div>
        <div className="flex text-[20px] items-center justify-between ">
          <p>Итого</p>
          <p className="text-main font-semibold text-[24px]">{totalPrice} Р</p>
        </div>
      </div>
      <button
        onClick={handlePlaceOrder}
        className={` btnHover w-full  lg:w-[305px] py-2 lg:h-[44px] whitespace-nowrap text-white rounded-3xl mt-5 bg-main`}
      >
        <p className="font-semibold">{clicked ? "Loading.." : "Подтвердить"}</p>
      </button>
    </div>
  );
}
