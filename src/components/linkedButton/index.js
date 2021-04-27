import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'umi';
import { Button } from 'antd';
import styles from './index.less';

const LinkedButton = (props) => {
  const { link, type, rounded, size, children, gradient } = props;

  return (
    <Link to={link}>
      <Button
        className={gradient ? styles.linkedButton : null}
        type={gradient ? type : null}
        style={rounded ? { borderRadius: '25px' } : {}}
        size={size}
      >
        {children}
      </Button>
    </Link>
  );
};

LinkedButton.propTypes = {
  link: PropTypes.string,
  type: PropTypes.string,
  rounded: PropTypes.bool,
  gradient: PropTypes.bool,
  size: PropTypes.string,
  children: PropTypes.any,
};

export default LinkedButton;
