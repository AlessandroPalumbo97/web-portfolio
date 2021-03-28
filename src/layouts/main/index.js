import React from 'react';
import { Layout } from 'antd';
import SiderMenu from '@/components/siderMenu';
import MobileMenu from '@/components/mobileMenu';
import Hero from '@/components/hero';
import { MENU_ITEMS } from '@/settings/mainMenu/MenuItems';
import { HERO_ITEMS } from '@/settings/hero/HeroItems';
import PropTypes from 'prop-types';
import styles from './index.less';
// import ParticlesBg from 'particles-bg';

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

  getLogo = (svg = true) => {
    const { location } = this.props;
    const { pathname } = location;

    switch (pathname) {
      case '/salvinification':
        return svg ? logoIta : logoItaPng;
      case '/aurora':
        return svg ? logoAurora : logoAuroraPng;
      default:
        return svg ? logoHot : logoHotPng;
    }
  };

  getHeroItems = () => {
    const { location } = this.props;
    let { pathname } = location;
    pathname = pathname.replace('/', '');

    return HERO_ITEMS[pathname] || null;
  };

  render() {
    const { children } = this.props;
    const { isMobile } = this.state;
    const heroItems = this.getHeroItems();

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

            <img
              className={styles.mobileHeaderLogo}
              src={this.getLogo() || this.getLogo(false)}
              alt="logo"
            />
          </Header>
        ) : (
          <SiderMenu elements={MENU_ITEMS} isMobile={isMobile} />
        )}

        <div
          className={styles.mainCol}
          style={isMobile ? { marginTop: '100px' } : {}}
        >
          {heroItems !== null && (
            <Hero
              title={heroItems.title}
              subTitle={heroItems.subTitle}
              text={heroItems.text}
            />
          )}
          {children}
        </div>

        {!isMobile && (
          <div className={styles.rightCol}>
            <img
              className={styles.logo}
              src={this.getLogo() || this.getLogo(false)}
              alt="logo"
            />
          </div>
        )}
      </Layout>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.any,
  location: PropTypes.string,
};

export default MainLayout;
