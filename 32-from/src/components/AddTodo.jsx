import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";

function AddTodo({ onClick }) {
  const [todoName, setTodoName] = useState("");

  const [todoDate, setTodoDate] = useState("");

  let handelOninpute = (event) => {
    // console.log(event.target.value);
    setTodoName(event.target.value);
  };

  let handelOnDate = (event) => {
    // console.log(event.target.value);
    setTodoDate(event.target.value);
  };

  let handelOnClick = (event) => {
    console.log(event);
    event.preventDefault();

    onClick(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  };

  return (
    <div class="container text-center">
      <form class="row kg-row" onSubmit={handelOnClick}>
        <div class="col-6">
          <input
            type="text"
            value={todoName}
            placeholder="Enter Todo Here"
            onChange={handelOninpute}
          />
        </div>
        <div class="col-4">
          <input type="date" value={todoDate} onChange={handelOnDate} />
        </div>
        <div class="col-2 kg-btn">
          <button type="submit" class="btn btn-success kg-button">
            <IoMdAddCircle />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
