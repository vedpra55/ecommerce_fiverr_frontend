import React from "react";
import { GiShoppingCart } from "react-icons/gi";
import Modal from "./modal";

export default function SizeModal({
  setIsOpen,
  isOpen,
  selectSize,
  setSelectedSize,
  sizeData,
  handleAddCartWithSize,
}) {
  return (
    <Modal setIsOpen={setIsOpen} isOpen={isOpen}>
      <div className=" w-[350px] h-full md:w-[540px] rounded-[20px] bg-white py-5 md:py-[50px] px-5 md:px-[30px]">
        <div className="flex justify-center flex-wrap ">
          <p className="text-[32px]  font-bold">Выберите размер</p>
        </div>
        <div className="flex items-center flex-wrap justify-center mt-[30px] gap-y-4 gap-x-[20px]">
          {sizeData.map((item, i) => (
            <div key={item.sizeName}>
              <div
                disabled={true}
                onClick={() => {
                  item.sizeAvailable && setSelectedSize(i);
                }}
                className={`${
                  i === selectSize &&
                  "font-bold bg-[#0f6ea4] text-white cursor-pointer"
                } ${
                  !item.sizeAvailable &&
                  "bg-gray-200 text-gray-500 hover:bg-gray-400 cursor-default"
                } border cursor-pointer  btnHover hover:text-white w-[65px] h-[50px] flex justify-center items-center rounded-md`}
              >
                {item.sizeName}
              </div>
              {!item.sizeAvailable && (
                <p className="text-red-500 font-medium text-xs">Out Of Stock</p>
              )}
            </div>
          ))}
        </div>
        <div className=" mt-[30px] flex justify-center">
          <button
            onClick={handleAddCartWithSize}
            className={` btnHover hover:text-white text-main  w-[220px] h-[50px] border border-main  flex justify-center items-center rounded-3xl gap-x-3 md:gap-x-3 py-2  px-5`}
          >
            <GiShoppingCart className=" md:text-2xl" />
            <p className=" text-[15px] font-semibold whitespace-nowrap">
              Добавить в корзину
            </p>
          </button>
        </div>
      </div>
    </Modal>
  );
}
