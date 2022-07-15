import React, { useEffect, useState } from "react";
import "../styles/allproduct.css";
import Product from "../components/Product";
import { BsArrowDown } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const Shop = (props) => {
  const [curentShop, setcurentShop] = useState("Mac");
  const navigate = useNavigate();
  useEffect(() => {
    console.log(curentShop);
  }, [curentShop]);

  return (
    <div className="shop">
      <div
        className="btn_checkout"
        onClick={() => {
          navigate("cart");
        }}
      >
        Cart
      </div>
      <div className="form_radio">
        <input
          type="radio"
          value="Mac"
          name="shops"
          onClick={() => {
            setcurentShop("Mac");
          }}
        />{" "}
        Mac
        <input
          type="radio"
          value="KFC"
          name="shops"
          onClick={() => {
            setcurentShop("KFC");
          }}
        />{" "}
        KFS
        <input
          type="radio"
          value="Other"
          name="shops"
          onClick={() => {
            setcurentShop("Other");
          }}
        />{" "}
        Other
      </div>
      <div className="products-grid">
        {props.items.map((item) => {
          if (item.shop === curentShop) {
            return <Product key={item.id} item={item} />;
          }
        })}
        <div className="gradient" onClick={(e) => e.preventDefault()}></div>
      </div>
    </div>
  );
};

export default Shop;
