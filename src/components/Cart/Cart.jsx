
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {


  // const totalPrice = () => {
  //   let total = 0;
  //   products.forEach((item) => {
  //     total += item.quantity * item.price;
  //   });
  //   return total.toFixed(2);
  // };

 

  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {[...new Array(2)].map((item,i) => (
        <div className="item" key={i}>
          <img src='' alt="" />
          <div className="details">
            <h1>title</h1>
            <p>desc</p>
            <div className="price">
              1 x 199$
            </div>
          </div>
          <DeleteOutlinedIcon
            className="delete"
            
          />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>200$</span>
      </div>
      <button >PROCEED TO CHECKOUT</button>
      <span className="reset" >
        Reset Cart
      </span>
    </div>
  );
};

export default Cart;