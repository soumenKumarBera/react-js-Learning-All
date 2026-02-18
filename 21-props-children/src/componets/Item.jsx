import css from "./item.module.css";

const Item = ({ foodItem, handleByButtonClick }) => {
  return (
    <li className="list-group-item">
      <span className="font-bold text-3xl p-5 text-blue-500">{foodItem}</span>
      <button
        className={` ${css.btn} btn btn-primary `}
        onClick={handleByButtonClick}
      >
        Bye
      </button>
    </li>
  );
};

export default Item;
