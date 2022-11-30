import React, { useState } from 'react'
import "./Product.scss"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";


const images =[
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",

]


const Product = () => {
  const [selectImg, setSelectImg] = useState(0)
  const [quantity, setQuantity] = useState(1)
  return (
    <div className='product'>
      <div className='left'>
        <div className='images'>
          <img src={images[0]} alt="" onClick={()=>setSelectImg(0)}/>
          <img src={images[1]} alt="" onClick={()=>setSelectImg(1)}/>
        </div>
        <div className="mainImg">
          <img src={images[selectImg]} alt="" />
        </div>
      </div>
      <div className="right">
          <h1>title</h1>
          <span>199$</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, hic est corrupti nulla sunt velit? Debitis omnis repudiandae cumque officiis perferendis, sequi tenetur amet, eveniet ab mollitia, soluta sed dolorem.
          </p>
          <div className="quantity">
            <button onClick={()=>setQuantity(prev=>prev===1 ?1 : prev-1)}>-</button>
            {quantity}
            <button onClick={()=>setQuantity(prev=>prev+1)}>+</button>
          </div>
          <button
              className="add"
              // onClick={() =>
              //   dispatch(
              //     addToCart({
              //       id: data.id,
              //       title: data.attributes.title,
              //       desc: data.attributes.desc,
              //       price: data.attributes.price,
              //       img: data.attributes.img.data.attributes.url,
              //       quantity,
              //     })
              //   )
              // }
            >
              <AddShoppingCartIcon /> ADD TO CART
            </button>
            <div className="links">
              <div className="item">
                <FavoriteBorderIcon /> ADD TO WISH LIST
              </div>
              <div className="item">
                <BalanceIcon /> ADD TO COMPARE
              </div>
            </div>
            <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
      </div>
    </div>
  )
}

export default Product