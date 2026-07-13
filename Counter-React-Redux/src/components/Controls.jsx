import { useRef } from "react";
import {useDispatch} from "react-redux";

const Controls = () => {
 const dispatch =  useDispatch();
 const inputElement = useRef();

 const handelIncrement =() =>{

  dispatch({type: "INCREMENT"});

 }

  const handeDecrement =() =>{
    dispatch({type: "DECREMENT"});
  
 }

 const handelAdd =() =>{
      dispatch({type:"ADD", payload:{
        num: inputElement.current.value,
      }}) 

      inputElement.current.value = "";
 }

  const handelSub =() =>{
      dispatch({type:"SUB", payload:{
        num: inputElement.current.value,
      }}) 
      inputElement.current.value = "";
 }
  
  const handelPrivacy =() =>{
    dispatch({type: "PRIVACY"});
  
 }

 
  return (
    <>
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
       <button
        type="button"
        class="btn btn-outline-secondary btn-lg px-4 "
        fdprocessedid="79a2j"
        onClick={handelPrivacy}
      >
        Privacy Troggle
      </button>{" "}
    </div>
     <div class="d-grid gap-2 d-sm-flex justify-content-sm-center  comtrol-row">
      {" "}
      <input
        type="text"
        placeholder="enter number"
        ref={inputElement}
        
      />
        
      
      <button
        type="button"
        class="btn btn-outline-secondary btn-lg px-4"
        fdprocessedid="79a2j"
        onClick={handelAdd}
      >
        add
      </button>{" "}
     <button
        type="button"
        class="btn btn-outline-secondary btn-lg px-4"
        fdprocessedid="79a2j"
        onClick={handelSub}
      >
        substract
      </button>{" "}
    </div>
    </>
  
  );
};

export default Controls;
