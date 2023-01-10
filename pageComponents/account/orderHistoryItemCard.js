import React, { useState } from "react";
import OrderProductModal from "../../components/Modal/orderProductModal";

export default function OrderHistoryItemCard({ item }) {
  const [isOpen, setOpen] = useState(false);
  const createdAt = new Date(item.createdAt);
  return (
    <div className="md:hidden w-full">
      <div onClick={() => setOpen(true)} className="flex flex-col gap-y-2">
        <div className="flex justify-between gap-y-2 items-start">
          <p className="font-semibold">ID</p>
          <p>{item._id.substring(0, 5)}</p>
        </div>
        <div className="flex justify-between gap-y-2 items-start">
          <p className="font-semibold">Дата создания заказов</p>
          <p>
            {" "}
            {createdAt.getDate()} /{createdAt.getMonth() + 1} /
            {createdAt.getFullYear()}
          </p>
        </div>
        <div className="flex justify-between gap-y-2 items-start">
          <p className="font-semibold">Итоговая сумма</p>
          <p> {item.totalAmount} ₽</p>
        </div>
        <div className="flex justify-between gap-y-2 items-start">
          <p className="font-semibold">Статус оплаты</p>
          <p> {item.isPaid ? "Paid" : "Not Paid"}</p>
        </div>
        <div className="flex justify-between gap-y-2 items-start">
          <p className="font-semibold">Статус доставки</p>
          <p> {item.statusDelivery}</p>
        </div>
        <div className="flex justify-between gap-y-2 items-start">
          <p className="font-semibold">Действия</p>
          <button className="rounded-[90px] px-5 py-1 bg-main btnHover text-white">
            <p className="text-[10px]  lg:text-[13px] whitespace-nowrap">
              {item.isPaid ? "Bill" : "Pay"}
            </p>
          </button>
        </div>
      </div>
      <div className="md:hidden border w-full my-3"></div>
      {isOpen && (
        <OrderProductModal
          isOpen={isOpen}
          setOpen={setOpen}
          products={item.products}
        />
      )}
    </div>
  );
}
