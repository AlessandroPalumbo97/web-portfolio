import React from "react";
import { Layout } from "antd";
import SiderMenu from "@/components/sider/SiderMenu";
import { SiderElements } from "@/settings/sider/SiderElements";

const MainLayout = (props) => {
  const {children} = props
  return (
    <Layout>
      <SiderMenu elements={SiderElements}/>
      <div>
        <h1 style={{color:"red"}}> MAIN LAYOUT </h1>
        {children}
      </div>
    </Layout>
  )
}

export default MainLayout
