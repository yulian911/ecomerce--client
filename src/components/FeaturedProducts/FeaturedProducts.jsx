import React from "react";
import Card from "../Card/Card";
// import Card from "../Card/Card";
import "./FeaturedProducts.scss";


const FeaturedProducts = () => {
  // const { data, loading, error } = useFetch(
  //   `/products?populate=*&[filters][type][$eq]=${type}`
  // );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1> products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
      <div className="bottom">
       {[...new Array(4)].map((el,i)=>(
        <Card key={i} item={i}/>
       ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;