import React from 'react'
import {BellOutlined, MenuOutlined}from '@ant-design/icons'

const Header = () => {
  return (
    <div style={{display: "flex",
        alignItems: "center",
        justifyContent: "space-between"}} >
        <MenuOutlined  />
        <BellOutlined />
    </div>
  )
}

export default Header