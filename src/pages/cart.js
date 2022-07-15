import "../styles/cart.css";
import React, { useState } from "react";
import "../styles/cart.css";
import { MdOutlineClose } from "react-icons/md";
import elements from "../data/data2.js";
import Element from "../components/CartElement";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [totalPrice] = useState(1000);
  const getDisplayNumber = (num) =>
    (Math.round(Number(num) * 100) / 100).toFixed(2);
  const navigate = useNavigate();
  return (
    <div className="cart_conteiner">
      <div className={`cart_none_opacity cart_opacity`}></div>
      <div className="cart active">
        <div className="form">
          <form className="auth-form">
            <h1>Detail Info</h1>
            <div className="inputs_in_row">
              <div className="input-in-row">
                <input
                  className="form-input"
                  placeholder="First Name"
                  type="text"
                  name="firstname"
                />
              </div>
              <div className="input-in-row">
                <input
                  className="form-input"
                  placeholder="Last Name"
                  type="text"
                  name="lastname"
                />
              </div>
            </div>
            <input
              className="form-input"
              placeholder="Email addres"
              type="email"
              name="email"
            />

            <input
              className="form-input"
              placeholder="Adress"
              type="text"
              name="adress"
            />

            <button className="submit_button" type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className="cart_content" onClick={(e) => e.stopPropagation()}>
          <div className="cart_header">
            <div
              className="cross"
              style={{ textDecoration: "none" }}
              onClick={() => {
                navigate("/");
              }}
            >
              <MdOutlineClose height={12} width={12} color="#313131" />
            </div>
            My Cart
          </div>
          {elements.map((item) => {
            return <Element key={item.id} item={item} />;
          })}
          <div className="cart_footer">
            <div className="checkout">
              <div className="total_price">${getDisplayNumber(totalPrice)}</div>
              <div className="total_price_title">Total Price</div>
            </div>
            <div className="btn_checkout">Checkout</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
