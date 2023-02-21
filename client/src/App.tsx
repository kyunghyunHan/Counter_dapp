import { useEffect, useState } from "react";

import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import { AptosClient } from "aptos";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { Layout, Row, Col, Button, Spin, List, Checkbox, Input } from "antd";
export const moduleAddress =
  "0xa604279e6129beb5fa225673daa13f0fa87095e9a576687d1924120a7777b2be";
export const NODE_URL = "https://fullnode.testnet.aptoslabs.com";
export const client = new AptosClient(NODE_URL);
function App() {
  const { account, signAndSubmitTransaction } = useWallet();
  const [newTask, setNewTask] = useState<any>("");
  useEffect(() => {
    const genRandomKey = async () => {
      if (!account) return [];
      const todoListResource = await client.getAccountResource(
        account?.address,
        `${moduleAddress}::counter::Counter`
      );
      const taskCounter = (todoListResource as any).data.counter;
      setNewTask(taskCounter);
    };

    genRandomKey();
  }, [account]);
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

      <Row style={{ textAlign: "center" }}>
        <Col xs={0} sm={0} md={0} lg={0} xl={24}>
          <div>
            <h1>Counter</h1>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={0}>
          모바일
        </Col>
      </Row>
      <Row style={{ textAlign: "center" }}>
        <Col xs={0} sm={0} md={0} lg={0} xl={24}>
          <div>
            <h1>{newTask}</h1>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={0}>
          모바일
        </Col>
      </Row>
    </>
  );
}

export default App;
