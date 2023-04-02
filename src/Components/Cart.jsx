import React from "react";
import { useNavigate } from "react-router-dom"
import {
  ShoppingCartOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
  DeleteTwoTone,
  EnvironmentOutlined
} from "@ant-design/icons";
import { Button, Divider, Row, Col, Typography } from "antd";
import pizza from "../assets/pizza.png";

const { Text } = Typography;
const Cart = () => {
  const navigate = useNavigate();


const handleSuccess = () => {
  navigate("/success",  { replace: true });
}

  return (
    <div>
      <div>
        <h3 style={{ display: "flex", alignItems: "center", marginBottom:"0px" }}>
          <ShoppingCartOutlined style={{ color: "#33D4FF" }} /> Cart
        </h3>
        <Text style={{ display: "flex", alignItems: "left", color: "#3336FF" }}>
          2 Items
        </Text>
        <Text style={{ display: "flex", alignItems: "center" }} type="secondary">
        <EnvironmentOutlined /> Deliver to ABC, Delhi, 123456
        </Text>
      </div>

      <div>
        <Row>
          <Col span={8} style={{ display: "flex", alignItems: "center" }}>
            {" "}
            <img
              src={pizza}
              alt=""
              style={{ width: "100px", height: "100px" }}
            />
          </Col>
          <Col span={16} style={{ textAlign: "left" }}>
            <h3>Product Name</h3>
            <span >
              <Text type="secondary" delete>
                ₹2100
              </Text>
              <Text strong style={{marginLeft:"10px"}}> ₹900</Text>
            </span><br/>
            <Text type="secondary">MRP - ₹3500</Text>
            <br />
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "15px",
                background: "#7375FA",
                border: "0px",
                borderRadius: "5px",
                margin: "10px",
              }}
            >
              <Button style={{ border: "none", margin: "5px" }}>
                <MinusCircleOutlined />
              </Button>
              <h3>1</h3>
              <Button style={{ border: "none", margin: "5px" }}>
                <PlusCircleOutlined />
              </Button>
            </div>
          </Col>
        </Row>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "right",
          paddingRight: "10px",
        }}
      >
        <Button style={{ border: "none" }} size="large">
          <DeleteTwoTone />
        </Button>
      </div>
      <Divider />
      <div style={{ marginBottom: "10px" }}>
        <p>Total Amount 2345</p>
          {
        <Button type="primary" block style={{backgroundColor: "#2F31C8"}} onClick={handleSuccess}>
          Place Order
        </Button>}
      </div>
    </div>
  );
};

export default Cart;
