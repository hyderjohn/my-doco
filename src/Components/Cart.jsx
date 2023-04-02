import React from 'react'
import {ShoppingCartOutlined,PlusCircleOutlined,MinusCircleOutlined, DeleteTwoTone}from '@ant-design/icons'
import { Button, Divider, Row,Col } from 'antd'
import pizza from "../assets/pizza.png"

const Cart = () => {
  return (
    <div>
<div > 
    <h3 style={{display:"flex", alignItems: "left"}}><ShoppingCartOutlined style={{ color:"#33D4FF"}} /> Cart</h3>
    <p style={{display:"flex", alignItems: "left", color:"#3336FF"}}>2 Items</p>
    <p style={{display:"flex", alignItems: "left"}}>Deliver to ABC, Delhi, 123456</p>
</div>


<div>
    <Row>
        <Col span={8} style={{display: "flex", alignItems: "center"}}> <img src={pizza} alt="" style={{width: "100px", height:"100px"}}/></Col>
        <Col span={16} style={{textAlign: "left"}}>
            <h3>Product Name</h3>
            <p>2100 ~ 900</p>
            <p>MRP - 3500</p>
        <div style={{display:"inline-flex", alignItems:'center', gap:"15px", background:"#7375FA", border:"0px", borderRadius:"5px", marginLeft: "10px"}}>
            <Button  style={{border:"none", margin:"5px", border:"none"}}><MinusCircleOutlined /></Button>
            <h3>1</h3>
            <Button  style={{border:"none", margin:"5px"}}><PlusCircleOutlined /></Button>
        </div>
        </Col>
    </Row>
</div>
<div style={{display:"flex", justifyContent:"right", paddingRight: "10px"}}>
<Button style={{border: "none"  }} size="large"><DeleteTwoTone /></Button>
</div>


<Divider />
<div style={{marginBottom:"10px"}}>
    <p>Total Amount  2345</p>
    <Button type='primary' block> Place Order</Button>
</div>
    </div>
  )
}

export default Cart