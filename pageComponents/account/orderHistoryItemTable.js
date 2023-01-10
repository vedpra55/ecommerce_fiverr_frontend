import React, { useState } from "react";
import OrderProductModal from "../../components/Modal/orderProductModal";

export default function OrderHistoryItemTable({ item }) {
  const [isOpen, setOpen] = useState(false);

  const createdAt = new Date(item.createdAt);
  const URL = "http://localhost:4000/api/order/getQiwiBill";

  async function handlePayment() {
    const data = {
      amount: item.totalAmount,
      orderId: item._id,
      email: item.shippingAddress.email,
      userId: item.user,
    };

    const response = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const resData = await response.json();
    window.open(resData.url);
  }

  return (
    <>
      <div className="hidden    md:grid grid-cols-12  gap-x-5 cursor-pointer">
        <div onClick={() => setOpen(true)} className="col-span-1">
          <p className="text-[10px] lg:text-[13px] whitespace-nowrap">
            {item._id.substring(0, 5)}
          </p>
        </div>
        <div onClick={() => setOpen(true)} className="col-span-3">
          <p className="text-[10px] lg:text-[13px] whitespace-nowrap">
            {createdAt.getDate()} /{createdAt.getMonth() + 1} /
            {createdAt.getFullYear()}
          </p>
        </div>
        <div onClick={() => setOpen(true)} className="col-span-2">
          <p className="text-[10px] lg:text-[13px] whitespace-nowrap">
            {item.totalAmount} ₽
          </p>
        </div>
        <div onClick={() => setOpen(true)} className="col-span-2">
          <p className="text-[10px] lg:text-[13px] whitespace-nowrap">
            {item.isPaid ? "Paid" : "Not Paid"}
          </p>
        </div>
        <div onClick={() => setOpen(true)} className="col-span-2">
          <p className="text-[10px] lg:text-[13px] whitespace-nowrap">
            {item.statusDelivery}
          </p>
        </div>
        <div className="col-span-1">
          {!item.isPaid && (
            <button
              onClick={handlePayment}
              className="ml-5 rounded-[90px] px-5 py-1 bg-main btnHover text-white"
            >
              <p className="text-[10px]  lg:text-[13px] whitespace-nowrap">
                Pay
              </p>
            </button>
          )}
        </div>
      </div>
      <div className="hidden md:block border w-full my-3"></div>
      <OrderProductModal
        isOpen={isOpen}
        setOpen={setOpen}
        products={item.products}
      />
    </>
  );
}
