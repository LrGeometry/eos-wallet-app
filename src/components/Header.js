import React from 'react';
import { UserContainer } from '../containers';
import { Link } from './';

const Header = ({
  className = 'header row no-gutters items-center p-0 p-md-4',
  onMenuClick,
}) => (
  <header className={className}>
    <div
      className="mobile-nav mr-2 hidden-md-up"
      role="button"
      tabIndex={0}
      onClick={onMenuClick}
    >
      <span className="icon-eos_icons_menu" />
    </div>
    <Link to="/">
      <img
        alt=""
        className="logo"
        src="images/logo.svg"
      />
    </Link>

    <UserContainer />
  </header>
);

export default Header;
