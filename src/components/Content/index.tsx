import { useState, useEffect, useContext } from "react";

import { ThemeContext } from "../../contexts/ThemeContext";
import { ContentStyle, Display } from "./styles";

function Content() {
  const { theme } = useContext(ThemeContext);
  const [numberDisplay, setNumberDisplay] = useState("0");
  const [value, setValue] = useState("");
  const [firstNumber, setFirstNumber] = useState(true);
  const [firstValue, setFirstValue] = useState(0);
  const [operation, setOperation] = useState("");

  useEffect(() => {
    updateDisplay();
  }, [value]);

  const updateDisplay = () => {
    let v = "";
    if (!value.split("0,")) {
      let [parteInteira, parteDecimal] = value.split(",");
      let c = 0;
      for (let index = parteInteira.length - 1; index >= 0; index--) {
        if (++c > 3) {
          v = "." + v;
          c = 1;
        }
        v = parteInteira[index] + v;
      }
      v = v + (parteDecimal ? "," + parteDecimal : "");
    } else v = value;
    if (v.length <= 17) {
      setNumberDisplay(v);
    }
  };

  const digito = (n: number) => {
    if (firstNumber) {
      setValue("" + n);
      setFirstNumber(false);
    } else setValue(value + n);
  };

  const virgula = () => {
    if (firstNumber) {
      setValue("0,");
      setFirstNumber(false);
    } else if (value.indexOf(",") === -1) {
      setValue(value + ",");
    }
  };

  const Operation = (op: string) => {
    Calcula();
    setFirstValue(parseFloat(value.replace(",", ".")));
    setFirstNumber(true);
    setOperation(op);
  };

  const Calcula = () => {
    if (operation !== "") {
      let result = 0;
      switch (operation) {
        case "+":
          result = firstValue + parseFloat(value.replace(",", "."));
          break;
        case "-":
          result = firstValue - parseFloat(value.replace(",", "."));
          break;
        case "*":
          result = firstValue * parseFloat(value.replace(",", "."));
          break;
        case "/":
          result = firstValue / parseFloat(value.replace(",", "."));
          break;
      }
      setValue(result.toString().replace(".", ","));
      setOperation("");
      setFirstValue(0);
      setFirstNumber(true);
    }
  };

  const remove = () => {
    let v = value.split("");
    for (let index = 0; index < v.length; index++) {
      if (v[index] === ",") {
        v[index] = ".";
      }
    }

    v.pop();
    if (v[v.length - 1] === ".") {
      v.pop();
    }
    setValue(v.toString().replace(/,/g, "").replace(".", ","));
  };

  const reset = () => {
    setNumberDisplay("0");
    setValue("");
    setFirstNumber(true);
    setOperation("");
    setFirstValue(0);
  };

  const ValueDisplay = () => {
    if (numberDisplay.length === 0) {
      return <p>0</p>;
    } else {
      return <p>{numberDisplay}</p>;
    }
  };

  return (
    <>
      <Display className={theme}>
        <ValueDisplay />
      </Display>

      <ContentStyle className={theme}>
        <div>
          <button onClick={() => digito(7)}>7</button>
          <button onClick={() => digito(8)}>8</button>
          <button onClick={() => digito(9)}>9</button>
          <button onClick={remove} className="dark">
            DEL
          </button>
        </div>
        <div>
          <button onClick={() => digito(4)}>4</button>
          <button onClick={() => digito(5)}>5</button>
          <button onClick={() => digito(6)}>6</button>
          <button onClick={() => Operation("+")}>+</button>
        </div>
        <div>
          <button onClick={() => digito(1)}>1</button>
          <button onClick={() => digito(2)}>2</button>
          <button onClick={() => digito(3)}>3</button>
          <button onClick={() => Operation("-")}>-</button>
        </div>
        <div>
          <button onClick={virgula}>,</button>
          <button onClick={() => digito(0)}>0</button>
          <button onClick={() => Operation("/")}>/</button>
          <button onClick={() => Operation("*")}>x</button>
        </div>
        <div className="results">
          <button onClick={reset} className="dark">
            RESET
          </button>
          <button onClick={Calcula} className="red">
            =
          </button>
        </div>
      </ContentStyle>
    </>
  );
}

export default Content;
