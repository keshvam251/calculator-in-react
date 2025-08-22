import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setnum1] = useState("");
  const [num2, setnum2] = useState("");
  const [finalans, setfinalans] = useState(null);

  const Calculation = (operator) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setfinalans("Please enter valid numbers");
      return;
    }

    let res;
    switch (operator) {
      case "+":
        res = a + b;
        break;
      case "-":
        res = a - b;
        break;
      case "*":
        res = a * b;
        break;
      case "/":
        res = b !== 0 ? a / b : "Cannot divide by zero";
        break;
      default:
        res = "Invalid operation";
    }

    setfinalans(res);
  };

  return (
    <>
      <div style={{ maxWidth: '300px', margin: '0 auto' }}>
        <h2>Basic Calculator</h2>
        <input
          type="number"
          placeholder="Number 1"
          value={num1}
          onChange={(e) => setnum1(e.target.value)}
        />
      </div>

      <div style={{ maxWidth: '300px', margin: '0 auto' }}>
        <input
          type="number"
          placeholder="Number 2"
          value={num2}
          onChange={(e) => setnum2(e.target.value)}
        />
      </div>

      <div style={{ maxWidth: '300px', margin: '0 auto' }}>
        <input
          type="text"
          placeholder="Answer"
          value={finalans !== null ? finalans : ""}
          readOnly
        />
      </div>

      <div style={{ maxWidth: '300px', margin: '0 auto' }}>
        <button onClick={() => Calculation("+")}>+</button>
        <button onClick={() => Calculation("-")}>-</button>
        <button onClick={() => Calculation("*")}>*</button>
        <button onClick={() => Calculation("/")}>/</button>
      </div>

      <h3>Result: {finalans !== null ? finalans : "—"}</h3>
    </>
  );
};

export default Calculator;
