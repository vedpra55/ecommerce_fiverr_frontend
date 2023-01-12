import { NavBar, Footer, Breadcrumbs } from "../../components";
import OrderItemTable from "../../pageComponents/placeOrder/orderItemTable";
import OrderItemCard from "../../pageComponents/placeOrder/orderItemCard";

import { useEffect, useState } from "react";
import { useAuthContext } from "../../context/authContext";
import { useCart } from "react-use-cart";
import PlaceOrderCard from "../../pageComponents/placeOrder/placeOrderCard";
import { adaptPrice } from "../../helper/adpatPrice";
import { useRouter } from "next/router";

export default function PlaceOrderPage() {
  const header = [
    {
      name: "Фото",
      col: "col-span-2",
    },
    {
      name: "Товар",
      col: "col-span-3",
    },
    {
      name: "Размер",
      col: "col-span-2",
    },
    {
      name: "Количество",
      col: "col-span-3",
    },
    {
      name: "Цена",
      col: "col-span-2",
    },
  ];
  const router = useRouter();
  const [isClient, setClient] = useState(false);
  const { user, isLoading } = useAuthContext();
  const { items, cartTotal } = useCart();

  useEffect(() => {
    setClient(true);
  }, []);

  useEffect(() => {
    if (isLoading === false) {
      if (!user?.name) {
        router.push("/account");
      }
      if (!user?.address?.zipCode) {
        router.push("/account");
      }
    }
  }, [user, isLoading]);

  if (!isClient) return null;
  if (isLoading) return null;
  if (!user?.address?.zipCode) return null;

  return (
    <main>
      <NavBar />
      <section className="mt-[20px] myContainer">
        <Breadcrumbs text={"Хлебные крошки"} />
        <h2 className="font-bold text-3xl mt-[30px]">Разместить заказ</h2>
        {user && (
          <div className="grid grid-cols-12 items-start mt-5 mb-10 gap-x-5">
            <div className="col-span-12 md:col-span-8 ">
              <p className="font-semibold mb-[10px] text-xl">Адрес доставки</p>
              <p>
                Имя: <span className="ml-2">{user.name}</span>
              </p>
              <p>
                Телефон: <span className="ml-2">{user.phoneNumber}</span>
              </p>
              <p>
                Город: <span className="ml-2">{user.address.city}</span>
              </p>
              <p>
                Индекс:<span className="ml-2">{user.address.zipCode}</span>{" "}
              </p>
              <p>
                Страна:<span className="ml-2">{user.address.state}</span>{" "}
              </p>
              <div className="border w-full my-[30px] border-[#E4E4E4]"></div>
              <p className="text-xl font-semibold">Спосос оплаты</p>
              <p className="mt-[10px]">Оплата картой на сайте</p>
              <div className="border w-full my-5 border-[#E4E4E4]"></div>
              <p className="text-xl font-semibold mb-[10px] md:mb-0">
                Список товаров
              </p>
              <div className="hidden md:grid mb-5 grid-cols-12 gap-x-5 mt-[10px]">
                {header.map((item, i) => (
                  <div
                    className={`w-full  font-semibold text-[18px] ${item.col}`}
                    key={i}
                  >
                    <p>{item.name}</p>
                  </div>
                ))}
              </div>

              {items.map((item, i) => (
                <>
                  <OrderItemTable key={item.id} item={item} />
                  <OrderItemCard key={i} item={item} />
                </>
              ))}
            </div>
            <PlaceOrderCard
              cartItem={items}
              user={user}
              cartTotal={adaptPrice(cartTotal)}
            />
          </div>
        )}
      </section>
      <Footer />
    </main>
  );
}
