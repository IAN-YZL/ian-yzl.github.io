import { Layout } from "antd";
import React from "react";
import SideBar from "./components/SideBar";
import "./App.css";
import "antd/dist/antd.css";

const { Sider } = Layout;

function App() {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider style={{ height: "100vh" }}>
        <SideBar />
      </Sider>
    </Layout>
  );
}

export default App;
