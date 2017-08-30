import React from 'react';
import { List, NavLink } from './';

const activeClassName = 'active';
const links = [

  {
    to: '/users',
    text: 'Users',
    activeClassName,
  },
  {
    to: '/about',
    text: 'About',
    activeClassName,
  },
  {
    to: '/faq',
    text: 'FAQ',
    activeClassName,
  },

];

const NavbarLink = ({ text, ...props }) => (
  <NavLink
    className="col-link px-4 py-3"
    exact
    {...props}
  >
    {text}
  </NavLink>
);

const Navbar = ({ children }) => (
  <nav className="left-nav">
    <div className="-is-logged-in">
      {children}
    </div>

    <List
      className="navbar-links"
      data={links}
      renderItem={NavbarLink}
    />
  </nav>
);

export default Navbar;
