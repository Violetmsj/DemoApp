import { Button, message, Select } from "antd";
import React, { useState, useEffect } from "react";
import worker from "./worker";
import "antd/dist/antd.css";

const SelectDemo = () => {
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };
  const [options, setOptions] = useState();
  let randomArray = (length) => {
    let i = 0;
    let index = 0;
    let temp = null;
    let arr = [length];
    length = typeof length === "undefined" ? 9 : length;
    for (i = 1; i <= length; i++) {
      arr[i - 1] = i;
    }
    for (i = 1; i <= length; i++) {
      index = window.parseInt(Math.random() * (length - i)) + i;
      if (index != i) {
        temp = arr[i - 1];
        arr[i - 1] = arr[index - 1];
        arr[index - 1] = temp;
      }
    }
    return arr;
  };
  useEffect(() => {
    const arr = randomArray(50000);
    const _options = [];
    arr.forEach((item) => {
      _options.push({
        value: item,
        label: item,
      });
    });
    setOptions(_options);
  }, []);
  return (
    <Select
      showSearch
      placeholder="Select a person"
      optionFilterProp="children"
      onChange={onChange}
      onSearch={onSearch}
      filterOption={(input, option) =>
        (option?.label ?? "").toString().includes(input.toString())
      }
      options={options}
    />
  );
};
export default SelectDemo;
