import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import { useSelector } from "react-redux";

const SwiperComponent = () => {
  const data = useSelector((state) => state.productsReducer.data);
  return (
    <Swiper
      style={{ width: "80%" }}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={5}
      slidesPerView={6}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {data.slice(0, 9).map((item) => (
        <SwiperSlide key={item.id}>
          <img
            key={item.id}
            src={item.image}
            width={150}
            height={200}
            style={{
              marginLeft: 100,
              marginBottom: 30,
              marginTop: 20,
              border: "1px solid",
              borderRadius: 5,
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
