import { useContext } from "react";
import ShopContext from "../context";

const GoodsItem = ({ id, name, description, price, full_background }) => {
  const { addToBasket } = useContext(ShopContext);

  return (
    <div className="card">
      <div className="card-image">
        <img src={full_background} alt={name} />
      </div>
      <div className="card-content">
        <span className="card-title">{name}</span>
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button
          onClick={() => addToBasket({ id, name, price })}
          className="btn light-blue darken-4 white-text"
        >
          Buy
        </button>
        <span className="right price">{price} $</span>
      </div>
    </div>
  );
};

export default GoodsItem;
