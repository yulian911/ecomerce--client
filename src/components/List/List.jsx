import React from "react";
import "./List.scss";
import Card from "../Card/Card";
import { useGetAllProductsCategoriesQuery } from "../../features/Products/productsApiSlice";
import useFetch from "../../hook/useFetch";


const List = ({ subCats, maxPrice, sort, catId })=> {
  const {
    data,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetAllProductsCategoriesQuery({catId,subCats ,sort,maxPrice},{
    pollingInterval: 15000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true
  })


  if(isLoading){
    return <p>Loading...</p>
  }
  // const { data, loading, error } = useFetch(
  //   `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
  //     (item) => `&[filters][sub_categories][id][$eq]=${item}`
  //   )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  // );

  return (
    <div className="list">
        {data?.data?.map((el,i)=>(
          <Card key={el.id} item={el}/>
       ))}
    </div>
  );
};

export default List