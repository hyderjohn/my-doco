import { useState, useEffect } from "react";
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
import "./Style.css";

const { Text } = Typography;

const Cart = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(items);
  const [total, setTotal] = useState();

  const handleSuccess = () => {
    navigate("/success", { replace: true });
  };

  const handleDelete = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };

  useEffect(() => {
    let sum = 0;
    const totalPrice = data.map((item) => {
      return item.disc_price;
    });
    totalPrice.forEach((item) => {
      sum += item;
    });
    setTotal(sum);
  }, [data]);

  return (
    <div>
      <div>
        <h3 style={{ display: "flex", alignItems: "center", margin: "10px" }}>
          <ShoppingCartOutlined style={{ color: "#33D4FF" }} /> Cart
        </h3>
        <Text className="app-text">2 Items</Text>
        <Text className="app-text" type="secondary">
          <EnvironmentOutlined /> Deliver to ABC, Delhi, 123456
        </Text>
      </div>

      <div>
        {data.map((item) => {
          return (
            <div key={item.id}>
              <Row>
                <Col span={24} className="app-col">
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
                  <img className="image" src={pizza} alt="" />
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
                  <div className="app-div">
                    <Button size="small" className="button">
                      <MinusCircleOutlined />
                    </Button>
                    <h3>13</h3>
                    <Button size="small" className="button">
                      <PlusCircleOutlined />
                    </Button>
                  </div>
                </Col>
              </Row>
              <div className="del-btn">
                <Popconfirm
                  placement="topLeft"
                  title="Delete Item"
                  onConfirm={() => handleDelete(item.id)}
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

      <Divider style={{margin:"10px 0px"}} />
      <div style={{ marginBottom: "10px" }}>
        <Row style={{margin:"10px"}}>
          <Col span={12} style={{display:"flex", textAlign:"left"}}>
            <p>Total Amount</p>
          </Col>
          <Col span={12} style={{textAlign:"right"}}>
            <p>{total}</p>
          </Col>
        </Row>
        <p>Total Amount {total}</p>
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
    disc_price: 991.5,
    mrp: 3400,
  },
  {
    id: 2,
    name: "Distributor 2",
    price: 2100,
    disc_price: 991.5,
    mrp: 3500,
  },
];
