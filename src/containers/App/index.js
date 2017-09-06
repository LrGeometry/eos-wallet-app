import React, { Component } from 'react';
import renderRoutes from '../../func/renderRoutes';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import {
  Header,
  Footer,
  Navbar,
  Shortcuts } from '../../components';
import {
  BalanceContainer,
  UserContainer } from '../';
import _routes from '../../routes';
import { closeMenu, toggleMenu } from './reducers/menu';

const [{ routes }] = _routes;
const normalRoutes = routes.filter(r => !r.isModal);
const modalRoutes = routes.filter(r => r.isModal);

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

    /* eslint-disable */
    this.previousLocation = this.unauthLocation = {
      pathname: '/about',
      hash: '',
      search: '',
    };
    /* eslint-enable */
  }

  componentDidMount() {
    const { forceCloseMenu, history } = this.props;

    history.listen(forceCloseMenu);
  }

  componentWillUpdate(nextProps) {
    const { auth, location } = this.props;
    // set previousLocation if props.location is not modal
    if (
      nextProps.history.action !== 'POP' &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = auth ? this.props.location : this.unauthLocation;
    }
  }

  handleModalClose() {
    const { history } = this.props;
    history.push(this.previousLocation);
  }

  render() {
    const {
      auth,
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
        >
          {auth && <UserContainer />}
        </Header>

        <div className="flex-fill">
          <Navbar>
            {auth && <BalanceContainer auth /> }
            {auth && <Shortcuts /> }
          </Navbar>

          <Scene>
            <div
              className="menu-closer"
              onClick={forceCloseMenu}
              role="button"
              tabIndex={0}
            />

            {renderRoutes(
              normalRoutes,
              { auth },
              { location: isModal ? this.previousLocation : location })}

            <Footer />
          </Scene>
        </div>

        {isModal &&
          <Modal
            isOpen
            contentLabel={location.pathname}
            onRequestClose={handleModalClose}
          >
            {renderRoutes(modalRoutes, { handleModalClose })}
          </Modal>}
      </main>
    );
  }
}

const mapStateToProps = ({ menu, user }) => ({
  isMenuOpen: menu.isOpen,
  auth: !user,
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
