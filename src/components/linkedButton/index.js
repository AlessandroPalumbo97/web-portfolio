import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'umi';
import { Button } from 'antd';

const LinkedButton = (props) => {
  const { link, type, rounded, size, children } = props;

  return (
    <Link to={link}>
      <Button
        type={type}
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
  size: PropTypes.string,
  children: PropTypes.any,
};

export default LinkedButton;
