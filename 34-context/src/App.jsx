import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMsg from "./components/WelcomMse";
import { TodoitemsContext } from "./store/Todo-item-store";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (newName, Date) => {
    // let newTodoItem = [...todoItems, { name: newName, dueDate: Date }];
    // setTodoItems(newTodoItem);

    setTodoItems((currValue) => [
      ...currValue,
      { name: newName, dueDate: Date },
    ]);
  };

  const deleteItem = (tododitemName) => {
    const currentTodoItem = todoItems.filter(
      (item) => item.name !== tododitemName,
    );
    setTodoItems(currentTodoItem);
  };

  const obj = [{ name: "Milk", dueDate: "04-5-200" }];

  return (
    <TodoitemsContext.Provider value={{ todoItems, addNewItem, deleteItem }}>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMsg></WelcomeMsg>
        <TodoItems></TodoItems>
      </center>
    </TodoitemsContext.Provider>
  );
}

export default App;
