import React from 'react'
import {Divider } from "antd";
import {BellOutlined, MenuOutlined}from '@ant-design/icons'
import "./Style.css"


const Header = () => {
  return (
    <>
    <div className="header-app">
        <MenuOutlined  />
        <BellOutlined />
    </div>
    <Divider style={{margin:"10px 0px"}}/>
    </>
  )
}

export default Header