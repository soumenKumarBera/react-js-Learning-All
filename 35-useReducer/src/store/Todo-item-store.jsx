import { createContext, useReducer } from "react";

export const TodoitemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

const todoItemReducer = (currentTodo, action) => {
  let newTodoItem = currentTodo;
  if (action.type === "NEW_ITEM") {
    newTodoItem = [
      ...currentTodo,
      { name: action.payload.newName, dueDate: action.payload.date },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItem = currentTodo.filter(
      (item) => item.name !== action.payload.tododitemName,
    );
  }

  return newTodoItem;
};

const TodoItemContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItem] = useReducer(todoItemReducer, []);

  const addNewItem = (newName, date) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        newName,
        date,
      },
    };
    dispatchTodoItem(newItemAction);
  };

  const deleteItem = (tododitemName) => {
    const deleteAction = {
      type: "DELETE_ITEM",
      payload: {
        tododitemName,
      },
    };
    dispatchTodoItem(deleteAction);
  };

  return (
    <TodoitemsContext.Provider value={{ todoItems, addNewItem, deleteItem }}>
      {children}
    </TodoitemsContext.Provider>
  );
};

export default TodoItemContextProvider;
