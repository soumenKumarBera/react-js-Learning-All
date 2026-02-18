import css from "./FoodInpute.module.css";

const FoodInpote = ({ handleOnChangeClick }) => {
  return (
    <input
      type="text"
      className={css.fInpute}
      placeholder="Enter Food Item Here"
      onKeyDown={handleOnChangeClick}
    />
  );
};

export default FoodInpote;
