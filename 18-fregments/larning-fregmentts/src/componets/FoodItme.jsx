import Item from "./Item";

const FoodItem = ({ items }) => {
  return (
    <ul className="list-group ">
      {items.map((item) => (
        <Item foodItem={item}></Item>
      ))}
    </ul>
  );
};

export default FoodItem;
