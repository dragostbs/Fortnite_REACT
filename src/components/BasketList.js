import BasketItem from "./BasketItem";

const BasketList = ({
  order,
  handleBasketShow = Function.prototype,
  removeFromBasket = Function.prototype,
  increaseQuantity = Function.prototype,
  decreaseQuantity = Function.prototype,
}) => {
  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);

  return (
    <ul className="collection basket-list">
      <li className="collection-item active light-blue darken-4 white-text">
        Basket
      </li>
      {order.length ? (
        order.map((el) => (
          <BasketItem
            key={el.id}
            {...el}
            removeFromBasket={removeFromBasket}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
          />
        ))
      ) : (
        <li className="collection-item">Basket is empty</li>
      )}
      <li className="collection-item active light-blue darken-4 white-text collection">
        Whole Price: {totalPrice} $
        <button className="secondary-content btn btn-small light-blue darken-3 white-text">
          Proceed
        </button>
      </li>
      <i onClick={handleBasketShow} className="material-icons basket-close">
        close
      </i>
    </ul>
  );
};

export default BasketList;
