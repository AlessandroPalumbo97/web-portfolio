import React from "react";
import { Layout } from "antd";
import SiderMenu from "@/components/sider/SiderMenu";
import { siderElements } from "@/settings/sider/SiderElements";

const MainLayout = (props) => {
  const {children} = props
  return (
    <Layout
      style={{
        width:"100vw",
        minHeight: "100vh"
      }}
    >
      <SiderMenu elements={siderElements}/>
      <div
        style={{
          width: "100vw",
          minHeight: "100vh"
        }}
      >
        <h1 style={{color:"red"}}> MAIN LAYOUT </h1>
        {children}
      </div>
    </Layout>
  )
}

export default MainLayout
