import React from "react";
import products from "../kulry_products.json";
import './Eventproduct.css'

const Eventproduct = () => {  
  // 전체 제품 중 랜덤으로 하나 선택
 const randomIndex = Math.floor(Math.random() * products.length); // 0~71 사이의 랜덤 인덱스
 const randomProduct = products[randomIndex];

  return (
    <div className="event_container">
      <div className="event_info">
        <p>✨최저가 도전</p>
        <p>놓칠 수 없는 기회!</p>
        <p>시계</p>
        <p>망설이면 늦어요!</p>
      </div>
      <div className="event_product">
        {/* 상품 이미지 */}
        <div className="img-container">
          <img
            src={randomProduct.image_path}
            alt={randomProduct.product_name}
            className="card-img"  // 이미지 스타일 적용
          />
        </div>
        {/* 장바구니 버튼 */}
        <button className="card-button">
          🛒 담기
        </button>
        <p>{randomProduct.details.head_bot}</p>
        {/* 상품 이름 */}
        <h3 className="card-name">
          {randomProduct.product_name}
        </h3>
        {/* 할인율과 할인된 가격 */}
        <p className="card-price-info">
          {randomProduct.details.price_salerate && (
            <span className="card-price-salerate">
              {randomProduct.details.price_salerate}
            </span>
          )}
          <span className="card-price-main">
            {randomProduct.details.price_main}원
          </span>
          {/* 기존 가격, price_salerate가 있는 경우에만 표시 */}
          {randomProduct.details.price_salerate && randomProduct.details.price_salerate !== "" && (
            <span className="card-price-prev">
              {randomProduct.details.price_prev}
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default Eventproduct;