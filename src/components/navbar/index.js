import React from 'react';
import { Menu, Row, Col } from 'antd';
import PropTypes from 'prop-types';
import Logo from '@/components/logo';
import styles from './index.less';
import { Link } from 'umi';

class Navbar extends React.Component {
  render() {
    const { elements, location } = this.props || {};

    return (
      <Menu mode="horizontal">
        <Row className={styles.navWrapper}>
          <Col md={4} className={styles.navCol}>
            <Logo location={location} />
          </Col>
          <Col md={16} className={styles.navCol}>
            <div>
              {elements.map((e) => {
                return (
                  <Menu.Item
                    key={e.name}
                    icon={e.icon}
                    className={styles.navItem}
                  >
                    <Link to={e.path}>{e.name}</Link>
                  </Menu.Item>
                );
              })}
            </div>
          </Col>
          <Col md={4} className={styles.navCol}>
            vuoto
          </Col>
        </Row>
      </Menu>
    );
  }
}

Navbar.propTypes = {
  children: PropTypes.any,
  location: PropTypes.objectOf(PropTypes.any),
};

export default Navbar;
