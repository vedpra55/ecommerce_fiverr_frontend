import React, { useState } from "react";

import AdminOrderModal from "../../components/Modal/adminOrderModal";

export default function PurchaseHistoryItemTable({ item, adminId }) {
  const createdAt = new Date(item.createdAt);

  const [isModalOpen, setOpen] = useState(false);

  return (
    <div className="hidden md:block">
      <div className="grid grid-cols-12  gap-x-2">
        <div className="col-span-1">
          <p className="text-[10px] lg:text-[13px] whitespace-nowrap">
            {item._id.substring(0, 5)}
          </p>
        </div>
        <div className="col-span-1">
          <p className="text-[10px] lg:text-[13px] whitespace-nowrap">
            {item.shippingAddress.userName.substring(0, 5)}
          </p>
        </div>
        <div className="col-span-2 pl-5">
          <p className="text-[10px] lg:text-[13px] whitespace-nowrap">
            {createdAt.getDate()} /{createdAt.getMonth() + 1} /
            {createdAt.getFullYear()}
          </p>
        </div>
        <div className="col-span-2">
          <p className="text-[10px] lg:text-[13px] whitespace-nowrap">
            {item.totalAmount} ₽
          </p>
        </div>
        <div className="col-span-2">
          <p className="text-[10px] lg:text-[13px] whitespace-nowrap">
            {item.isPaid ? "Paid" : "Not Paid"}
          </p>
        </div>

        <div className="col-span-3">
          <p className="text-[10px] lg:text-[13px] ">{item.statusDelivery}</p>
        </div>
        <button onClick={() => setOpen(true)} className="col-span-1">
          <p className="text-[10px] text-main underline hover:opacity-75  lg:text-[13px] whitespace-nowrap">
            Details
          </p>
        </button>
      </div>
      <div className="border w-full my-3"></div>
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
