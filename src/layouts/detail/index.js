import React from 'react';
import { Link } from 'umi';
import { Layout } from 'antd';
import { LeftCircleTwoTone } from '@ant-design/icons';
import PropTypes from 'prop-types';
import styles from './index.less';
// import ParticlesBg from 'particles-bg';

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

  render() {
    const { children } = this.props;

    return (
      <Layout className={styles.layout}>
        <Link to="/">
          <LeftCircleTwoTone
            className={styles.backIcon}
            onClick={this.goBack}
            twoToneColor="#ffce00"
          />
        </Link>
        {children}
      </Layout>
    );
  }
}

DetailLayout.propTypes = {
  children: PropTypes.any,
};

export default DetailLayout;
