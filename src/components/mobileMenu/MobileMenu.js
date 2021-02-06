import React, {PureComponent} from 'react';
import { Menu, Dropdown, Button } from 'antd';
import { AppstoreTwoTone } from '@ant-design/icons';
import { Link } from 'umi'
import styles from './MobileMenu.less'

class MobileMenu extends PureComponent {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    const {collapsed} = this.state;
    const {elements} = this.props;

    const menu = (
      <Menu>
        {
          elements.map(e => {
            return (
              <Menu.Item
                key={e.name}
                icon={e.icon}
              >
                <Link to={e.path}>
                  {e.name}
                </Link>
              </Menu.Item>
            );
          })
        }
      </Menu>
    )

    return (
      <div className={styles.menuTogglerWrapper}>
        <Dropdown
          overlay={menu}
          placement="bottomLeft"
          onVisibleChange={(visible) => this.onCollapse(visible)}
        >
          <AppstoreTwoTone
            className={styles.menuToggler}
            rotate={collapsed ? 45 : 0}
          />
        </Dropdown>
      </div>
    )
  }
}

export default MobileMenu
