import Image from "next/image";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { GiShoppingCart } from "react-icons/gi";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";

const SizeModal = dynamic(() => import("../Modal/sizeModal"), {
  loading: () => "Loading...",
});

import { toast } from "react-hot-toast";
import { useCart } from "react-use-cart";

import { adaptPrice } from "../../helper/adpatPrice";
import { imageUrl } from "../../helper/imageUrl";

export default function ProductCard({ product }) {
  const [isOpen, setOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const [sizeAvailable, setSizeAvailable] = useState([]);
  const { addItem } = useCart();

  function handleAddCartWithSize() {
    if (selectedSize !== null) {
      const data = {
        name: product.productName,
        brand: product.productBrand,
        image: product?.image,
        price: product.price,
        productId: product._id,
        id: product._id + selectedSize,
        selectedSize: product.productDetails.sizes[selectedSize].sizeName,
      };
      addItem(data);
      setOpen(false);
      toast.success("Product added to cart");
    } else {
      toast.error("Please select size");
    }
  }

  function checkSizeAvailabel() {
    const sizes = product.productDetails.sizes;
    let sizeAvailables = [];
    if (sizes.length) {
      sizes.map((item, i) => {
        if (item.sizeAvailable) {
          sizeAvailables.push(item);
        }
      });
      setSizeAvailable(sizeAvailables);
    } else {
      setSizeAvailable([]);
    }
  }

  useEffect(() => {
    checkSizeAvailabel();
  }, [product]);

  return (
    <>
      <div
        className={`cardShadow cardHover h-[33rem]  w-full 3xl:w-[280px]  pb-2`}
      >
        <Link href={`/${product._id}?brand=${product.productBrand}`}>
          <div className="relative w-full h-[390px] rounded-t-lg">
            <Image
              fill
              sizes="100vh"
              className="w-full h-full object-fill rounded-t-lg"
              src={
                product?.image
                  ? imageUrl(product.image)
                  : "https://res.cloudinary.com/dtme6qv4c/image/upload/v1673353400/fiverr%20zara/product1.png"
              }
              alt={product.productName}
            />
            <div className=" absolute h-8 inset-0 px-2 py-2 flex justify-between">
              <div className="flex items-center  gap-x-1 text-[13px]">
                {sizeAvailable.length !== 0 ? (
                  <div className="rounded-full p-1 bg-[#8CC851]"></div>
                ) : (
                  <div className="rounded-full p-1 bg-red-500"></div>
                )}

                <p></p>
              </div>
              <div className="flex items-center">
                <AiFillStar className=" text-main" />
                <p>{`(${5})`}</p>
              </div>
            </div>
          </div>
        </Link>
        <div className="bg-white gap-y-2 flex flex-col justify-center items-center py-2">
          <p className=" text-center px-5 md:px-10 font-medium truncate w-36 md:w-56">
            {product.productName}
          </p>
          <div className="flex items-center gap-x-3">
            <p className=" font-semibold">{adaptPrice(product.price)} ₽</p>
          </div>

          {sizeAvailable.length !== 0 ? (
            <button
              onClick={() => setOpen(true)}
              className={` btnHover hover:text-white border lg:mx-0  xl:w-[228px] 2xl:h-[44px]    border-main text-main flex justify-center items-center rounded-3xl gap-x-3 md:gap-x-[13px] py-2 px-2 md:px-4`}
            >
              <GiShoppingCart className=" md:text-xl" />
              <p className="text-xs text-[14px] md:text-[15px] whitespace-nowrap">
                Добавить в корзину
              </p>
            </button>
          ) : (
            <p className=" text-red-400 font-medium">Out Of Stock</p>
          )}
        </div>
      </div>
      {product?.productDetails?.sizes?.length !== 0 && isOpen && (
        <SizeModal
          selectSize={selectedSize}
          setSelectedSize={setSelectedSize}
          setIsOpen={setOpen}
          isOpen={isOpen}
          sizeData={product.productDetails.sizes}
          handleAddCartWithSize={handleAddCartWithSize}
        />
      )}
    </>
  );
}
