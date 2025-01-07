import React from "react";
import Lankingcard from "./Lankingcard";
import './Lankinglist.css'; 
import products from "../kulry_products.json";

const Lankingcardlist = () => {
  const filteredProducts = products.filter(
    (product) => product.category_number === 907
  );

  return (
    <>
      <div>
        <h2>오늘의 카테고리 랭킹</h2>
        <div className="category_list">
          <p>간편식Top50</p>
          <p>간식Top50</p>
          <p>베이커리Top50</p>
          <p>반찬Top50</p>
          <p>유제품Top50</p>
          <p>주방Top50</p>
          <p>뷰티Top50</p>
        </div>
        <div className="lanking-card-list">
          {filteredProducts.map((product) => (
            <Lankingcard key={product.id} item={product} />
          ))}
        </div>
      </div>
      
    </>
  );
};

export default Lankingcardlist;

