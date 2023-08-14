import React, { useState, useRef, useCallback, useEffect } from "react";

// const SocketDemo = () => {
//   const [data, setData] = useState("data");
//   const [reset, setReset] = useState(false);
//   const socket = useRef();
//   const socketOnClose = () => {
//     console.log("=====close=====");
//   };
//   const socketOnError = (error) => {
//     console.log("error", error);
//   };
//   const socketOnMessage = (message) => {
//     console.log("message", message);
//     setData(message.data);
//   };
//   const socketOnOpen = () => {
//     console.log("=====open=====");
//     socket.current.send(JSON.stringify({ uid: "12" }));
//   };
//   const socketInit = useCallback(() => {
//     try {
//       const socketObj = new WebSocket("ws://127.0.0.1:8000");
//       socketObj.addEventListener("close", socketOnClose);
//       socketObj.addEventListener("error", socketOnError);
//       socketObj.addEventListener("message", socketOnMessage);
//       socketObj.addEventListener("open", socketOnOpen);
//       socket.current = socketObj;
//     } catch (e) {
//       console.log(e);
//     }
//   }, [socketOnMessage, socketOnOpen]);

//   useEffect(() => {
//     socketInit();
//   }, [socketInit]);

//   useEffect(() => {
//     if (!reset) return;
//     setTimeout(() => {
//       socketInit();
//       setReset(false);
//     }, 30000);
//   }, [reset, socketInit]);
//   return <div>{data}</div>;
// };
// export default SocketDemo;
const SocketDemo = () => {
  const [a, setA] = useState(5);
  const [b, setB] = useState(a);
  useEffect(() => {
    console.log(b);
  }, [b]);
  const changeA = () => {
    setA(6);
  };
  return (
    <>
      <div>{a}</div>
      <div>{b}</div>
      <button onClick={changeA}>改变a</button>
    </>
  );
};
export default SocketDemo;
