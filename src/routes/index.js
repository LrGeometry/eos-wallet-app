import About from './About';
import CreateAccount from './CreateAccount';
import Faq from './Faq';
import Login from './Login';
import NoMatch from './NoMatch';
import Permissions from './Permissions';
import Preferences from './Preferences';
import Profile from './Profile';
import Transactions from './Transactions';
import Transfer from './Transfer';
import Users from './Users';
import {
  EmailContainer,
  PhoneContainer,
  UsernameContainer,
  PasswordContainer } from '../containers/CreateAccount';

export default [
  {
    routes: [
      {
        path: '/login',
        component: Login,
        exact: true,
        title: '',
        isModal: true,
      },
      {
        path: '/create-account',
        component: CreateAccount,
        isModal: true,
        routes: [
          {
            path: '/create-account/email',
            component: EmailContainer,
            title: '',
          },
          {
            path: '/create-account/phone',
            component: PhoneContainer,
            title: '',
          },
          {
            path: '/create-account/password',
            component: PasswordContainer,
            title: '',
          },
          {
            path: '/create-account',
            component: UsernameContainer,
            title: '',
          },
        ],
      },
      {
        path: '/about',
        component: About,
        title: '',
      },
      {
        path: '/faq',
        component: Faq,
        title: '',
      },
      {
        path: '/',
        component: Transfer,
        exact: true,
        authReq: true,
        title: '',
      },
      {
        path: '/transactions',
        component: Transactions,
        authReq: true,
        title: '',
      },
      {
        path: '/users',
        component: Users,
        authReq: true,
        title: '',
      },
      {
        path: '/user/:id',
        component: Profile,
        authReq: true,
        title: '',
      },
      {
        path: '/permissions',
        component: Permissions,
        authReq: true,
        title: '',
      },
      {
        path: '/preferences',
        component: Preferences,
        authReq: true,
        title: '',
      },
      {
        path: '*',
        component: NoMatch,
        title: '',
      },
    ],
  },
];
