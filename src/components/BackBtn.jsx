import { BsBackspaceFill } from "react-icons/bs";
import { BackBtnStyle } from "./styles/Style";
const BackBtn = ({ handleClick }) => (
  <BackBtnStyle>
    <div onClick={handleClick}>
      <BsBackspaceFill />
    </div>
  </BackBtnStyle>
);

export default BackBtn;
