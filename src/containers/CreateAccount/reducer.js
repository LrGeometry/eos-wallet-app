const TRY_POST_EMAIL = 'TRY_POST_EMAIL';
const SUCCESS_POST_EMAIL = 'SUCCESS_POST_EMAIL';
const FAIL_POST_EMAIL = 'FAIL_POST_EMAIL';

const TRY_POST_PASSWORD = 'TRY_POST_PASSWORD';
const SUCCESS_POST_PASSWORD = 'SUCCESS_POST_PASSWORD';
const FAIL_POST_PASSWORD = 'FAIL_POST_PASSWORD';

const TRY_POST_PHONE = 'TRY_POST_PHONE';
const SUCCESS_POST_PHONE = 'SUCCESS_POST_PHONE';
const FAIL_POST_PHONE = 'FAIL_POST_PHONE';

const TRY_POST_USERNAME = 'TRY_POST_USERNAME';
const SUCCESS_POST_USERNAME = 'SUCCESS_POST_USERNAME';
const FAIL_POST_USERNAME = 'FAIL_POST_USERNAME';

const initialState = {
  form: {
    email: '',
    password: '',
    phone: '',
    username: '',
  },
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case TRY_POST_EMAIL:
      return {
        ...state,
        form: 'loading',
      };
    case SUCCESS_POST_EMAIL:
      return {
        ...state,
        form: 'loading',
      };
    case FAIL_POST_EMAIL:
      return {
        ...state,
        form: 'loading',
      };
    case TRY_POST_PASSWORD:
      return {
        ...state,
        form: 'loading',
      };
    case SUCCESS_POST_PASSWORD:
      return {
        ...state,
        form: 'loading',
      };
    case FAIL_POST_PASSWORD:
      return {
        ...state,
        form: 'loading',
      };
    case TRY_POST_PHONE:
      return {
        ...state,
        form: 'loading',
      };
    case SUCCESS_POST_PHONE:
      return {
        ...state,
        form: 'loading',
      };
    case FAIL_POST_PHONE:
      return {
        ...state,
        form: 'loading',
      };
    case TRY_POST_USERNAME:
      return {
        ...state,
        form: 'loading',
      };
    case SUCCESS_POST_USERNAME:
      return {
        ...state,
        form: 'loading',
      };
    case FAIL_POST_USERNAME:
      return {
        ...state,
        form: 'loading',
      };
    default:
      return state;
  }
}

export function tryCreateUsername() {
}

export function tryCreateEmail() {
}

export function tryCreatePhone() {
}

export function tryCreatePassword() {
  const action = {
    type: TRY_POST_PASSWORD,
  };

  return (dispatch) => {
    dispatch(action);

    /* TODO complete logic after API resolved */
    fetch('/create-account');
  };
}

