import React, { useState, useEffect } from "react";
import { Input, Button, message } from "antd";
function BIN2DEC() {
  const [decValue, setDecValue] = useState("");
  const [binValue, setBinValue] = useState("");
  const binReg = new RegExp(/^[01]+$/);

  const handleInputChange = (e) => {
    if (binReg.test(parseInt(e.target.value))) {
      setBinValue(e.target.value);
    } else {
      // message.warning("请输入0或1");
    }
    return;
  };
  const handletransform = () => {
    // if (binValue.length > 8) {
    //   message.warning("长度不能大于8");
    //   return;
    // } else {
    setDecValue(parseInt(binValue, 2));
    // }
  };
  return (
    <>
      <div className="box">
        <Input
          placeholder="输入二进制"
          value={binValue}
          onChange={handleInputChange}
        ></Input>
        <Button onClick={handletransform}>转换</Button>
        <div>{decValue}</div>
      </div>
    </>
  );
}

export default BIN2DEC;
