import { NavBar, Footer, Breadcrumbs } from "../../components";
import { useRouter } from "next/router";
import { useAuthContext } from "../../context/authContext";
import React, { useEffect, useState } from "react";

import Clients from "../../pageComponents/admin/clients";
import AdminPanal from "../../pageComponents/admin/adminPanal";
import EditClient from "../../pageComponents/admin/editClient";
import PurchaseHistory from "../../pageComponents/admin/purchaseHistory";

export default function AdminPage() {
  const router = useRouter();
  const tab = router.query?.tab || null;
  const [selectedTab, setSelectedTab] = useState(tab ? parseInt(tab) : 0);
  const { user, isLoading } = useAuthContext();
  const tabList = [
    {
      name: "Админ панель",
      component: <AdminPanal user={user} />,
    },
    {
      name: "Заказы",
      component: <PurchaseHistory user={user} />,
    },
    {
      name: "Товары",
      component: <Clients user={user} />,
    },
    {
      name: "Клиенты",
      component: <EditClient />,
    },
  ];

  useEffect(() => {
    if (isLoading === false) {
      if (!user?.name) {
        router.push("/account");
      }
      if (!user?.isAdmin) {
        router.push("/");
      }
    }
  }, [user, isLoading]);

  if (isLoading) return null;
  if (!user?.isAdmin) return null;

  return (
    <main>
      <NavBar />
      <section className="mt-5 mb-20 myContainer">
        <Breadcrumbs text="Хлебные крошки" />
        <div className="grid mt-[30px] grid-cols-12 gap-y-10 md:gap-x-5 xl:gap-x-0 3xl:gap-x-28 items-start">
          <div className="col-span-12 md:col-span-4 3xl:col-span-3 bg-white w-full h-[225px] xl:w-[300px] py-[15px] rounded-lg myshadow">
            {tabList.map((item, i) => (
              <React.Fragment key={i}>
                <p
                  onClick={() => setSelectedTab(i)}
                  className={`px-5  hover:text-main text-[20px] cursor-pointer ${
                    i === selectedTab && "font-semibold"
                  }`}
                >
                  {item.name}
                </p>
                {i !== 3 && (
                  <div className="my-3 border-[#E4E4E4] border-[1px] w-full"></div>
                )}
              </React.Fragment>
            ))}
          </div>
          {tabList[selectedTab].component}
        </div>
      </section>
      <Footer />
    </main>
  );
}
