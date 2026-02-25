import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";

import axios from "axios";

function AddTodo({ onClick }) {
  const data = { itemName: "", date: "" };

  const [inputeData, setInputeData] = useState(data);

  const hendalData = (event) => {
    setInputeData({ ...inputeData, [event.target.name]: event.target.value });
  };

  const handelSubmit = async (event) => {
    event.preventDefault();

    await axios
      .post("http://localhost:8080/api/addFoodItem", inputeData)
      .then((responce) => {
        console.log(responce);
      });
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handelSubmit}>
        <div className="col-6">
          <input
            type="text"
            name="itemName"
            value={inputeData.itemName}
            placeholder="Enter Todo Here"
            onChange={hendalData}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            name="date"
            value={inputeData.date}
            onChange={hendalData}
          />
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
