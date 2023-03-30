import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";

const FeaturedProducts = ({ type }) => {
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
          ratione aliquid distinctio repudiandae, hic doloribus earum voluptatem
          dicta totam vero?
        </p>
      </div>
      <div className="bottom">
        {/* {data.map((item) => (
          <Card item={item} key={item.id} />
        ))} */}
      </div>
    </div>
  );
};

export default FeaturedProducts;
