import { DatePicker, Space, Button } from "antd";
import React from "react";
import moment from "moment";
const { RangePicker } = DatePicker;
const onChange = (value, dateString) => {
  console.log("Selected Time: ", value);
  console.log("Formatted Selected Time: ", dateString);
};
var timeStr1 = "2023-02-15 18:45:32";
var timeStr2 = "2023-02-20 18:45:32";

var timeStr3 = "2023-01-15 18:45:32";
var timeStr4 = "2023-01-20 18:45:32";
var arr = [timeStr1, timeStr2, timeStr3, timeStr4];

// console.log("moment", moment(timeStr));
const onOk = (value) => {
  console.log("onOk: ", value);
};
const disabledDate = (current) => {
  // current 当前组件选择时间
  return (
    current < moment(timeStr3) ||
    (current > moment(timeStr4) && current < moment(timeStr1)) ||
    current > moment(timeStr2)
  );
};
const DatePickerDemo = () => (
  <Space direction="vertical" size={12}>
    <DatePicker
      showTime
      onChange={onChange}
      onOk={onOk}
      disabledDate={disabledDate}
      // defaultPickerValue={null}
    />
    <RangePicker
      defaultValue={[moment().subtract(7, "days"), moment()]}
      showTime
      format="YYYY/MM/DD HH:mm:ss"
    />
  </Space>
);
export default DatePickerDemo;
