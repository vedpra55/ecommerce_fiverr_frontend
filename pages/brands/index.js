import { Breadcrumbs, NavBar } from "../../components";
import Image from "next/image";

export default function BrandsPage() {
  const data = [
    {
      imgUrl: "/assets/brand1.png",
    },
    {
      imgUrl: "/assets/brand2.png",
    },
    {
      imgUrl: "/assets/brand3.png",
    },
    {
      imgUrl: "/assets/brand4.png",
    },
    {
      imgUrl: "/assets/brand1.png",
    },
    {
      imgUrl: "/assets/brand2.png",
    },
    {
      imgUrl: "/assets/brand3.png",
    },
    {
      imgUrl: "/assets/brand4.png",
    },
    {
      imgUrl: "/assets/brand1.png",
    },
    {
      imgUrl: "/assets/brand2.png",
    },
    {
      imgUrl: "/assets/brand3.png",
    },
    {
      imgUrl: "/assets/brand4.png",
    },
  ];

  return (
    <main>
      <NavBar />
      <section className="myContainer mt-5 mb-10">
        <Breadcrumbs text={"Хлебные крошки"} />
        <h2 className="font-bold text-3xl mt-5">Все бренды</h2>
        <div className="grid grid-cols-12 gap-5 mt-5 ">
          {data.map((item, i) => (
            <div
              className={`cardHover  w-full  cursor-pointer cardShadow 3xl:w-[280px] 3xl:h-[130px] relative col-span-6 md:col-span-3 lg:col-span-3 h-28 md:h-36 bg-white shadow-md rounded-lg`}
              key={item.imgUrl}
            >
              <Image
                className="w-full h-full object-contain px-5"
                fill
                sizes="30vh"
                alt="brands"
                src={item.imgUrl}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
