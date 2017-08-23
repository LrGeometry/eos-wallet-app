const LOGIN = 'LOGIN';
const LOGIN_FAILURE = 'LOGIN_FAILURE';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

const initialState = {
  user: null,
};

export function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN:
      return { user: 'LOADING' };
    case LOGIN_FAILURE:
      return { user: 'FAILED' };
    case LOGIN_SUCCESS:
      return { user: action.user };
    default:
      return state;
  }
}
