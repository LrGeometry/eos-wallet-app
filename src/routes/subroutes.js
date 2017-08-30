import {
  EmailContainer,
  PhoneContainer,
  UsernameContainer,
  PasswordContainer } from '../containers/CreateAccount';

export default [
  {
    routes: [
      {
        path: '/create-account',
        component: UsernameContainer,
        title: '',
        exact: true,
      },
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
    ],
  },
];
