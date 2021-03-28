import React, { PureComponent } from 'react';
import { Link } from 'umi';
import { Layout, Menu } from 'antd';
import styles from './index.less';

const { Sider } = Layout;

class Index extends PureComponent {
  render() {
    const { elements } = this.props || {};

    return (
      <Sider className={styles.sider}>
        <Menu>
          {elements.map((e) => {
            return (
              <Menu.Item key={e.name} icon={e.icon}>
                <Link to={e.path}>{e.name}</Link>
              </Menu.Item>
            );
          })}
        </Menu>
      </Sider>
    );
  }
}

export default Index;
