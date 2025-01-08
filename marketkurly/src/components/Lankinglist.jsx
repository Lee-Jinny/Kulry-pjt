import React, {useState} from "react";
import Lankingcard from "./Lankingcard";
import './Lankinglist.css'; 
import products from "../kulry_products.json";

const Lankingcardlist = () => {
  // category_number 상태 관리
  const [selectedCategory, setSelectedCategory] = useState(907);

  // 선택된 카테고리 번호에 따라 상품 필터링
  const filteredProducts = products.filter(
    (product) => product.category_number === selectedCategory
  );

  // 카테고리 클릭 핸들러
  const handleCategoryClick = (categoryNumber) => {
    setSelectedCategory(categoryNumber);
  };

  return (
    <>
      <div className="category_container">
        <h2>오늘의 카테고리 랭킹</h2>
        <div className="category_list">
          {/* 클릭 이벤트로 category_number 변경 */}
          <p onClick={() => handleCategoryClick(909)}>해산물Top50</p>
          <p onClick={() => handleCategoryClick(912)}>특별식Top50</p>
          <p onClick={() => handleCategoryClick(910)}>육류Top50</p>
          <p onClick={() => handleCategoryClick(907)}>반찬Top50</p>
          <p onClick={() => handleCategoryClick(911)}>간편식Top50</p>
          <p onClick={() => handleCategoryClick(908)}>과일Top50</p>
          <p onClick={() => handleCategoryClick(913)}>오일Top50</p>
          <p onClick={() => handleCategoryClick(914)}>음료Top50</p>
        </div>
        <div className="lanking-card-list">
          {filteredProducts.map((product, index) => (
            <Lankingcard key={product.id} item={product} index={index + 1} />
          ))}
        </div>
      </div>
      
    </>
  );
};

export default Lankingcardlist;

