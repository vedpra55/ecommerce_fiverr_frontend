import React from "react";
import useSwr from "swr";
import { AiOutlineSearch } from "react-icons/ai";
import OrderHistoryItemCard from "./orderHistoryItemCard";
import OrderHistoryItemTable from "./orderHistoryItemTable";

export default function OrderHistory({ user }) {
  const header = [
    {
      name: "ID",
      col: "col-span-1",
    },
    {
      name: "Дата создания заказов",
      col: "col-span-3",
    },
    {
      name: "Итоговая сумма",
      col: "col-span-2",
    },
    {
      name: "Статус оплаты",
      col: "col-span-2",
    },
    {
      name: "Статус доставки",
      col: "col-span-2",
    },
    {
      name: "Действия",
      col: "col-span-1",
    },
  ];

  const data = [
    {
      id: "2432",
      date: "Название товар",
      total: "2 423 Р",
      paymentStatus: "Статус",
      deliveryStatus: "Статус",
      action: "Действия",
    },
    {
      id: "2432",
      date: "Название товар",
      total: "2 423 Р",
      paymentStatus: "Статус",
      deliveryStatus: "Статус",
      action: "Действия",
    },
    {
      id: "2432",
      date: "Название товар",
      total: "2 423 Р",
      paymentStatus: "Статус",
      deliveryStatus: "Статус",
      action: "Действия",
    },
    {
      id: "2432",
      date: "Название товар",
      total: "2 423 Р",
      paymentStatus: "Статус",
      deliveryStatus: "Статус",
      action: "Действия",
    },
  ];

  async function fetchOrders() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/order/user?uid=${user._id}`
    );
    return res.json();
  }

  const { data: orders } = useSwr(["userOrders", user._id], fetchOrders);

  if (!orders) return null;

  console.log(orders.data);

  return (
    <div className="col-span-12 md:col-span-8 3xl:col-span-9">
      <h2 className="font-bold text-2xl mb-[15px]">История заказов</h2>
      <div className="relative">
        <input
          className="accountInput "
          placeholder="Поиск заказа"
          type="text"
        />
        <div className="text-xl flex items-center absolute  right-5 bottom-3  text-main ">
          <AiOutlineSearch />
        </div>
      </div>
      <div className="hidden md:grid grid-cols-12 gap-x-5 mt-5">
        {header.map((item, i) => (
          <div key={item.name} className={`${i === 5 && "pl-5"}  ${item.col}`}>
            <p className="text-[10px] lg:text-[13px] 3xl:text-[16px] whitespace-nowrap font-semibold">
              {item.name}
            </p>
          </div>
        ))}
      </div>
      <div className="border w-full my-3"></div>
      {orders.data.map((item, i) => (
        <>
          <OrderHistoryItemTable key={i} item={item} />

          <OrderHistoryItemCard key={item._id} item={item} />
        </>
      ))}
    </div>
  );
}
