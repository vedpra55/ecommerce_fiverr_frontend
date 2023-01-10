import React, { useState } from "react";
import AdminUserModal from "../../components/Modal/adminUserModal";

export default function ClientItemTable({ item, user }) {
  const [isModalOpen, setOpen] = useState(false);

  return (
    <div className="hidden md:block">
      <div className="grid grid-cols-12 gap-x-5">
        <div className="col-span-1">
          <p className="text-[10px] lg:text-[13px] whitespace-nowrap">
            {item._id.substring(0, 5)}
          </p>
        </div>
        <div className="col-span-3">
          <p className="text-[10px] lg:text-[13px] whitespace-nowrap">
            {item.name}
          </p>
        </div>
        <div className="col-span-4">
          <p className="text-[10px] lg:text-[13px] whitespace-nowrap">
            {item.email}
          </p>
        </div>
        <div className="col-span-4 flex gap-x-2">
          <button
            onClick={() => setOpen(true)}
            className="text-[10px] btnHover cursor-pointer md:w-[120px] md:h-[35px] flex items-center justify-center bg-main text-white rounded-[90px] px-5 py-1 lg:text-[13px] whitespace-nowrap"
          >
            Details
          </button>
          <p className="text-[10px] btnHover cursor-pointer md:w-[120px] nd:h-[35px] flex items-center justify-center bg-main text-white rounded-[90px] px-5 py-1 lg:text-[13px] whitespace-nowrap">
            Действие
          </p>
        </div>
      </div>
      <div className="border w-full my-3"></div>
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
