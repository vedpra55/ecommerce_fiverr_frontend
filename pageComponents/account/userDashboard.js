import React, { useState } from "react";
import { useRouter } from "next/router";
import ProfileEdit from "./profileEdit";
import OrderHistory from "./orderHistory";

export default function UserDashboard({ user, logout }) {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState(
    parseInt(router.query.tab) || 0
  );
  const tabList = [
    {
      name: "Профиль",
      component: <ProfileEdit user={user} />,
    },
    {
      name: "История заказво",
      component: <OrderHistory user={user} />,
    },
  ];
  return (
    <div>
      <div className="mt-5 flex gap-x-20">
        <button onClick={logout}>Logout</button>
        <p>{user.name}</p>
      </div>

      <div className="grid mt-5 grid-cols-12 gap-y-10 md:gap-x-10 3xl:gap-x-28 items-start">
        <div className="col-span-12 md:col-span-4 3xl:col-span-3 bg-white w-full h-[105px] lg:w-[300px] flex flex-col justify-center rounded-lg myshadow">
          {tabList.map((item, i) => (
            <>
              <p
                onClick={() => setSelectedTab(i)}
                key={i}
                className={`px-5 hover:text-main text-[20px] cursor-pointer ${
                  i === selectedTab && "font-semibold"
                }`}
              >
                {item.name}
              </p>
              {i !== 1 && (
                <div
                  key={item.name}
                  className="my-3 border-[#E4E4E4] border-[1px] w-full"
                ></div>
              )}
            </>
          ))}
        </div>
        {tabList[selectedTab].component}
      </div>
    </div>
  );
}
