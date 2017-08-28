const GET_BALANCE = 'GET_BALANCE';
const GET_BALANCE_FAILURE = 'GET_BALANCE_FAILURE';
const GET_BALANCE_SUCCESS = 'GET_BALANE_SUCCESS';

export function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_BALANCE:
      return {
        ...state,
        balance: 'loading',
      };
    case GET_BALANCE_SUCCESS:
      return {
        ...state,
        balance: action.balance,
      };
    default:
      return state;
  }
}
