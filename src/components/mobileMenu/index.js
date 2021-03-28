import React, { PureComponent } from 'react';
import { Menu, Dropdown } from 'antd';
import PropTypes, { arrayOf } from 'prop-types';
import { PlusOutlined } from '@ant-design/icons';
import { Link } from 'umi';
import styles from './index.less';

class MobileMenu extends PureComponent {
  state = {
    visible: false,
  };

  handleVisibleChange = (flag) => {
    this.setState({ visible: flag });
  };

  render() {
    const { visible } = this.state;
    const { elements } = this.props;

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
    );
  }
}

MobileMenu.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.any),
};

export default MobileMenu;
