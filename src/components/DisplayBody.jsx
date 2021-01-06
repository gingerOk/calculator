import { Display } from "./styles/Style";
const DisplayBody = ({ handleSetDisplay }) => (
  <Display>
    <div>{handleSetDisplay()}</div>
  </Display>
);

export default DisplayBody;
