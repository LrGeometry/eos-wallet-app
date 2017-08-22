import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { Helmet } from 'react-helmet';
import {
  Header,
  Footer,
  Navbar } from '../components';
import {
  About,
  Faqs,
  NoMatch,
  Permissions,
  Preferences,
  Profile,
  TransactionHistory,
  Transfer,
  Users } from '../routes';
import Modal from 'react-modal';
import Login from './Login';
import CreateAccount from './CreateAccount';

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
    modalRoutes: [
      '/create-account',
      '/login',
    ],
  }

  constructor(props, context) {
    super(props, context);

    this.previousLocation = {
      pathname: '/',
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
    const { className, location, modalRoutes } = this.props;
    const isModal = modalRoutes.some(r => new RegExp(r).test(location.pathname));

    return (
      <main className={className}>
        <Helmet titleTemplate="%s | EOS Wallet" defaultTitle="EOS Wallet" />

        <Header />
        <div className="flex-fill">
          <Navbar />
          <Switch location={isModal ? this.previousLocation : location}>
            <Scene>
              <Route
                component={Transfer}
                exact
                path="/(|transfer)/"
              />
              <Route
                component={TransactionHistory}
                path="/transactions"
              />
              <Route
                component={Permissions}
                path="/permissions"
              />
              <Route
                component={Profile}
                path="/user/:id"
              />
              <Route
                component={About}
                path="/about"
              />
              <Route
                component={Faqs}
                path="/faqs"
              />
              <Route
                component={Users}
                path="/users"
              />
              <Route
                component={Preferences}
                path="/preferences"
              />
              <Route
                component={NoMatch}
              />

              <Footer />
            </Scene>
          </Switch>
        </div>
        {isModal ?
          <Modal
            isOpen
            contentLabel={location.pathname}
          >
            <Route
              component={Login}
              path="/login"
            />
            <Route
              component={CreateAccount}
              path="/create-account"
            />
          </Modal> : null}
      </main>
    );
  }
}

export default App;
