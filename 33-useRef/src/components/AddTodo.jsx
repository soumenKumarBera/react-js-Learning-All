import { useRef, useState } from "react";
import { IoMdAddCircle } from "react-icons/io";

function AddTodo({ onClick }) {
  const todoNameElement = useRef();
  const todoDateElement = useRef();

  let handelOnClick = (event) => {
    event.preventDefault();

    const todoName = todoNameElement.current.value;
    const todoDate = todoDateElement.current.value;

    todoNameElement.current.value = "";
    todoDateElement.current.value = "";

    onClick(todoName, todoDate);
  };

  return (
    <div class="container text-center">
      <form class="row kg-row" onSubmit={handelOnClick}>
        <div class="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
          />
        </div>
        <div class="col-4">
          <input type="date" ref={todoDateElement} />
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
