import React, { memo, useEffect, useRef } from "react";

const MAP = {
  horizontal: ["Left", "Width"],
  vertical: ["Top", "Height"],
};

function ScrollBox(props) {
  const {
    className = "",
    data = [],
    direction = "horizontal",
    autoPlay = false,
  } = props;

  const list = useRef();
  const scrollAni = useRef();
  const times = useRef();
  times.current = 1;

  const requestAnimationFrameFn = (function () {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000 / 60);
      }
    );
  })();

  const cancelAnimationFrameFn = (function () {
    return (
      window.cancelAnimationFrame ||
      window.mozCancelAnimationFrame ||
      window.cancelRequestAnimationFrame ||
      function (id) {
        clearTimeout(id);
      }
    );
  })();

  const scroll = () => {
    scrollAni.current = requestAnimationFrameFn(() => {
      // const [a, b] = MAP[direction];
      // horizontal: ["Left", "Width"],
      // vertical: ["Top", "Height"],
      const [Top, Height] = MAP["vertical"];
      if (list.current && list.current[`scroll${Height}`]) {
        if (
          list.current[`scroll${Height}`] * window.devicePixelRatio >
          list.current[`scroll${Top}`] * window.devicePixelRatio +
            list.current[`client${Height}`] * window.devicePixelRatio
        ) {
          times.current += 1;
          if (times.current % 4 === 0) {
            times.current = 0;
            list.current[`scroll${Top}`] =
              list.current[`scroll${Top}`] +
              Math.ceil(1 / window.devicePixelRatio);
          }
        } else {
          list.current[`scroll${Top}`] = 0;
        }
      }
      scroll();
    });
  };

  const enterBox = () => {
    console.log("enter");
    if (scrollAni.current) {
      cancelAnimationFrameFn(scrollAni.current);
      scrollAni.current = null;
    }
  };

  const leaveBox = () => {
    console.log("leave");
    if (!scrollAni.current && autoPlay) {
      scroll();
    }
  };

  useEffect(() => {
    return () => {
      if (scrollAni.current) {
        cancelAnimationFrameFn(scrollAni.current);
      }
    };
  }, []);

  useEffect(() => {
    if (scrollAni.current) {
      cancelAnimationFrameFn(scrollAni.current);
      scrollAni.current = null;
    }
    if (data.length && autoPlay) {
      setTimeout(() => {
        scroll();
      }, 200);
    }
  }, [data]);

  return (
    <div
      className={className}
      ref={list}
      onMouseOver={enterBox}
      onMouseLeave={leaveBox}
    >
      {props.children}
    </div>
  );
}

export default memo(ScrollBox);
