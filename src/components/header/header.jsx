import React from 'react';
import {breadcrumbsType, headerClass, headerTitleType} from '../../types/types';
import Logo from '../logo/logo';
import {Link} from 'react-router-dom';


const AVATAR_DESCRIPTION = {
  AVATAR_SIZE: 63,
  AVATAR_LOGO: `img/avatar.jpg`,
  AVATAR_NAME: `User avatar`,
};

const Header = ({title, breadcrumbs, type}) => {
  return (
    <header className={`page-header ${type}`}>
      <Logo/>

      {title && <h1 className="page-title user-page__title">{title}</h1>}

      {breadcrumbs && <nav className="breadcrumbs">
        <ul className="breadcrumbs__list">
          <li className="breadcrumbs__item">
            <Link to={`/films/${breadcrumbs.id}`} className="breadcrumbs__link">{breadcrumbs.name}</Link>
          </li>
          <li className="breadcrumbs__item">
            <a className="breadcrumbs__link">Add review</a>
          </li>
        </ul>
      </nav>}

      <div className="user-block">
        <div className="user-block__avatar">
          <img src={AVATAR_DESCRIPTION.AVATAR_LOGO} alt={AVATAR_DESCRIPTION.AVATAR_NAME} width={AVATAR_DESCRIPTION.AVATAR_SIZE} height={AVATAR_DESCRIPTION.AVATAR_SIZE}/>
        </div>
      </div>
    </header>

  );
};

Header.propTypes = {title: headerTitleType, breadcrumbs: breadcrumbsType, type: headerClass};

export default Header;
