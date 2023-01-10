import { NavBar, Footer, Breadcrumbs } from "../../components";
import { MdEmail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";

export default function ContactUsPage() {
  const [icon, setIcon] = useState("/insta.png");
  return (
    <main>
      <NavBar />
      <section className="myContainer mt-5">
        <Breadcrumbs text={"Хлебные крошки"} />
        <h2 className="font-bold text-3xl mt-5">Наши контакты</h2>
        <div className="flex flex-wrap gap-y-10 gap-x-10 justify-between mt-5 mb-20 items-center">
          <div className="flex flex-wrap gap-y-4 gap-x-10">
            <div className="flex items-start gap-x-3">
              <div className="text-xl text-main pt-1">
                <MdEmail />
              </div>
              <div>
                <p className="font-medium ">example@info.com</p>
                <p className=" text-main underline">Написать нам</p>
              </div>
            </div>
            <div className="flex items-start gap-x-3">
              <div className="text-xl text-main pt-1">
                <FaTelegramPlane />
              </div>
              <div>
                <p className="font-medium ">+7 (800) 890-65-12</p>
                <p className=" ">c 10.00 до 22.00</p>
              </div>
            </div>
          </div>
          <div className="flex gap-x-5 items-center">
            <div className="relative w-14 h-14 ">
              <Image
                sizes="20vh"
                className="cursor-pointer"
                fill
                alt="whatsapp"
                src="/assets/whatsapp.png"
              />
            </div>
            <div
              className={` text-white linkHover     hover:text-main cursor-pointer flex justify-center items-center w-[50px] h-[50px]  bg-[#039BE5] rounded-full  text-3xl `}
            >
              <FaTelegramPlane />
            </div>
            <div
              className=" cursor-pointer"
              onMouseDown={() => setIcon("/instaActive.png")}
              onMouseUp={() => setIcon("/insta.png")}
              onMouseLeave={() => setIcon("/insta.png")}
              onMouseEnter={() => setIcon("/instaHover.png")}
            >
              <img className="w-[50px] h-[50px] " src={icon} alt="insta" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
