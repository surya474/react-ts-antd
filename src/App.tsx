import React from "react";
import { Menu,Button  } from "antd";

import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined
} from "@ant-design/icons";

interface INavNames {
  name: Array<string>;
}

const App = () => {
  const navList: INavNames = { name: ["nav1", "nav2", "nav3"] };

  return (
    <>
      <div className="logo" />
      <Menu theme="light" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          {navList.name[0]}
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          {navList.name[1]}
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          {navList.name[2]}
        </Menu.Item>
      </Menu>
      <div>
      <Button type="primary">Primary Button</Button>
      </div>
   
    </>
  );
};

export default App;
