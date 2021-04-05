import * as PropTypes from 'prop-types';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus, AVATAR_SIZE} from '../../constants/constant';
import {logOut} from '../../store/api-actions';
import {selectUserData} from '../../store/user/selectors';
import {BreadcrumbsType, HeaderClass, HeaderTitleType} from '../../types/types';
import Logo from '../logo/logo';

const Header = ({title, breadcrumbs, type, showUserBlock = true}) => {
  const {authorizationStatus, user} = useSelector(selectUserData);

  const dispatch = useDispatch();

  const isLogIn = authorizationStatus === AuthorizationStatus.AUTH;

  const signOut = () => {
    dispatch(logOut());
  };

  const handleSignOut = (evt) => {
    evt.preventDefault();
    signOut();
  };

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

      {showUserBlock && <div className="user-block">
        {isLogIn
          ? <>
            <Link className="user-block__avatar" to={AppRoute.MY_LIST}>
              <img
                src={user.avatarUrl}
                alt={user.name}
                width={AVATAR_SIZE}
                height={AVATAR_SIZE}
              />
            </Link>

            <a href="#" onClick={handleSignOut} className="user-block__link">Sign Out</a>
          </>
          : <Link to={`/login`} className="user-block__link">Sign in</Link>
        }
      </div>}
    </header>

  );
};

Header.propTypes = {
  title: HeaderTitleType,
  breadcrumbs: BreadcrumbsType,
  type: HeaderClass,
  showUserBlock: PropTypes.bool,
};

export default Header;
