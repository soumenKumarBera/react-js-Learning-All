import "./App.css";
import Container from "./componets/Container";
import ErrorMsg from "./componets/ErrorMsg";
import FoodItem from "./componets/FoodItme";
import FoodInpute from "./componets/FoodInpute";
import { useState } from "react";

function App() {
  let [foodItem, setFoodItem] = useState(["Dal", "sobji", "misti"]);

  const onClickChange = (event) => {
    if (event.key == "Enter") {
      let setNewFoodItem = event.target.value;
      event.target.value = "";
 
                      // ...foodItem => ar mane current valuer sate notun value add kora
      let newItem = [...foodItem, setNewFoodItem];

      setFoodItem(newItem);
    }
    // console.log(event);
    // console.log(event.target.value);
  };

  return (
    <Container>
      <h1>Healthy Food</h1>
      <FoodInpute handleOnChangeClick={onClickChange}></FoodInpute>
      <ErrorMsg items={foodItem}></ErrorMsg>

      <FoodItem items={foodItem}></FoodItem>
    </Container>
  );
}

export default App;
