import React from 'react';
import { Layout } from 'antd';
import SiderMenu from '@/components/siderMenu';
import MobileMenu from '@/components/mobileMenu';
import Hero from '@/components/hero';
import Logo from '@/components/logo';
import { MENU_ITEMS } from '@/settings/mainMenu/MenuItems';
import { HERO_ITEMS } from '@/settings/hero/HeroItems';
import PropTypes from 'prop-types';
import styles from './index.less';
import ParticlesBg from 'particles-bg';
import Typekit from 'react-typekit';

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

  getHeroItems = () => {
    const { location } = this.props;
    let { pathname } = location;
    pathname = pathname.replace('/', '');

    return HERO_ITEMS[pathname] || null;
  };

  render() {
    const { children, location } = this.props;
    const { isMobile } = this.state;
    const heroItems = this.getHeroItems();

    // const config = {
    //   num: [10, 20], // numero di particelle, [min, max]
    //   rps: 0.1, // rateo di emissione (in secondi)
    //   radius: [1, 50],
    //   life: [1, 4], // longevità delle particelle
    //   v: [1, 2],
    //   tha: [0, 0],
    //   alpha: [0.3, 0.6],
    //   scale: [1, 2],
    //   position: 'all',
    //   color: ['#000000'],
    //   cross: 'dead',
    //   random: 10,
    //   f: [0, -1],
    //   g: null,
    // };

    return (
      <Layout className={styles.layout}>
        <Typekit kitId="sjl0wey" />
        {isMobile ? (
          <Header className={styles.mobileHeader}>
            <MobileMenu elements={MENU_ITEMS} />

            <div className={styles.logoWrapper}>
              <Logo isMobile={isMobile} location={location} />
            </div>
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
              photo={heroItems.photo ? heroItems.photo : null}
            />
          )}
          {children}
        </div>

        {!isMobile && (
          <div className={styles.rightCol}>
            <Logo isMobile={isMobile} location={location} />
          </div>
        )}
        <ParticlesBg
          color={'#c7c7c7'}
          type={'cobweb'}
          num={60}
          bg={true}
          // config={config}
        />
      </Layout>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.any,
  location: PropTypes.objectOf(PropTypes.any),
};

export default MainLayout;
