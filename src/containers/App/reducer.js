const LOGIN = 'LOGIN';
const LOGIN_FAILURE = 'LOGIN_FAILURE';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

const initialState = {
  user: {
    name: 'Display Name',
    website: 'website',
    status: 'something',
    icon: '/images/male_2.png',
  },
};

export function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: 'LOADING',
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        user: 'FAILED',
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
}
