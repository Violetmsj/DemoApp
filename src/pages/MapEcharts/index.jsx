import React, { useEffect, useState } from "react";
import * as echarts from "echarts"; //全部引用
import "echarts-gl";
import zibo from "./zibo.json"; //全部引用

const MapEcharts = () => {
  var scatterData = [
    {
      name: "Test1",
      value: [118.007413, 36.815387, 10],
    },
  ];
  useEffect(() => {
    //有的话就获取已有echarts实例的DOM节点。
    let myecharts = echarts.getInstanceByDom(document.getElementById("main"));
    if (myecharts == null) {
      // 如果不存在，就进行初始化
      myecharts = echarts.init(document.getElementById("main"));
      echarts.registerMap("zibo", zibo); //第一个参数是你定义的字符串，下面map要用到，第二个就是你刚刚引入的china.json
    }

    var option;
    myecharts.setOption(
      (option = {
        // geo: {
        //   map: "zibo",
        //   show: true,
        // },
        geo3D: {
          show: true,
          map: "zibo",
          left: "0%",
          roam: true,
          zoom: 2,
          boxWidth: 40,
          regionHeight: 5,
          itemStyle: {
            // 三维地理坐标系组件 中三维图形的视觉属性，包括颜色，透明度，描边等。
            color: "#0a599f", // 地图板块的颜色
            opacity: 1, // 图形的不透明度 [ default: 1 ]
            borderWidth: 2, // (地图板块间的分隔线)图形描边的宽度。加上描边后可以更清晰的区分每个区域   [ default: 0 ]
            borderColor: "#377CC5", // 图形描边的颜色。[ default: #333 ]
            color: "red",
          },
          emphasis: {
            itemStyle: {
              show: true,
              color: "blue",
            },
            label: {
              show: false,
              color: "#fff000",
            },
          },
          regions: [],
        },
        series: [
          {
            type: "scatter3D",
            coordinateSystem: "geo3D",
            data: scatterData,
            symbol: "diamond",
            symbolSize: 50,
            tooltip: {
              show: true,
              enterable: true, // 鼠标可移入tooltip中
              padding: 0,
              extraCssText: "width: 280px;height: 171px;border: none;",
              textStyle: {
                color: "black",
              },
              formatter: "222",
              // formatter: function (params) {
              //   return `<button>85</button>`;
              // },
            },
            itemStyle: {
              color: "yellow",
            },
            label: {
              show: true,
              position: "right",
              distance: -35,
              formatter(params) {
                return "888";
              },

              textStyle: {
                color: "black",
                padding: [15, 20],
              },
            },
            emphasis: {
              label: {
                show: true,
                textStyle: {},
              },
            },
          },
        ],
      })
    );
  }, []);

  return (
    <div
      id="main"
      style={{
        width: "500px",
        height: "700px",
        margin: "0 auto",
        background: "pink",
      }}
    ></div>
  );
};
export default MapEcharts;
