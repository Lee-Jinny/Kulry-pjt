import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import products from "../kulry_products.json"; 
import Card from './Card';  // Card 컴포넌트 임포트
import './Cardlist.css'

const Cardlist = () => {
  const filteredProducts = products.filter(
    (product) => product.category_number === 910
  );

  return (
    <>
      <div className="title">
        <h2 className="main_title">👑올해 마지막 컬리픽 특가</h2>
        <p className="sub_title">놓치지 말고 담아가세요.</p>
      </div>

      <Swiper
        spaceBetween={0}
        slidesPerView={4}
        navigation
        loop={true}
        modules={[Navigation]}
      >
        {filteredProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <Card item={product} />  {/* Card 컴포넌트에 product 전달 */}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Cardlist;
