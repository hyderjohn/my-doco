import React from "react";
import {
  HomeOutlined,
  UserOutlined,
  FileTextOutlined,
  ContactsOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "5px",
        // padding:"10px"
      }}
    >
      <HomeOutlined style={{ fontSize: "20px" }} />
      <ContactsOutlined style={{ fontSize: "20px" }} />
      <FileTextOutlined style={{ fontSize: "20px" }} />
      <UserOutlined style={{ fontSize: "20px" }} />
    </div>
  );
};

export default Footer;
