import React, { useState } from "react";
import { Calculator } from "./styles/Style";
import PadBody from "./PadBody";
import DisplayBody from "./DisplayBody";
import BackBtn from "./BackBtn";

const CalculatorBody = () => {
  const [storedValue, setStoredValue] = useState("");
  const [currentValue, setCurrentValue] = useState("");
  const [currentOperator, setCurrentOperator] = useState("");
  const [memoryValue, setMemoryValue] = useState("");
  const [isMemoryClicked, setIsMemoryClicked] = useState(false);

  const handleSetValue = (value) => {
    if (
      (!currentValue.includes(".") || value !== ".") &&
      currentValue.length < 8
    ) {
      setCurrentValue(`${(currentValue + value).replace(/^0+/, "")}`);
    }
  };
  const storeValue = () => {
    setStoredValue(currentValue);
    setCurrentValue("");
  };
  const clearValue = () => {
    setCurrentValue("");
    setStoredValue("");
    setCurrentOperator("");
  };

  const toggleNegativeBtn = () => {
    if (currentValue) {
      if (currentValue > 0) {
        setCurrentValue(`-${currentValue}`);
      } else {
        const positiveNumber = currentValue.slice(1);
        setCurrentValue(positiveNumber);
      }
    } else if (storedValue > 0) {
      setStoredValue(`-${storedValue}`);
    } else {
      const positiveNumber = storedValue.slice(1);
      setStoredValue(positiveNumber);
    }
  };

  const percentBtn = () => {
    setCurrentValue((parseInt(currentValue) / 100).toString());
  };

  const handleMemoryBtns = (type) => {
    if (type === "mc") {
      setMemoryValue("");
    } else if (type === "m+") {
      const count =
        memoryValue.length > 0
          ? (parseInt(memoryValue) + parseInt(currentValue)).toString()
          : currentValue;
      setMemoryValue(count);
    } else if (type === "m-") {
      const count =
        memoryValue.length > 0
          ? (parseInt(memoryValue) - parseInt(currentValue)).toString()
          : `-${currentValue}`;
      setMemoryValue(count);
    } else if (type === "mr") {
      setIsMemoryClicked(true);
    }
  };
  const handleSetOperator = (type) => {
    if (currentValue) {
      setCurrentOperator(type);
      storeValue();
    }
    if (storedValue) {
      setCurrentOperator(type);
    }
    calcFunction();
  };

  const calcFunction = () => {
    if (currentValue && storedValue) {
      switch (currentOperator) {
        case "+":
          setStoredValue(
            (parseInt(storedValue) + parseInt(currentValue)).toString()
          );
          break;
        case "-":
          setStoredValue(
            (parseInt(storedValue) - parseInt(currentValue)).toString()
          );
          break;
        case "/":
          setStoredValue(
            (parseInt(storedValue) / parseInt(currentValue)).toString()
          );
          break;
        case "*":
          setStoredValue(
            (parseInt(storedValue) * parseInt(currentValue)).toString()
          );
          break;
        default:
          break;
      }
      setCurrentValue("");
    }
  };

  const handleBackBtn = () => {
    const value = currentValue.split("");
    value.pop();
    setCurrentValue(value.join(""));
  };

  const handleSetDisplay = () => {
    if (!currentValue.length && !storedValue && !isMemoryClicked) {
      return "0";
    } else if (isMemoryClicked) {
      return memoryValue;
    } else {
      return currentValue || storedValue;
    }
  };

  const value = {
    clearValue,
    toggleNegativeBtn,
    percentBtn,
    handleSetOperator,
    handleMemoryBtns,
    handleSetValue,
    calcFunction,
  };

  return (
    <Calculator>
      <BackBtn handleBackBtn={handleBackBtn} />
      <DisplayBody handleSetDisplay={handleSetDisplay} />
      <PadBody value={value} />
    </Calculator>
  );
};

export default CalculatorBody;
