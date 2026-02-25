import { useContext } from "react";
import { TodoitemsContext } from "../store/Todo-item-store";

const WelcomeMsg = () => {
  const {todoItems} = useContext(TodoitemsContext);

  return todoItems.length == 0 && <h1>Enjoy your day</h1>;
};

export default WelcomeMsg;
