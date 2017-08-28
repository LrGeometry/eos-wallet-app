import React from 'react';
import { connect } from 'react-redux';
import { User } from '../../containers';
import { Link } from '../';
import { toggleMenu } from './reducer';

const Header = ({
  className = 'header row no-gutters items-center p-0 p-md-4',
  onMenuClick,
  isOpen,
}) => (
  <header className={className}>
    <div
      className={`mobile-nav mr-2 hidden-md-up ${isOpen ? 'open' : 'closed'}`}
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

    <User />
  </header>
);

const mapStateToProps = ({ header: { menu } }) => ({
  isOpen: menu,
});

const mapDispatchToProps = dispatch => ({
  onMenuClick: () => {
    dispatch(toggleMenu());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
