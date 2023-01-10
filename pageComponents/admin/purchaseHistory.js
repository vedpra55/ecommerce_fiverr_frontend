import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import useSwr from "swr";
import PurchaseHistoryItemCard from "./purchaseHistoryItemCard";
import PurchaseHistoryItemTable from "./purchaseHistoryItemTable";

export default function PurchaseHistory({ user }) {
  const header = [
    {
      name: "ID",
      col: "col-span-1",
    },
    {
      name: "Клиент",
      col: "col-span-1",
    },
    {
      name: "Дата создания заказа",
      col: "col-span-2",
    },
    {
      name: "Вся сумма",
      col: "col-span-2",
    },
    {
      name: "Статус оплаты",
      col: "col-span-2",
    },
    {
      name: "Статус заказа",
      col: "col-span-3",
    },
    {
      name: "Действия",
      col: "col-span-1",
    },
  ];

  async function fetchAllOrders() {
    const URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/order/allOrders?uid=${user._id}`;
    const res = await fetch(URL);
    return res.json();
  }

  const { data: orders } = useSwr(["orders"], fetchAllOrders);

  if (!orders) return null;

  return (
    <div className="col-span-12 md:col-span-8 3xl:col-span-9">
      <h2 className="font-bold text-2xl mb-[15px]">История заказов</h2>
      <div className="relative">
        <input
          className="accountInput h-[52px] "
          placeholder="Поиск заказа"
          type="text"
        />
        <div className="text-xl flex items-center absolute  right-5 bottom-4  text-main ">
          <AiOutlineSearch />
        </div>
      </div>
      <div className="hidden md:grid grid-cols-12 gap-x-2  mt-[30px]">
        {header.map((item, i) => (
          <div key={i} className={`${i === 2 && "pl-5"}  ${item.col}`}>
            <p className="text-[10px] lg:text-[13px] whitespace font-semibold">
              {item.name}
            </p>
          </div>
        ))}
      </div>
      <div className="border w-full my-3"></div>
      {orders.data.map((item, i) => (
        <>
          <PurchaseHistoryItemTable adminId={user._id} key={i} item={item} />
          <PurchaseHistoryItemCard
            adminId={user._id}
            key={item._id}
            item={item}
          />
        </>
      ))}
    </div>
  );
}
