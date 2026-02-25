import { useContext } from "react";
import TodoItem1 from "./TodoItem1";
import { TodoitemsContext } from "../store/Todo-item-store";

const TodoItems = () => {
  const { todoItems } = useContext(TodoitemsContext);

  return (
    <>
      <div className="item-container">
        {todoItems.map((item) => (
          <TodoItem1
            todoName={item.name}
            todoDate={item.dueDate}
            key={item.name}
          ></TodoItem1>
        ))}
      </div>
    </>
  );
};

export default TodoItems;
