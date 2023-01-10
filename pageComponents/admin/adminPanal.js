import React from "react";
import { ChartMy } from "./chart";
import useSwr from "swr";

export default function AdminPanal({ user }) {
  async function fetchAllOrders() {
    const URL = `http://localhost:4000/api/order/adminOrders?uid=${user._id}`;
    const res = await fetch(URL);
    return res.json();
  }

  const { data: orders } = useSwr(["adminOrders"], fetchAllOrders);

  if (!orders) return null;

  return (
    <div className="col-span-12 md:col-span-8 3xl:col-span-9">
      <h2 className="font-bold text-2xl mb-5">Админ панель</h2>
      <div className="flex gap-x-8 flex-wrap gap-y-5">
        <div className="flex items-center gap-x-3">
          <p>c</p>
          <div className="border rounded-3xl px-8 py-2">1.1.2023</div>
        </div>
        <div className="flex items-center gap-x-3">
          <p>c</p>
          <div className="border rounded-3xl px-8 py-2">1.1.2024</div>
          <button
            className={`btnHover w-[170px] h-[50px] rounded-3xl text-white bg-main py-2 px-8`}
          >
            Показать
          </button>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-12 gap-1">
        <div className=" btnHover cursor-pointer 3xl:w-[210px] h-[110px] flex flex-col justify-center px-3 md:col-span-3 col-span-6 py-3 text-white adminPanalCard rounded-md shadow-lg">
          <p className="font-bold text-[14px]">Total Sales</p>
          <div className="flex gap-x-3 mt-2 items-end">
            <p className="text-4xl font-bold">{orders.totalSales}</p>
          </div>
        </div>
      </div>
      <div className="mt-10 w-full">
        <ChartMy janOrders={orders.totalSales} />
      </div>
    </div>
  );
}
