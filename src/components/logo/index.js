import React from 'react';
import { Link } from 'umi';
import PropTypes from 'prop-types';
import styles from '@/layouts/main/index.less';

import logoHot from '@/assets/images/AP_logo_hot.svg';
import logoHotPng from '@/assets/images/AP_logo_hot.png';
import logoIta from '@/assets/images/AP_logo_italian.svg';
import logoItaPng from '@/assets/images/AP_logo_italian.png';
import logoAurora from '@/assets/images/AP_logo_aurora.svg';
import logoAuroraPng from '@/assets/images/AP_logo_aurora.png';

const Logo = (props) => {
  const { location, isMobile } = props;
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
        className={isMobile ? styles.mobileHeaderLogo : styles.logo}
        src={getLogo() || getLogo(false)}
        alt="logo"
      />
    </Link>
  );
};

Logo.propTypes = {
  location: PropTypes.string,
  isMobile: PropTypes.bool,
};

export default Logo;
