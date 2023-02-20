import React from "react";
import logo from "./logo.svg";
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";

import { Layout, Row, Col, Button, Spin, List, Checkbox, Input } from "antd";
export const moduleAddress =
  "0xa604279e6129beb5fa225673daa13f0fa87095e9a576687d1924120a7777b2be";

function App() {
  return (
    <>
      <Layout>
        <Row align="middle">
          <Col span={20}>
            <h1>Counter Dapp</h1>
          </Col>
          <Col span={4} style={{ textAlign: "right" }}>
            <WalletSelector />
          </Col>
        </Row>
      </Layout>

      <Row align="middle" justify="center">
        <Col xs={0} sm={4} md={6} lg={8} xl={24}>
          <div>
            {" "}
            <h1>Counter</h1>
          </div>
        </Col>
        <Col xs={24} sm={16} md={12} lg={8} xl={0}>
          모바일
        </Col>
      </Row>
    </>
  );
}

export default App;
