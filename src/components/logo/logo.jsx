import React from 'react';
import {Link} from 'react-router-dom';
import {logoLight} from '../../types/types';

const Logo = ({isLight}) => {
  const logoClass = isLight ? `logo__link logo__link--light` : `logo__link`;

  return (
    <div className="logo">
      <Link className={logoClass} to='/'>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
};

Logo.propTypes = {isLight: logoLight};

export default Logo;
