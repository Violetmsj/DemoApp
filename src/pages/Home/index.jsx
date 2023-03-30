import React, { useState } from "react";
import { Button, Space } from "antd";
import { Link } from "react-router-dom";
import { routes } from "../../router/router.config";
import "antd/dist/antd.css";
import "./index.scss";
const Home = () => {
  return (
    <Space>
      {routes.map((item) => {
        return (
          <Button type="primary" key={item.name}>
            <Link to={`${item.path}`}>{item.name}</Link>
          </Button>
        );
      })}
    </Space>
  );
};
export default Home;
