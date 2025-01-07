import React from 'react';
import './Lankingcard.css'; 

const Lankingcard = ({ item }) => {
  return (
    <div className="lankingcard-container">
      {/* 상품 이미지 */}
      <img
        src={item.image_path}
        alt={item.product_name}
        className="lankingcard-image"  // 이미지 스타일 적용
      />
      <h2>{item.id+1}</h2>
      {/* 상품 이름 */}
      <h3 className="lankingcard-name">
        {item.product_name}
      </h3>
      {/* 기존 가격, price_salerate가 있는 경우에만 표시 */}
      {item.details.price_salerate && item.details.price_salerate !== "" && (
        <p className="lankingcard-price-prev">
          {item.details.price_prev}
        </p>
      )}
      
      {/* 할인율과 할인된 가격 */}
      <p className="lankingcard-price-info">
        {item.details.price_salerate && (
          <span className="lankingcard-price-salerate">
            {item.details.price_salerate}
          </span>
        )}
        <span className="lankingcard-price-main">
          {item.details.price_main}원
        </span>
      </p>
      {/* 장바구니 버튼 */}
      <button className="lankingcard-button">
        🛒 담기
      </button>
    </div>
  );
};

export default Lankingcard;

