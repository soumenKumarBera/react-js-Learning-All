import "./App.css";
import ErrorMsg from "./componets/ErrorMsg";
import FoodItem from "./componets/FoodItme";

function App() {
  let foodItem = ["Dal", "sobji", "misti", "panir", "milk"];
  // let foodItem = [];


  return (
    <>
      <h1>Healthy Food</h1>
      <ErrorMsg items = {foodItem}></ErrorMsg>
      <FoodItem items={foodItem}></FoodItem>
    </>
  );
}

export default App;
