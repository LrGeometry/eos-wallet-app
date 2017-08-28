import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { Helmet } from 'react-helmet';
import Modal from 'react-modal';
import { renderRoutes } from 'react-router-config';
import {
  Header,
  Footer,
  Navbar } from '../components';
import routes from '../routes';

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
      pathname: '/about',
      hash: '',
      search: '',
    };
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

  render() {
    const { className, location = this.previousLocation } = this.props;
    const isModal = modalRoutes.some(({ path }) => new RegExp(path).test(location.pathname));

    location.state = { modal: isModal };

    return (
      <main className={className}>
        <Helmet titleTemplate="%s | EOS Wallet" defaultTitle="EOS Wallet" />

        <Header />
        <div className="flex-fill">
          <Navbar />
          <Scene>
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
          >
            {renderRoutes(modalRoutes)}
          </Modal> : null}
      </main>
    );
  }
}

export default App;
