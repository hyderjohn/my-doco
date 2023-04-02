import React from 'react'
import {HomeOutlined, UserOutlined,FileTextOutlined,ContactsOutlined}from '@ant-design/icons'

const Footer = () => {
  return (
    <div style={{display:"flex", justifyContent:"space-between", marginBottom:"10px"}}><HomeOutlined />
    <ContactsOutlined />
    <FileTextOutlined />

    <UserOutlined />
    </div>
  )
}

export default Footer