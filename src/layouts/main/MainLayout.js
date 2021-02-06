import React from "react";
import { Layout } from "antd";
import SiderMenu from "@/components/siderMenu/SiderMenu";
import MobileMenu from "@/components/mobileMenu/MobileMenu";
import { menuElements } from "@/settings/mainMenu/MenuElements";
import styles from "./MainLayout.less";

class MainLayout extends React.Component {
  state = {
    isMobile: window.innerWidth < 768,
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({
        isMobile: window.innerWidth < 768
      });
    }, false);
  }

  render() {
    const {children} = this.props
    const {isMobile} = this.state

    return (
      <Layout
        style={{
          width:"100vw",
          minHeight: "100vh"
        }}
      >
        {
          isMobile ? (
            <div className={styles.mobileMenuWrapper}>
              <MobileMenu elements={menuElements} />
            </div>
          ) : (
            <SiderMenu
              elements={menuElements}
              isMobile={isMobile}
            />
          )
        }
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
}

export default MainLayout
