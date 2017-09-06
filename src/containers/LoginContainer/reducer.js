/* global fetch, Headers */
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
  console.log('login -- error');
  return {
    type: FAIL_LOGIN,
    errors,
  };
}

function succeedLogin({ user }) {
  console.log(user);
  return {
    type: SUCCEED_LOGIN,
    user,
  };
}

export function tryLogin(credentials) {
  return async (dispatch) => {
    console.log(credentials);

    const request = {
      method: 'POST',
      mode: 'cors',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(credentials)
    };

    try {
      console.log('awaiting response');
      const response = await fetch('http://localhost:4000/api/login/', request);
      console.log('parsing response');
      const user = await response.json();

      dispatch(succeedLogin({ user }));
    } catch (e) {
      dispatch(failLogin({ errors: e }));
    }
  };
}
