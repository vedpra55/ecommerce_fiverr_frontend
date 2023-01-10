import React, { useState } from "react";
import AdminUserModal from "../../components/Modal/adminUserModal";

export default function ClientItemCard({ item, user }) {
  const [isModalOpen, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <div className="flex flex-col gap-y-2">
        <div className="flex justify-between gap-y-2 items-start">
          <p className="font-semibold">ID</p>
          <p> {item._id.substring(0, 5)}</p>
        </div>
        <div className="flex justify-between gap-y-2 items-start">
          <p className="font-semibold">Имя</p>
          <p> {item.name}</p>
        </div>
        <div className="flex justify-between gap-y-2 items-start">
          <p className="font-semibold">E-mail</p>
          <p> {item.email}</p>
        </div>
        <div className="flex justify-between gap-y-2 items-start">
          <p className="font-semibold">Действия</p>
          <div className="flex gap-x-2">
            <button
              onClick={() => setOpen(true)}
              className="text-white text-[14px] bg-main font-semibold px-3 py-1 rounded-2xl"
            >
              Details
            </button>
            <button className="text-white text-[14px] bg-main font-semibold px-3 py-1 rounded-2xl">
              Действие
            </button>
          </div>
        </div>
      </div>
      <div className="md:hidden border w-full my-3"></div>
      {isModalOpen && (
        <AdminUserModal
          adminUser={user}
          isOpen={isModalOpen}
          setIsOpen={setOpen}
          user={item}
        />
      )}
    </div>
  );
}
