import { BsBackspaceFill } from "react-icons/bs";
import {BackBtnStyle} from './styles/Style'
const BackBtn = ({ handleBackBtn }) => {
  return (
    <BackBtnStyle>
    <div onClick={() => handleBackBtn()}>
      <BsBackspaceFill />
    </div>
    </BackBtnStyle>
  );
};

export default BackBtn;
