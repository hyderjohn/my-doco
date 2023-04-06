import React from "react";
import {
  HomeOutlined,
  UserOutlined,
  FileTextOutlined,
  ContactsOutlined,
} from "@ant-design/icons";
import "./Style.css"

const Footer = () => {
  return (
    <div
    className="footer-app"
    >
      <HomeOutlined style={{ fontSize: "20px" }} />
      <ContactsOutlined style={{ fontSize: "20px" }} />
      <FileTextOutlined style={{ fontSize: "20px" }} />
      <UserOutlined style={{ fontSize: "20px" }} />
    </div>
  );
};

export default Footer;
