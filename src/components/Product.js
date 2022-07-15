import React, { useState } from "react";
import "../styles/allproduct.css";
import { BsCart2 } from "react-icons/bs";
const Product = (props) => {
  let [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter((count) => count + 1);
  };

  const decrease = () => {
    if (counter !== 0) setCounter((count) => count - 1);
  };

  return (
    <div className="productWrapper">
      <div className="info">
        <div style={{ display: counter ? "flex" : "none" }} className="card">
          <BsCart2 /> In Card
        </div>
        <img src={props.item.image} alt={props.item.title} />
        <h1 className="title">{props.item.title}</h1>
        <h1 className="sold">{props.item.shop}</h1>
      </div>
      <div className="info2">
        <p className="price">${props.item.price}</p>
        <div className="btns">
          <button
            style={{ display: counter ? "block" : "none" }}
            className="minus"
            type="button"
            onClick={decrease}
          >
            -
          </button>
          <div
            style={{ display: counter ? "block" : "none" }}
            className="counter"
          >
            {counter}
          </div>
          <button className="plus" type="button" onClick={increase}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
