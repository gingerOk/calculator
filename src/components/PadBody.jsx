const PadBody = (props) => {

  const {
    clearValue,
    toggleNegativeBtn,
    percentBtn,
    handleSetOperator,
    handleMemoryBtns,
    handleSetValue,
    calcFunction
  } = props.value;

  return (
    <div className="calcForm">
      <button
        data-type="clear"
        onClick={() => clearValue()}
        className="top-block"
      >
        AC
      </button>
      <button
        data-type="operator"
        onClick={() => toggleNegativeBtn()}
        className="top-block"
      >
        +/-
      </button>
      <button
        data-type="operator"
        onClick={() => percentBtn()}
        className="top-block"
      >
        %
      </button>
      <button
        data-type="operator"
        onClick={() => handleSetOperator("/")}
        className="right-block"
      >
        ÷
      </button>
      <button
        data-type="memory"
        onClick={() => handleMemoryBtns("mc")}
        className="central-block"
      >
        mc
      </button>
      <button
        data-type="memory"
        onClick={() => handleMemoryBtns("mr")}
        className="central-block"
      >
        mr
      </button>
      <button
        data-type="memory"
        onClick={() => handleMemoryBtns("m-")}
        className="central-block"
      >
        m-
      </button>
      <button
        data-type="memory"
        onClick={() => handleMemoryBtns("m+")}
        className="right-block"
      >
        m+
      </button>
      <button
        data-type="digital"
        onClick={() => handleSetValue("7")}
        className="central-block"
      >
        7
      </button>
      <button
        data-type="digital"
        onClick={() => handleSetValue("8")}
        className="central-block"
      >
        8
      </button>
      <button
        data-type="digital"
        onClick={() => handleSetValue("9")}
        className="central-block"
      >
        9
      </button>
      <button
        data-type="operator"
        onClick={() => handleSetOperator("*")}
        className="right-block"
      >
        x
      </button>
      <button
        data-type="digital"
        onClick={() => handleSetValue("4")}
        className="central-block"
      >
        4
      </button>
      <button
        data-type="digital"
        onClick={() => handleSetValue("5")}
        className="central-block"
      >
        5
      </button>
      <button
        data-type="digital"
        onClick={() => handleSetValue("6")}
        className="central-block"
      >
        6
      </button>
      <button
        data-type="operator"
        onClick={() => handleSetOperator("-")}
        className="right-block"
      >
        -
      </button>
      <button
        data-type="digital"
        onClick={() => handleSetValue("1")}
        className="central-block"
      >
        1
      </button>
      <button
        data-type="digital"
        onClick={() => handleSetValue("2")}
        className="central-block"
      >
        2
      </button>
      <button
        data-type="digital"
        onClick={() => handleSetValue("3")}
        className="central-block"
      >
        3
      </button>
      <button
        data-type="operator"
        onClick={() => handleSetOperator("+")}
        className="right-block"
      >
        +
      </button>
      <button
        data-type="digital"
        onClick={() => handleSetValue("0")}
        className="item-0 central-block"
      >
        0
      </button>
      <button
        data-type="digital"
        onClick={() => handleSetValue(".")}
        className="central-block"
      >
        .
      </button>
      <button
        data-type="operator"
        onClick={() => calcFunction()}
        className="right-block"
      >
        =
      </button>
    </div>
  );
};

export default PadBody;
