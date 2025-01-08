import React from 'react';
import './card.css';  // card.css 파일을 임포트

const Card = ({ item }) => {
  return (
    <div className="card-container">
      {/* 상품 이미지 */}
      <div className="image-container">
        <img
          src={item.image_path}
          alt={item.product_name}
          className="card-image"  // 이미지 스타일 적용
        />
      </div>
      {/* 장바구니 버튼 */}
      <button className="card-button">
        🛒 담기
      </button>
      {/* 상품 이름 */}
      <h3 className="card-name">
        {item.product_name}
      </h3>
      {/* 기존 가격, price_salerate가 있는 경우에만 표시 */}
      {item.details.price_salerate && item.details.price_salerate !== "" && (
        <p className="card-price-prev">
          {item.details.price_prev}
        </p>
      )}
      {/* 할인율과 할인된 가격 */}
      <p className="card-price-info">
        {item.details.price_salerate && (
          <span className="card-price-salerate">
            {item.details.price_salerate}
          </span>
        )}
        <span className="card-price-main">
          {item.details.price_main}원
        </span>
      </p>
    </div>
  );
};

export default Card;
