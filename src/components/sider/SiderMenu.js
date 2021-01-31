import React, {PureComponent} from 'react';
import { Link } from 'umi'
import { Layout, Menu } from 'antd';

const { Sider } = Layout;

class SiderMenu extends PureComponent {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    const { elements } = this.props;

    console.log(elements)
    return (
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={this.onCollapse}
      >
        <Menu>
          {
            elements.map(e => {
              return (
                !collapsed ? (
                  <Menu.Item
                    key={e.name}
                    icon={e.icon}
                  >
                    <Link to={e.path}>
                      {e.name}
                    </Link>
                  </Menu.Item>
                ) : (
                  <Menu.Item
                    key={e.name}
                  >
                    <Link to={e.path}>
                      {e.icon}
                    </Link>
                  </Menu.Item>
                )
              )
            })
          }
        </Menu>
      </Sider>
    )
  }
}

export default SiderMenu
