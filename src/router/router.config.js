import pages from "../pages";

export const routes = [
  {
    path: "/home",
    exact: true,
    name: "首页",
    Component: pages.Home,
    children: [],
  },
  {
    path: "/map",
    exact: true,
    name: "地图",
    Component: pages.MapEcharts,
    children: [],
  },
  {
    path: "/usememodemo",
    exact: true,
    name: "usememo",
    Component: pages.UseMemoDemo,
    children: [],
  },
  {
    path: "/DatePickerDemo",
    exact: true,
    name: "DatePickerDemo",
    Component: pages.DatePickerDemo,
    children: [],
  },
  {
    path: "/SocketDemo",
    exact: true,
    name: "SocketDemo",
    Component: pages.SocketDemo,
    children: [],
  },
  {
    path: "/FileDemo",
    exact: true,
    name: "FileDemo",
    Component: pages.FileDemo,
    children: [],
  },
  {
    path: "/ErrorDemo",
    exact: true,
    name: "ErrorDemo",
    Component: pages.ErrorDemo,
    children: [],
  },
  {
    path: "/SelectDemo",
    exact: true,
    name: "SelectDemo",
    Component: pages.SelectDemo,
    children: [],
  },
  {
    path: "/ScrollBoxDemo",
    exact: true,
    name: "ScrollBoxDemo",
    Component: pages.ScrollBoxDemo,
    children: [],
  },
  {
    path: "/BIN2DEC",
    exact: true,
    name: "BIN2DEC",
    Component: pages.BIN2DEC,
    children: [],
  },
];
