const Square = ({ value, onSquareClick }) => {

  return (
    <button className="w-14 h-14 text-2xl bg-gray-100 cursor-pointer border border-black-500 border-solid" onClick={onSquareClick}>
      {value}
    </button>
  );
};

export default Square;
