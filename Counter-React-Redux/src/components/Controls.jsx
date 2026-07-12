import {useDispatch} from "react-redux";

const Controls = () => {
 const dispatch =  useDispatch();

 const handelIncrement =() =>{

  dispatch({type: "INCREMENT"});

 }

  const handeDecrement =() =>{
    dispatch({type: "DECREMENT"});
  
 }
  return (
    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
      {" "}
      <button
        type="button"
        class="btn btn-primary btn-lg px-4 gap-3"
        fdprocessedid="4w58p"
        onClick={handelIncrement}
      >
        +1
      </button>{" "}
      <button
        type="button"
        class="btn btn-outline-secondary btn-lg px-4"
        fdprocessedid="79a2j"
        onClick={handeDecrement}
      >
        -1
      </button>{" "}
    </div>
  );
};

export default Controls;
