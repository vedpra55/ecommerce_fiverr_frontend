import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ProductCard } from "../../components";
import { useMediaQuery } from "react-responsive";

export default function SimilarProducts({ products }) {
  const isMobile = useMediaQuery({ maxWidth: 600 });
  const isTab = useMediaQuery({ minWidth: 601, maxWidth: 900 });
  return (
    <div className="mt-[100px]">
      <h1 className="text-3xl font-bold">Похожие товары</h1>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={20}
        slidesPerView={isMobile ? 2 : isTab ? 3 : 4}
        navigation
        loop={true}
        autoplay={true}
        pagination={{ clickable: true }}
      >
        {products.data.map((item) => (
          <SwiperSlide key={item._id} className="slide pt-8 pb-10">
            <div className="slide-content">
              <ProductCard product={item} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
