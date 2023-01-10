import React, { useState } from "react";
import AdminOrderModal from "../../components/Modal/adminOrderModal";

export default function PurchaseHistoryItemCard({ item, adminId }) {
  const createdAt = new Date(item.createdAt);
  const [isModalOpen, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <div className="flex flex-col gap-y-2">
        <div className="flex justify-between gap-y-2 items-start">
          <p className="font-semibold">ID</p>
          <p>{item._id.substring(0, 5)}</p>
        </div>
        <div className="flex justify-between gap-y-2 items-start">
          <p className="font-semibold">Клиент</p>
          <p> {item.shippingAddress.userName.substring(0, 5)}</p>
        </div>
        <div className="flex justify-between gap-y-2 items-start">
          <p className="font-semibold">Дата создания заказа</p>
          <p>
            {" "}
            {createdAt.getDate()} /{createdAt.getMonth() + 1} /
            {createdAt.getFullYear()}
          </p>
        </div>
        <div className="flex justify-between gap-y-2 items-start">
          <p className="font-semibold">Вся сумма</p>
          <p> {item.totalAmount} ₽</p>
        </div>
        <div className="flex justify-between gap-y-2 items-start">
          <p className="font-semibold">Статус оплаты</p>
          <p> {item.isPaid ? "Paid" : "Not Paid"}</p>
        </div>
        <div className="flex justify-between gap-x-5 flex-wrap gap-y-2 items-start">
          <p className="font-semibold">Статус заказа</p>
          <p>{item.statusDelivery}</p>
        </div>
        <div
          onClick={() => setOpen(true)}
          className="flex justify-between gap-y-2 items-start"
        >
          <p className="font-semibold">Действия</p>
          <button className=" bg-main btnHover px-3 py-1 rounded-[90px] text-white">
            Details
          </button>
        </div>
      </div>
      <div className="md:hidden border w-full my-3"></div>
      {isModalOpen && (
        <AdminOrderModal
          adminId={adminId}
          order={item}
          isOpen={isModalOpen}
          setIsOpen={setOpen}
        />
      )}
    </div>
  );
}
