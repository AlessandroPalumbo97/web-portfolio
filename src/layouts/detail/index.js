import React from 'react';
import { Layout } from 'antd';
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

    // const bg = (
    //   <ParticlesBg
    //     color="#ffffff"
    //     type={'cobweb'}
    //     num={100}
    //     bg={true}
    //   />
    // );

    return <Layout className={styles.layout}>{children}</Layout>;
  }
}

DetailLayout.propTypes = {
  children: PropTypes.any,
};

export default DetailLayout;
