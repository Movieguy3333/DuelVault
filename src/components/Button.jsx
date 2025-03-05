/* eslint-disable react/prop-types */
function Button({ children, onClick, card = {} }) {
  return (
    <button className="btn" onClick={() => onClick(card)}>
      {children}
    </button>
  );
}

export default Button;
