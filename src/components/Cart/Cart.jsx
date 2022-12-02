
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from "../../features/Cart/cartSlice";

const Cart = () => {
    const {products} =useSelector(state =>state.cart)
    const dispatch = useDispatch()

  // const totalPrice = () => {
  //   let total = 0;
  //   products.forEach((item) => {
  //     total += item.quantity * item.price;
  //   });
  //   return total.toFixed(2);
  // };
  const calcTotalPrice =(products)=>{
    return products.reduce((sum,obj)=>{
         return (obj.price*obj.quantity)+sum
     },0)
 }
 

  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {products.map((item,i) => (
        <div className="item" key={i}>
          <img src={import.meta.env.VITE_APP_API_UPLOAD_URL+item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc}</p>
            <div className="price">
              {item.quantity} x {item.price} $
            </div>
          </div>
          <DeleteOutlinedIcon
            className="delete"
            onClick={()=>dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>${calcTotalPrice(products).toFixed(2)}</span>
      </div>
      <button >PROCEED TO CHECKOUT</button>
      <span className="reset" onClick={()=>dispatch(resetCart())} >
        Reset Cart
      </span>
    </div>
  );
};

export default Cart;