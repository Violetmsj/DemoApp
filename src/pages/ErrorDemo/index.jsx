import { UploadOutlined } from "@ant-design/icons";
import { Button, message } from "antd";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "antd/dist/antd.css";

const ErrorDemo = () => {
  const [data, setData] = useState([
    { id: 1, text: 1 },
    { id: 2, text: 2 },
    { id: 3, text: 3 },
  ]);
  return (
    <>
      <div>
        {data.map((item) => {
          return (
            <div key={item.id}>
              <div>id {item.id}</div>
              <div>text {item.text}</div>
            </div>
          );
        })}
      </div>
      <Button
        onClick={() => {
          // setData([{ id: 4 }, { id: 5, text: 5 }, { id: 6, text: 6 }]);
          setData({});
        }}
      >
        更改数据
      </Button>
    </>
  );
};
export default ErrorDemo;
