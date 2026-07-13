import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterAction, privacyActions } from "../store";

const Controls = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const handelIncrement = () => {
   dispatch(counterAction.increment())
  };

  const handeDecrement = () => {
 dispatch(counterAction.decrement());

  };

  const handelAdd = () => {
    dispatch(counterAction.add({
      num: inputElement.current.value
    }))

    inputElement.current.value = "";
  };

  const handelSub = () => {

    dispatch(counterAction.subtract(inputElement.current.value));
    inputElement.current.value ="";
  };

  const handelPrivacy = () => {

dispatch(privacyActions.toggle());

  };

  return (
    <>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        {" "}
        <button
          type="button"
          className="btn btn-primary btn-lg px-4 gap-3"
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
        <input type="text" placeholder="enter number" ref={inputElement} />
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
