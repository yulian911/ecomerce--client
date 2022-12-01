import axios from "axios";
import React,{useEffect, useState} from "react";
import { useGetProductsQuery } from "../../features/Products/productsApiSlice";
import Card from "../Card/Card";
// import Card from "../Card/Card";
import "./FeaturedProducts.scss";


const FeaturedProducts = ({type}) => {
  // const { data, loading, error } = useFetch(
  //   `/products?populate=*&[filters][type][$eq]=${type}`
  // );

  const {
    data,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetProductsQuery({type},{
    pollingInterval: 15000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true
  })

  if(isLoading){
    return <p>Loading...</p>
  }

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1> {type}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
      <div className="bottom">
       {data && data?.data.map((el,i)=>(
        <Card key={i} item={el}/>
       ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;