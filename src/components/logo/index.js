import React from 'react';
import { Link } from 'umi';
import PropTypes from 'prop-types';

import logoHot from '@/assets/images/AP_logo_hot.svg';
import logoHotPng from '@/assets/images/AP_logo_hot.png';
import logoIta from '@/assets/images/AP_logo_italian.svg';
import logoItaPng from '@/assets/images/AP_logo_italian.png';
import logoAurora from '@/assets/images/AP_logo_aurora.svg';
import logoAuroraPng from '@/assets/images/AP_logo_aurora.png';

const Logo = (props) => {
  const { location } = props;
  const { pathname } = location;

  const getLogo = (svg = true) => {
    switch (pathname) {
      case '/salvinification':
        return svg ? logoIta : logoItaPng;
      case '/aurora':
        return svg ? logoAurora : logoAuroraPng;
      default:
        return svg ? logoHot : logoHotPng;
    }
  };

  return (
    <Link to="/">
      <img
        style={{
          width: '100%',
          maxWidth: 72,
        }}
        src={getLogo() || getLogo(false)}
        alt="logo"
      />
    </Link>
  );
};

Logo.propTypes = {
  location: PropTypes.objectOf(PropTypes.any),
  variableClassName: PropTypes.any,
};

export default Logo;
