import { useContext } from "react";
import { ShopContext } from "../context";
import GoodsItem from "./GoodsItem";

const GoodsList = () => {
  const { goods = [] } = useContext(ShopContext);

  if (!goods.length) {
    <h3>No Gooods</h3>;
  }

  return (
    <div className="items">
      {goods.map((item) => (
        <GoodsItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default GoodsList;
