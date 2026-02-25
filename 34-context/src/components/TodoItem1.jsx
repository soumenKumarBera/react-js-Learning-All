import { MdDeleteForever } from "react-icons/md";
import css from "./TodoItem1.module.css";
import { useContext } from "react";
import { TodoitemsContext } from "../store/Todo-item-store";

function TodoItem1({ todoName, todoDate }) {
  const { deleteItem } = useContext(TodoitemsContext);
  return (
    <div className="container ">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className={`${css.delete} btn btn-danger`}
            onClick={() => deleteItem(todoName)}
          >
            <MdDeleteForever />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem1;
