import React from 'react';
import './Product.css'

const Product = ({ product }) => {  
  return (
    <div className="event_product">
        {/* 상품 이미지 */}
        <div className="img-container">
          <img
            src={product.image_path}
            alt={product.product_name}
            className="card-img"  // 이미지 스타일 적용
          />
        </div>
        {/* 장바구니 버튼 */}
        <button className="card-button">
          🛒 담기
        </button>
        <p className='product_detail'>{product.details.head_bot}</p>
        {/* 상품 이름 */}
        <h3 className="card-name">
          {product.product_name}
        </h3>
        {/* 할인율과 할인된 가격 */}
        <p className="card-price-info">
          {product.details.price_salerate && (
            <span className="card-price-salerate">
              {product.details.price_salerate}
            </span>
          )}
          <span className="card-price-main">
            {product.details.price_main}원
          </span>
          {/* 기존 가격, price_salerate가 있는 경우에만 표시 */}
          {product.details.price_salerate && product.details.price_salerate !== "" && (
            <span className="card-price-prev">
              {product.details.price_prev}
            </span>
          )}
        </p>
      </div>
  );
}

export default Product;