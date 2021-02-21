import React from 'react';
import { Col, Layout, Row } from 'antd';
import SiderMenu from '@/components/siderMenu';
import MobileMenu from '@/components/mobileMenu';
import { MENU_ITEMS } from '@/settings/mainMenu/MenuItems';
import PropTypes from 'prop-types';
import styles from './index.less';
import ParticlesBg from 'particles-bg';

import logoHot from '@/assets/images/AP_logo_hot.svg';
import logoHotPng from '@/assets/images/AP_logo_hot.png';
import logoIta from '@/assets/images/AP_logo_italian.svg';
import logoItaPng from '@/assets/images/AP_logo_italian.png';
import logoAurora from '@/assets/images/AP_logo_aurora.svg';
import logoAuroraPng from '@/assets/images/AP_logo_aurora.png';

const { Header } = Layout;

class MainLayout extends React.Component {
  state = {
    isMobile: window.innerWidth < 768,
    // /*currentLogo: {
    //   svg: logoHot,
    //   png: logoHotPng,
    // },*/
  };

  componentDidMount() {
    window.addEventListener(
      'resize',
      () => {
        this.setState({
          isMobile: window.innerWidth < 768,
        });
      },
      false,
    );
  }

  // setLogoStyle = (style) => {
  //   switch (style) {
  //     case '/salvinification':
  //       this.setState({currentLogo: {
  //         svg: logoIta,
  //         png: logoItaPng,
  //       }});
  //       break;
  //     case '/aurora':
  //       this.setState({currentLogo: {
  //         svg: logoAurora,
  //         png: logoAuroraPng,
  //       }});
  //       break;
  //     default:
  //       this.setState({currentLogo: {
  //         svg: logoHot,
  //         png: logoHotPng,
  //       }});
  //       break;
  //   }
  // };

  getLogoSvg = () => {
    const { location } = this.props;
    const { pathname } = location;

    switch (pathname) {
      case '/salvinification':
        return logoIta;
      case '/aurora':
        return logoAurora;
      default:
        return logoHot;
    }
  };

  getLogoPng = () => {
    const { location } = this.props;
    const { pathname } = location;

    switch (pathname) {
      case '/salvinification':
        return logoItaPng;
      case '/aurora':
        return logoAuroraPng;
      default:
        return logoHotPng;
    }
  };

  render() {
    const { children } = this.props;

    const { isMobile } = this.state;

    // const bg = (
    //   <ParticlesBg
    //     color="#ffffff"
    //     type={'cobweb'}
    //     num={100}
    //     bg={true}
    //   />
    // );

    return (
      <Layout className={styles.layout}>
        {isMobile ? (
          <Header className={styles.mobileHeader}>
            <MobileMenu elements={MENU_ITEMS} />
          </Header>
        ) : (
          <SiderMenu elements={MENU_ITEMS} isMobile={isMobile} />
        )}

        <div
          style={{
            width: '100%',
            minHeight: '100vh',
          }}
        >
          {children}
        </div>

        <div className={styles.rightCol}>
          <img src={this.getLogoSvg() || this.getLogoPng()} alt="logo" />
        </div>
      </Layout>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.any,
  location: PropTypes.string,
};

export default MainLayout;
