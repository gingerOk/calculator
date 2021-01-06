import { PadStyle } from "./styles/Style";

const Buttons = ({ buttons }) => (
  <PadStyle>
    {buttons.map((b) => (
      <button key={b.name} type="button" onClick={b.func}>
        {b.name}
      </button>
    ))}
  </PadStyle>
);

export default Buttons;
