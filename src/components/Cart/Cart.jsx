import { Button, Col, Row } from "antd";
import "./Cart.scss";
import React from "react";
import { Image } from "antd";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import actionTypes from "../../redux/actionTypes";
const Cart = () => {
  const dispatch = useDispatch();
  const selectedProducts = useSelector(
    (state) => state.productsBasketReducer.selectedProducts
  );
  let totalPrice = 0;
  if (!selectedProducts.length)
    return (
      <div style={{ textAlign: "center", fontSize: 30 }}>List Is Empty</div>
    );
  for (let i = 0; i < selectedProducts.length; i++) {
    totalPrice += selectedProducts[i].price * selectedProducts[i].amount;
  }
  function incerase(item) {
    item.amount++;
    dispatch({ type: actionTypes.UPDATED_AMOUNT, payload: item });
  }
  function decrase(item) {
    item.amount--;
    dispatch({ type: actionTypes.UPDATED_AMOUNT, payload: item });
  }

  const listToShow = () => {
    return selectedProducts.map((item) => (
      <Row className="root">
        <Col xs={24} md={8}>
          <Image width={200} src={item.image} />
        </Col>
        <Col xs={24} md={16}>
          <div>{item.title}</div>
          <div>{item.description}</div>
          <div>
            <span>
              <Button type="primary" onClick={() => incerase(item)}>
                +
              </Button>
            </span>
            <span>Amount : {item.amount}</span>
            <span>
              <Button
                disabled={!item.amount ? true : false}
                type="primary"
                onClick={() => decrase(item)}
              >
                -
              </Button>
            </span>
            <Button
              style={{ marginLeft: 10 }}
              danger
              onClick={() =>
                dispatch({ type: actionTypes.REMOVE_TO_CARD, payload: item.id })
              }
            >
              Remove
            </Button>
          </div>
          <div>Price : {item.price}$</div>
          <div>Total Price :{item.price * item.amount}</div>
        </Col>
      </Row>
    ));
  };
  return (
    <>
      {listToShow()}
      <div style={{ textAlign: "center", padding: 40 }}>
        <span
          style={{
            border: "1px solid",
            borderRadius: 5,
            padding: "10px 20px",
            fontSize: 15,
            backgroundColor: "#ccc",
          }}
        >
          Final Total Price :{totalPrice.toFixed(2)}
        </span>
      </div>
    </>
  );
};

export default Cart;
