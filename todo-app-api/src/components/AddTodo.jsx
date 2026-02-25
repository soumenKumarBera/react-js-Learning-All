import { useRef, useState } from "react";
import { IoMdAddCircle } from "react-icons/io";

import axios from "axios";

function AddTodo({ onClick }) {
  const todoNameElement = useRef();
  const todoDateElement = useRef();

  let handelOnClick = async (event) => {
    event.preventDefault();

    const todoName = todoNameElement.current.value;
    const todoDate = todoDateElement.current.value;

    const data = { itemName: todoName, date: todoDate };

    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
    await axios
      .post("http://localhost:8080/api/addFoodItem", data)
      .then((res) => console.log(res));

    // onClick(todoName, todoDate);
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
