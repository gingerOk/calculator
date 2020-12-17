import { BsBackspaceFill } from "react-icons/bs";

const BackBtn = ({ handleBackBtn }) => {
  return (
    <div className="back-btn" onClick={() => handleBackBtn()}>
      <BsBackspaceFill />
    </div>
  );
};

export default BackBtn;
