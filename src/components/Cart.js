const Cart = ({ quantity = 0, handleBasketShow = Function.prototype }) => {
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
