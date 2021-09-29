import React from "react";
import {Layout  } from "antd";

import HeaderComp from './components/layout/header'

const { Header, Footer, Sider, Content } = Layout;



const App = () => {
 
  return (
    <>
     <Layout>
      <Header><HeaderComp /></Header>
      <Content></Content>
    </Layout>
    </>
  );
};

export default App;
