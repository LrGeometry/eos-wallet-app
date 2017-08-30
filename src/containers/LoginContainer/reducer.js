/* global fetch */
const TRY_LOGIN = 'TRY_LOGIN';
const FAIL_LOGIN = 'FAIL_LOGIN';
const SUCCEED_LOGIN = 'SUCCEED_LOGIN';

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
    case TRY_LOGIN:
      return {
        ...state,
        user: 'LOADING',
      };
    case FAIL_LOGIN:
      return {
        ...state,
        user: 'FAILED',
      };
    case SUCCEED_LOGIN:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
}

function failLogin({ errors }) {
  return {
    type: FAIL_LOGIN,
    errors,
  };
}

function succeedLogin({ user }) {
  return {
    type: SUCCEED_LOGIN,
    user,
  };
}

export function tryLogin(credentials) {
  return async (dispatch) => {
    dispatch(tryLogin(credentials));

    fetch('/login')
      .then((user) => {
        dispatch(succeedLogin({
          user,
        }));
      })
      .catch((e) => {
        dispatch(failLogin({ errors: e }));
      });
  };
}
