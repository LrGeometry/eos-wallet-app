import React from 'react';
import { Link } from './';

const Header = ({
  children,
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

    {children}
  </header>
);

export default Header;
