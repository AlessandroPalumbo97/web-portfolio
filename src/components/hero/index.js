import React from 'react';
import { Row, Col } from 'antd';
import PropTypes from 'prop-types';
import styles from './index.less';

class Hero extends React.Component {
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
    const { photo, title, subTitle, text } = this.props;

    return (
      <div className={styles.jumbo}>
        <Row className={styles.container}>
          <Col md={24}>
            {photo && (
              <img src={photo} alt={title} className={styles.heroPhoto} />
            )}
            <div>
              {title && <h1 className={styles.heroTitle}>{title}</h1>}
              {subTitle && <h3 className={styles.heroSubTitle}>{subTitle}</h3>}
              {text && <p className={styles.heroText}>{text}</p>}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

Hero.propTypes = {
  photo: PropTypes.any,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  text: PropTypes.string,
};

export default Hero;
