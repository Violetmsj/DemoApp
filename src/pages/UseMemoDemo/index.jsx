import React, { useState, useMemo } from "react";
import "./index.scss";
const UseMemoDemo = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(true);

  const slowFun = (num) => {
    console.log("slowFun");
    for (let i = 0; i < 9000000000000000000000000000000000000000n; i++) {
      return num * 2;
    }
  };
  const doubleNumber = useMemo(() => {
    return slowFun(number);
  }, [number]);
  // const doubleNumber = slowFun(number);

  const handleInputChange = (e) => {
    setNumber(parseInt(e.target.value));
  };
  const doubleNumberStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <>
      <input type="number" value={number} onChange={handleInputChange} />
      <button
        onClick={() => {
          setDark(!dark);
        }}
      >
        改变主题
      </button>
      <div style={doubleNumberStyle}>slowFun处理后:{doubleNumber}</div>
    </>
  );
};
export default UseMemoDemo;
