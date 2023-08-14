import React, { useState, useEffect } from "react";
import Cards from "./components/Cards";
import ScrollBox from "./components/ScrollBox";
import "./index.scss";
function ScrollBoxDemo() {
  const [data, setData] = useState([]);
  const [autoPlay, setAutoPlay] = useState(true);
  const getData = () => {
    setTimeout(() => {
      setData([1, 2, 3, 4]);
    }, 0);
  };
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className="middle">
      <ScrollBox
        direction="vertical"
        data={data}
        className="box"
        autoPlay={autoPlay}
      >
        {data.map((item) => {
          return <Cards data={item} />;
        })}
      </ScrollBox>
      <button onClick={getData}>data</button>
      <button
        onClick={() => {
          setAutoPlay(!autoPlay);
        }}
      >
        switch
      </button>
    </div>
  );
}

export default ScrollBoxDemo;
