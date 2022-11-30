import React from "react";
import "./List.scss";
import Card from "../Card/Card";


const List = () => {


  return (
    <div className="list">
        {[...new Array(4)].map((el,i)=>(
        <Card key={i} item={i}/>
       ))}
    </div>
  );
};

export default List