import React, { useContext } from "react";
import { Calculator } from "./styles/Style";
import Buttons from "./Buttons";
import DisplayBody from "./DisplayBody";
import BackBtn from "./BackBtn";
import { FunctionsContext } from "./FunctionsContext";

const CalculatorBody = () => {
  const { buttons, handleBackBtn, handleSetDisplay } = useContext(
    FunctionsContext
  );

  return (
    <Calculator>
      <BackBtn handleClick={handleBackBtn} />
      <DisplayBody handleSetDisplay={handleSetDisplay} />
      <Buttons buttons={buttons} />
    </Calculator>
  );
};

export default CalculatorBody;
