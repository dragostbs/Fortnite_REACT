import { useContext } from "react";
import { ShopContext } from "../context";

const Cart = () => {
  const { order, handleBasketShow } = useContext(ShopContext);
  const quantity = order.length;

  return (
    <div
      onClick={handleBasketShow}
      className="cart light-blue darken-4 white-text"
    >
      <i className="material-icons">shopping_cart</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
};

export default Cart;
