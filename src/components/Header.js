import React from 'react';
import { User } from '../containers';
import { Link } from 'react-router-dom';

const Header = ({
  className = 'header row no-gutters items-center p-0 p-md-4',
  handleOpen,
  isOpen,
}) => (
  <header className={className}>
    <div
      className={`mobile-nav mr-2 hidden-md-up ${isOpen ? 'open' : 'closed'}`}
      onClick={handleOpen}
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

    <User />
  </header>
);

export default Header;
