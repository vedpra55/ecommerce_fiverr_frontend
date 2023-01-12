import React, { useState } from "react";
import Image from "next/image";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Modal from "../../components/Modal/modal";
import { imageUrl } from "../../helper/imageUrl";

export default function ProductImages({ images, name }) {
  const [selectedImage, setSelectedImage] = useState(0);

  const [isOpen, setOpen] = useState(false);

  function ImageSwiper(type) {
    if (type === "next") {
      if (selectedImage + 1 === images.length) {
        setSelectedImage(0);
      } else {
        setSelectedImage(selectedImage + 1);
      }
    }
    if (type === "prev") {
      if (selectedImage !== 0) {
        setSelectedImage(selectedImage - 1);
      }
    }
  }

  return (
    <div className="col-span-12 md:col-span-6 flex flex-col">
      <div className="relative w-full h-[30rem] md:h-[40rem] 3xl:h-[566px] 3xl:w-[566px]">
        <Image
          onClick={() => setOpen(true)}
          className="w-full h-full object-cover border cursor-pointer rounded-lg"
          alt={name}
          sizes="100vh"
          fill
          src={
            images?.length === 0
              ? "/assets/product1.png"
              : imageUrl(images[selectedImage])
          }
        />
        <div className=" absolute px-5 top-[15rem] text-white">
          <button
            className="bg-main p-3 rounded-full btnHover"
            onClick={() => ImageSwiper("prev")}
          >
            <SlArrowLeft />
          </button>
        </div>
        <div className=" absolute px-5 top-[15rem]  right-0 text-white">
          <button
            className="bg-main  p-3 rounded-full btnHover"
            onClick={() => ImageSwiper("next")}
          >
            <SlArrowRight />
          </button>
        </div>
      </div>

      <div className="flex mt-[30px] items-center justify-between gap-x-[20px] 3xl:mr-5">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          navigation
          loop={true}
          autoplay={true}
          pagination={{ clickable: true }}
        >
          {images.map((item, i) => (
            <SwiperSlide key={i} className="slide">
              <div className="slide-content">
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className="relative cursor-pointer w-full h-[172px] 3xl:w-[172px]"
                >
                  <Image
                    className="w-full cursor-pointer h-full object-cover border rounded-lg"
                    alt={name}
                    sizes="100vh"
                    fill
                    src={imageUrl(item)}
                  />
                  <p>Loading...</p>
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Modal isOpen={isOpen} setIsOpen={setOpen}>
        <div className="w-80 h-[35rem] overflow-hidden md:w-[30rem] md:h-[50rem]">
          <div className=" relative w-full h-full">
            <Image
              className="w-full  h-full object-cover border rounded-lg"
              alt={name}
              sizes="100vh"
              fill
              src={imageUrl(images[selectedImage])}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}
