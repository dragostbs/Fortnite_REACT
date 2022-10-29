import GoodsItem from "./GoodsItem";

const GoodsList = ({ goods = [], addToBasket = Function.prototype }) => {
  if (!goods.length) {
    <h3>No Gooods</h3>;
  }

  return (
    <div className="items">
      {goods.map((item) => (
        <GoodsItem key={item.id} {...item} addToBasket={addToBasket} />
      ))}
    </div>
  );
};

export default GoodsList;
