/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { NavBar, Footer, Breadcrumbs } from "../../components";
import CartItemTable from "../../pageComponents/cart/cartItemTable";
import CartItemCard from "../../pageComponents/cart/cartItemCard";
import AddressModal from "../../components/Modal/addressModal";
import { Fragment, useEffect, useState } from "react";
import { useAuthContext } from "../../context/authContext";
import { useCart } from "react-use-cart";
import { useRouter } from "next/router";

import { adaptPrice } from "../../helper/adpatPrice";

export default function CartPage() {
  const header = [
    {
      name: "Фото",
      col: "col-span-1",
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
      col: "col-span-2",
    },
    {
      name: "Цена",
      col: "col-span-2",
    },
    {
      name: "Всего",
      col: "col-span-2",
    },
  ];

  const router = useRouter();
  const [isClient, setClient] = useState(false);
  const { user, isLoading } = useAuthContext();
  const { items, cartTotal } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  function PlaceOrder() {
    if (user) {
      if (
        !user?.address?.zipCode ||
        !user?.address?.city ||
        !user?.address?.state ||
        !user?.address?.landMark
      ) {
        setIsOpen(true);
      } else {
        router.push("/placeOrder");
      }
    } else {
      router.push("/account");
    }
  }

  useEffect(() => {
    setClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <main>
      <NavBar />
      <section className="mt-[20px] myContainer">
        <p>{isLoading ? "Loading..." : user?.name}</p>
        <Breadcrumbs text={"Хлебные крошки"} />

        <h3 className="font-bold text-3xl mt-[30px]">Корзина</h3>
        {items.length != 0 ? (
          <>
            <div className="hidden md:grid grid-cols-12 mt-[20px] gap-x-5">
              {header.map((item, i) => (
                <div
                  className={`   w-full  font-semibold text-[18px] ${item.col}`}
                  key={i}
                >
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
            <div className="border w-full my-[20px] border-[#979797]"></div>
            {items.map((item, i) => (
              <Fragment key={item.id}>
                <CartItemTable item={item} />
                <CartItemCard item={item} />
              </Fragment>
            ))}
            <div className="flex justify-end gap-x-3 sm:gap-x-5 items-center mb-[95px]">
              <p className="text-[14px] text-[#303030] whitespace-nowrap">
                Всего к оплате:
              </p>
              <p className=" font-semibold md:text-xl text-main whitespace-nowrap">
                {adaptPrice(cartTotal)} ₽
              </p>
              <button
                onClick={PlaceOrder}
                className={` btnHover text-white md:w-[230px] md:ml-5 md:h-[50px] flex justify-center items-center whitespace-nowrap bg-main px-5 md:px-8 py-2 rounded-[90px]`}
              >
                <p>Оплатить заказ</p>
              </button>
            </div>
          </>
        ) : (
          <div className="flex justify-center mt-10">
            <p className=" text-2xl font-semibold">No Item</p>
          </div>
        )}
      </section>
      <Footer />
      {isOpen && (
        <AddressModal user={user} isOpen={isOpen} setIsOpen={setIsOpen} />
      )}
    </main>
  );
}
