import React, { useState, useEffect } from "react";
import "./index.scss";
function Cards(props) {
  const { data = "" } = props;
  return <div className="card">{data}</div>;
}

export default Cards;
