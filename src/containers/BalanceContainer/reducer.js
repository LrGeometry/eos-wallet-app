const TRY_GET_BALANCE = 'TRY_GET_BALANCE';
const SUCCESS_GET_BALANCE = 'SUCCESS_GET_BALANCE';
const FAIL_GET_BALANCE = 'FAIL_GET_BALANCE';

const initialState = {
  account: {
    ownership: 'My',
    formattedBalance: '0.500',
    priceUpdate: '+27.600',
  },
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case TRY_GET_BALANCE:
      return {
        ...state,
        balance: 'loading',
      };
    case SUCCESS_GET_BALANCE:
      return {
        ...state,
        balance: action.balance,
      };
    case FAIL_GET_BALANCE:
      return {
        ...state,
        balance: 'error',
      };
    default:
      return state;
  }
}

export function refreshBalance() {
}
