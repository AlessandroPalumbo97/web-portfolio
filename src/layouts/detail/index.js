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
// import ParticlesBg from 'particles-bg';

const { Header } = Layout;

class DetailLayout extends React.Component {
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
        <h1>LAYOPUT HUHIIJIOJOOJOJ</h1>
        {children}
      </Layout>
    );
  }
}

DetailLayout.propTypes = {
  children: PropTypes.any,
  location: PropTypes.string,
};

export default DetailLayout;
