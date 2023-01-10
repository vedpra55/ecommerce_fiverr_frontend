import React from "react";
import Image from "next/image";
import Link from "next/link";
import Modal from "./modal";
import { imageUrl } from "../../helper/imageUrl";

export default function OrderProductModal({ isOpen, setOpen, products }) {
  return (
    <Modal isOpen={isOpen} setIsOpen={setOpen}>
      <div className=" w-[350px] h-full md:w-[540px]  rounded-[20px] bg-white py-5 md:py-[20px] px-5 md:px-[70px]">
        <div className="flex justify-center">
          <p className="text-[32px]  font-bold">Products</p>
        </div>
        <div className="flex flex-col gap-y-5 mt-5">
          {products.map((item) => (
            <Link href={`/${item.productId}?brand=${item.brand}`} key={item.id}>
              <div className="flex items-start gap-x-5">
                <div className=" relative w-24 h-36">
                  <Image
                    fill
                    sizes="20vh"
                    className="w-full h-full object-fill rounded-t-lg"
                    src={
                      item?.image
                        ? imageUrl(item.image)
                        : "/assets/product1.png"
                    }
                    alt={item.name}
                  />
                  <p>Loading...</p>
                </div>
                <div>
                  <p>{item.name}</p>
                  <p>Brand : {item.brand}</p>
                  <p>Size : {item.selectedSize}</p>
                  <p>Quantity : {item.quantity}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Modal>
  );
}
