const BasketItem = ({
  id,
  name,
  price,
  quantity,
  removeFromBasket = Function.prototype,
  increaseQuantity = Function.prototype,
  decreaseQuantity = Function.prototype,
}) => {
  return (
    <li className="collection-item">
      {name}{" "}
      <i
        onClick={() => decreaseQuantity(id)}
        className="material-icons basket-quantity"
      >
        remove
      </i>{" "}
      x{quantity}{" "}
      <i
        onClick={() => increaseQuantity(id)}
        className="material-icons basket-quantity"
      >
        add
      </i>{" "}
      = {price * quantity} $
      <span onClick={() => removeFromBasket(id)} className="secondary-content">
        <i className="material-icons blue-text basket-delete">close</i>
      </span>
    </li>
  );
};

export default BasketItem;
