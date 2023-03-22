import React, { useState } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { routes } from "../../router/router.config";
import "./index.scss";
const Home = () => {
  return routes.map((item) => {
    return (
      <Button type="primary" key={item.name}>
        <Link to={`${item.path}`}>{item.name}</Link>
      </Button>
    );
  });
};
export default Home;
