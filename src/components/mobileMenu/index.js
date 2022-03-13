import React, { PureComponent } from 'react';
import { Menu, Dropdown, Layout } from 'antd';
import PropTypes from 'prop-types';
import { PlusOutlined } from '@ant-design/icons';
import { Link } from 'umi';
import styles from './index.less';
import Logo from '@/components/logo';

const { Header } = Layout;

class MobileMenu extends PureComponent {
  state = {
    visible: false,
  };

  handleVisibleChange = (flag) => {
    this.setState({ visible: flag });
  };

  render() {
    const { visible } = this.state;
    const { elements, location } = this.props;

    const menu = (
      <Menu>
        {elements.map((e) => {
          return (
            <Link to={e.path} key={e.id}>
              <Menu.Item key={e.name} icon={e.icon}>
                {e.name}
              </Menu.Item>
            </Link>
          );
        })}
      </Menu>
    );

    return (
      <Header className={styles.mobileHeader}>
        <div className={styles.menuTogglerWrapper}>
          <Dropdown
            trigger={['click']}
            overlay={menu}
            placement="bottomLeft"
            visible={visible}
            onVisibleChange={this.handleVisibleChange}
          >
            <PlusOutlined
              className={styles.menuToggler}
              rotate={visible ? 45 : 0}
              style={{ color: '#FFFFFF' }}
            />
          </Dropdown>
        </div>
        <div className={styles.logoWrapper}>
          <Logo location={location} />
        </div>
      </Header>
    );
  }
}

MobileMenu.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.any),
  location: PropTypes.objectOf(PropTypes.any),
};

export default MobileMenu;
