import { Display } from "./styles/Style";
const DisplayBody = ({ handleSetDisplay }) => {
  return (
    <Display>
      <div>{handleSetDisplay()}</div>
    </Display>
  );
};

export default DisplayBody;
