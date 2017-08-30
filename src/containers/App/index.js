import React, { Component } from 'react';
import { Switch } from 'react-router';
import { renderRoutes } from 'react-router-config';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import {
  Header,
  Footer,
  Navbar,
  Shortcuts } from '../../components';
import { BalanceContainer } from '../';
import routes from '../../routes';
import { closeMenu, toggleMenu } from './reducers/menu';

const normalRoutes = routes[0].routes.filter(r => !r.isModal);
const modalRoutes = routes[0].routes.filter(r => r.isModal);

const Scene = ({
  children,
  className = 'main-content',
  location,
  computedMatch,
  ...props }) => (
  <div
    className={className}
    {...props}
  >
    {children}
  </div>
);

class App extends Component {
  static defaultProps = {
    className: 'app container-fluid p-0 row no-gutters d-flex',
  }

  constructor(props, context) {
    super(props, context);

    this.previousLocation = {
      pathname: '/',
      hash: '',
      search: '',
    };
  }

  componentDidMount() {
    const { forceCloseMenu, history } = this.props;

    history.listen(forceCloseMenu);
  }

  componentWillUpdate(nextProps) {
    const { location } = this.props;
    // set previousLocation if props.location is not modal
    if (
      nextProps.history.action !== 'POP' &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location;
    }
  }

  handleModalClose() {
    const { history } = this.props;
    history.push(this.previousLocation);
  }

  render() {
    const {
      account,
      className,
      forceCloseMenu,
      isMenuOpen,
      location = this.previousLocation,
      onMenuClick,
    } = this.props;
    const handleModalClose = this.handleModalClose.bind(this);
    const isModal = modalRoutes.some(({ path }) => new RegExp(path).test(location.pathname));

    location.state = { modal: isModal };

    return (
      <main className={`${className} ${isMenuOpen ? 'open' : 'closed'}`}>
        <Helmet titleTemplate="%s | EOS Wallet" defaultTitle="EOS Wallet" />

        <Header
          isMenuOpen={isMenuOpen}
          onMenuClick={onMenuClick}
        />

        <div className="flex-fill">
          <Navbar>
            {account && <BalanceContainer auth /> }
            {account && <Shortcuts /> }
          </Navbar>

          <Scene>
            <div
              className="menu-closer"
              onClick={forceCloseMenu}
              role="button"
              tabIndex={0}
            />

            <Switch location={isModal ? this.previousLocation : location}>
              {renderRoutes(normalRoutes)}
            </Switch>

            <Footer />
          </Scene>
        </div>

        {isModal ?
          <Modal
            isOpen
            contentLabel={location.pathname}
            onRequestClose={handleModalClose}
          >
            {renderRoutes(modalRoutes)}
          </Modal> : null}
      </main>
    );
  }
}

const mapStateToProps = ({ balance, menu }) => ({
  isMenuOpen: menu.isOpen,
  account: balance.account,
});

const mapDispatchToProps = dispatch => ({
  onMenuClick: () => {
    dispatch(toggleMenu());
  },
  forceCloseMenu: () => {
    dispatch(closeMenu());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
