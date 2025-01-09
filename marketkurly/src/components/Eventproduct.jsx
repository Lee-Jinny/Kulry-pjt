import React, { useState, useEffect } from "react";
import products from "../kulry_products.json";
import './Eventproduct.css'
import Product from "./Product";

const Eventproduct = () => {  
  const [timeLeft, setTimeLeft] = useState("");

  // 남은 시간 계산 함수
  const calculateTimeLeft = () => {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);
    
    const difference = midnight - now;
    
    const hours = Math.floor(difference / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  // 1초마다 시간 업데이트
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // 컴포넌트 언마운트 시 타이머 정리
    return () => clearInterval(timer);
  }, []);

  // 40% 이상 할인되는 상품만 필터링
  const filterHighDiscountProducts = () => {
    return products.filter(product => {
      const saleRate = parseInt(product.details.price_salerate);
      return !isNaN(saleRate) && saleRate >= 40;
    });
  };

  // 필터링된 상품 중 랜덤하게 2개 선택
  const getRandomProducts = (filteredProducts, count) => {
    const selectedProducts = [];
    const productsCopy = [...filteredProducts];
    
    // 필터링된 상품이 2개 미만인 경우 처리
    const selectCount = Math.min(count, productsCopy.length);
    
    for (let i = 0; i < selectCount; i++) {
      const randomIndex = Math.floor(Math.random() * productsCopy.length);
      selectedProducts.push(productsCopy[randomIndex]);
      productsCopy.splice(randomIndex, 1);
    }
    
    return selectedProducts;
  };

  const highDiscountProducts = filterHighDiscountProducts();
  const randomProducts = getRandomProducts(highDiscountProducts, 2);

  return (
    <div className="event_container">
      <div className="event_info">
        <h3 className="main_title">✨랜덤 일일특가</h3>
        <p className="sub1">놓칠 수 없는 기회!🍀</p>
        <p className="time-left">⏰{timeLeft}</p>
        <p className="sub2">망설이면 늦어요!</p>
      </div>
      <div className="products-wrapper">
        {randomProducts.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Eventproduct;