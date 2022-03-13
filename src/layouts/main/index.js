import React from 'react';
import { Layout } from 'antd';
import MobileMenu from '@/components/mobileMenu';
import Navbar from '@/components/navbar';
import { MENU_ITEMS } from '@/settings/mainMenu/MenuItems';
import PropTypes from 'prop-types';
import styles from './index.less';
import Typekit from 'react-typekit';

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

    return (
      <Layout className={styles.layout}>
        <Typekit kitId="sjl0wey" />
        {isMobile ? (
          <MobileMenu elements={MENU_ITEMS} location={location} />
        ) : (
          <Navbar elements={MENU_ITEMS} location={location} />
        )}

        <div style={isMobile ? { marginTop: '100px' } : {}}>{children}</div>
      </Layout>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.any,
  location: PropTypes.objectOf(PropTypes.any),
};

export default MainLayout;
