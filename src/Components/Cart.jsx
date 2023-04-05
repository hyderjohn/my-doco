import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ShoppingCartOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
  DeleteTwoTone,
  EnvironmentOutlined,
} from "@ant-design/icons";
import { Button, Divider, Row, Col, Typography, Popconfirm } from "antd";
import pizza from "../assets/pizza.png";

const { Text } = Typography;

const Cart = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(items);

  console.log(data);
  const handleSuccess = () => {
    navigate("/success", { replace: true });
  };

  const handleDelete = (id) => {
    console.log(id);
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };

  return (
    <div>
      <div>
        <h3 style={{ display: "flex", alignItems: "center", margin: "10px" }}>
          <ShoppingCartOutlined style={{ color: "#33D4FF" }} /> Cart
        </h3>
        <Text style={{ display: "flex", alignItems: "left", color: "#3336FF" }}>
          2 Items
        </Text>
        <Text
          style={{ display: "flex", alignItems: "center" }}
          type="secondary"
        >
          <EnvironmentOutlined /> Deliver to ABC, Delhi, 123456
        </Text>
      </div>

      <div>
        {data.map((item) => {
          return (
            <div key={item.id}>
              <Row>
                <Col span={24} style={{ display: "flex", alignItems: "left" }}>
                  <h3>Distributor Name - Order {item.id}</h3>
                  <br />
                </Col>
              </Row>
              <Row>
                <Col
                  xs={12}
                  md={8}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <img
                    src={pizza}
                    alt=""
                    style={{ width: "100px", height: "100px" }}
                  />
                </Col>
                <Col xs={12} md={16} style={{ textAlign: "left" }}>
                  <h3>Product Name</h3>
                  <span>
                    <Text type="secondary" delete>
                      {item.price}
                    </Text>
                    <Text strong style={{ marginLeft: "10px" }}>
                      ₹{item.disc_price}
                    </Text>
                  </span>
                  <br />
                  <Text type="secondary">MRP - {item.mrp}</Text>
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
                    <h3>13</h3>
                    <Button style={{ border: "none", margin: "5px" }}>
                      <PlusCircleOutlined />
                    </Button>
                  </div>
                </Col>
              </Row>
              <div
                style={{
                  display: "flex",
                  justifyContent: "right",
                  paddingRight: "10px",
                }}
              >
                <Popconfirm
                  placement="topLeft"
                  title="Delete Item"
                  onConfirm={()=>handleDelete(item.id)}
                  // onCancel={cancel}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button style={{ border: "none" }} size="large">
                    <DeleteTwoTone />
                  </Button>
                </Popconfirm>
              </div>
            </div>
          );
        })}
      </div>

      <Divider />
      <div style={{ marginBottom: "10px" }}>
        <p>Total Amount 2345</p>
        {
          <Button
            type="primary"
            block
            style={{ backgroundColor: "#2F31C8" }}
            onClick={handleSuccess}
          >
            Place Order
          </Button>
        }
      </div>
    </div>
  );
};

export default Cart;

export const items = [
  {
    id: 1,
    name: "Distributor 1",
    price: 2100,
    disc_price: 991,
    mrp: 3400,
  },
  {
    id: 2,
    name: "Distributor 2",
    price: 2100,
    disc_price: 991,
    mrp: 3500,
  },
];
