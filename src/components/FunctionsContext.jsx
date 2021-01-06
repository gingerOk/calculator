import React, { createContext, useState } from "react";

export const FunctionsContext = createContext();

export const FunctionsProvider = ({ children }) => {
  const [storedValue, setStoredValue] = useState("");
  const [currentValue, setCurrentValue] = useState("");
  const [currentOperator, setCurrentOperator] = useState("");

  const handleSetValue = (e) => {
    const value = e.target.innerText;
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

  const handleSetOperator = (e) => {
    e.preventDefault();
    const type = e.target.innerText;
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
      const a = parseInt(storedValue),
        b = parseInt(currentValue);

      const operatorsMap = new Map([
        ["+", a + b],
        ["-", a - b],
        ["÷", a / b],
        ["*", a * b],
      ]);
      const operator = operatorsMap.get(currentOperator);
      setStoredValue(operator.toString());
      setCurrentValue("");
    }
  };

  const handleBackBtn = () => {
    const value = currentValue.split("");
    value.pop();
    setCurrentValue(value.join(""));
  };

  const handleSetDisplay = () => {
    return !currentValue.length && !storedValue
      ? "0"
      : currentValue || storedValue;
  };

  const buttons = [
    {
      name: "AC",
      func: clearValue,
    },
    {
      name: "+/-",
      func: toggleNegativeBtn,
    },
    {
      name: "%",
      func: percentBtn,
    },
    {
      name: "÷",
      func: handleSetOperator,
    },
    {
      name: "7",
      func: handleSetValue,
    },
    {
      name: "8",
      func: handleSetValue,
    },
    {
      name: "9",
      func: handleSetValue,
    },
    {
      name: "*",
      func: handleSetOperator,
    },
    {
      name: "4",
      func: handleSetValue,
    },
    {
      name: "5",
      func: handleSetValue,
    },
    {
      name: "6",
      func: handleSetValue,
    },
    {
      name: "-",
      func: handleSetOperator,
    },
    {
      name: "1",
      func: handleSetValue,
    },
    {
      name: "2",
      func: handleSetValue,
    },
    {
      name: "3",
      func: handleSetValue,
    },
    {
      name: "+",
      func: handleSetOperator,
    },
    {
      name: "0",
      func: handleSetValue,
    },
    {
      name: ".",
      func: handleSetValue,
    },
    {
      name: "=",
      func: calcFunction,
    },
  ];

  const value = {
    buttons,
    handleBackBtn,
    handleSetDisplay,
  };

  return (
    <FunctionsContext.Provider value={value}>
      {children}
    </FunctionsContext.Provider>
  );
};
