import React from "react";
import CartButton from "./cartButton";
import { AiOutlineClose } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";

export default function MobileMenu({ setMenu }) {
  return (
    <div className="lg:hidden absolute w-full z-10 inset-0">
      <div className="bg-white shadow-xl  py-7 px-5  ">
        <div className="flex justify-end">
          <AiOutlineClose onClick={() => setMenu(false)} className="" />
        </div>
        <div className="flex justify-start items-start flex-col gap-y-5">
          <div className="flex items-start gap-x-3">
            <div className="text-xl text-main pt-1">
              <MdEmail />
            </div>
            <div>
              <p className="font-medium ">example@info.com</p>
              <p className=" text-main underline">Написать нам</p>
            </div>
          </div>
          <CartButton />
          <div className="flex items-center gap-x-5">
            <div
              className={` text-white linkHover  hover:text-main cursor-pointer flex justify-center items-center w-[30px] h-[30px]  bg-[#039BE5] rounded-full  text-xl `}
            >
              <FaTelegramPlane />
            </div>
            <div className="cursor-pointer">
              <img
                className="w-[30px] h-[30px] "
                src={"/insta.png"}
                alt="insta"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
