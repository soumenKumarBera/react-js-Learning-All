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
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handelOnClick}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
          />
        </div>
        <div className="col-4">
          <input type="date" ref={todoDateElement} />
        </div>
        <div className="col-2 kg-btn">
          <button type="submit" className="btn btn-success kg-button">
            <IoMdAddCircle />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
