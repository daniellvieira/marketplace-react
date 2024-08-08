import React from 'react';
import S from './Navbar.module.scss';
import LogoSrc from 'assets/logo.png';

import classNames from 'classnames';
import { RiShoppingCart2Line, RiShoppingCartFill } from 'react-icons/ri';
import Search from 'components/Search';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const iconProps = {
  color: 'white',
  size: 24,
};

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className={S.nav}>
      <div className={S.logo}>
        <img alt={'logo'} src={LogoSrc} onClick={() => navigate('/')} />
      </div>
      {/* <div className={S.links}>
        <div>
          <Link
            to="/"
            className={classNames(S.link, {
              [S.selected]: location.pathname === '/',
            })}
          >
            Home
          </Link>
        </div>
      </div> */}
      <div className={S.search}>
        <Search />
      </div>
      <div className={S.icons}>
        <Link to="/cart">
          {location.pathname === '/cart' ? (
            <RiShoppingCartFill {...iconProps} />
          ) : (
            <RiShoppingCart2Line {...iconProps} />
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
