const WelcomeMsg = ({ todoItem }) => {
  return todoItem.length == 0 && <h1>Enjoy your day</h1>;
};

export default WelcomeMsg;
