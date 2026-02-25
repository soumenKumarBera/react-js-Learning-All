import Item from "./Item";

const FoodItem = ({ items }) => {
  return (
    <ul className="list-group ">
      {items.map((item) => (
        <Item
          foodItem={item}
          key={item}
          handleByButtonClick={() => console.log(`${item} brought`)}
        ></Item>
      ))}
    </ul>
  );
};

export default FoodItem;
