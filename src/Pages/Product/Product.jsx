import React, { useState } from 'react'
import "./Product.scss"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import { useGetOneProductQuery } from '../../features/Products/productsApiSlice';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../features/Cart/cartSlice';





const Product = () => {
  const [selectImg, setSelectImg] = useState("img")
  const [quantity, setQuantity] = useState(1)
  const {id} =useParams()
  const {data}=useGetOneProductQuery({id},{
    pollingInterval: 15000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true
  })

  const products =useSelector(state =>state.cart)
    const dispatch = useDispatch()

 


  return (
    <div className='product'>
      <div className='left'>
        <div className='images'>
          <img src={import.meta.env.VITE_APP_API_UPLOAD_URL+data?.data?.attributes?.img?.data?.attributes?.url} alt="" onClick={()=>setSelectImg("img")}/>
          <img src={import.meta.env.VITE_APP_API_UPLOAD_URL+data?.data?.attributes?.img2?.data?.attributes?.url} alt="" onClick={()=>setSelectImg("img2")}/>
        </div>
        <div className="mainImg">
          <img src={import.meta.env.VITE_APP_API_UPLOAD_URL+data?.data?.attributes[selectImg]?.data?.attributes?.url} alt="" />
        </div>
      </div>
      <div className="right">
          <h1>{data?.data?.attributes?.title}</h1>
          <span>{data?.data?.attributes?.price}$</span>
          <p>
           {data?.data?.attributes?.desc}
          </p>
          <div className="quantity">
            <button onClick={()=>setQuantity(prev=>prev===1 ?1 : prev-1)}>-</button>
            {quantity}
            <button onClick={()=>setQuantity(prev=>prev+1)}>+</button>
          </div>
          <button
              className="add"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data.data.id,
                    title: data.data.attributes.title,
                    desc: data.data.attributes.desc,
                    price: data.data.attributes.price,
                    img: data.data.attributes.img.data.attributes.url,
                    quantity,
                  })
                )
              }
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