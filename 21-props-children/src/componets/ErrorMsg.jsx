const ErrorMsg = ({ items }) => {
  return <>{items.length == 0 ? <h3> I am hangry</h3> : null}</>;
};
export default ErrorMsg;
