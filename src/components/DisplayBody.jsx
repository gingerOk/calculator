const DisplayBody = ({ handleSetDisplay }) => {
  return (
    <div className="display">
      <div>{handleSetDisplay()}</div>
    </div>
  );
};

export default DisplayBody;
