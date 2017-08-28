const GET_TRANSACTIONS = 'GET_TRANSACTIONS';
const GET_TRANSACTIONS_FAILURE = 'GET_TRANSACTIONS_FAILURE';
const GET_TRANSACTIONS_SUCCESS = 'GET_TRANSACTIONS_SUCCESS';

const initialState = {
  transactions: [
    {
      sender: {
        name: 'Brian Dawson',
        icon: 'url',
      },
      amount: '1000',
      date: 'July 25',
      memo: 'My Picture challenge',
    },
    {
      sender: {
        name: 'Brian Dawson',
        icon: 'url',
      },
      amount: '1000',
      date: 'July 25',
      memo: 'My Picture challenge',
    },
    {
      sender: {
        name: 'Brian Dawson',
        icon: 'url',
      },
      amount: '1000',
      date: 'July 25',
      memo: 'My Picture challenge',
    },
    {
      sender: {
        name: 'Brian Dawson',
        icon: 'url',
      },
      amount: '1000',
      date: 'July 25',
      memo: 'My Picture challenge',
    },
    {
      sender: {
        name: 'Brian Dawson',
        icon: 'url',
      },
      amount: '1000',
      date: 'July 25',
      memo: 'My Picture challenge',
    },
    {
      sender: {
        name: 'Brian Dawson',
        icon: 'url',
      },
      amount: '1000',
      date: 'July 25',
      memo: 'My Picture challenge',
    },
    {
      sender: {
        name: 'Brian Dawson',
        icon: 'url',
      },
      amount: '1000',
      date: 'July 25',
      memo: 'My Picture challenge',
    },
    {
      sender: {
        name: 'Brian Dawson',
        icon: 'url',
      },
      amount: '1000',
      date: 'July 25',
      memo: 'My Picture challenge',
    },
    {
      sender: {
        name: 'Brian Dawson',
        icon: 'url',
      },
      amount: '1000',
      date: 'July 25',
      memo: 'My Picture challenge',
    },
    {
      sender: {
        name: 'Brian Dawson',
        icon: 'url',
      },
      amount: '1000',
      date: 'July 25',
      memo: 'My Picture challenge',
    },
  ],
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_TRANSACTIONS:
      return {
        ...state,
        transactions: 'LOADING',
      };
    case GET_TRANSACTIONS_FAILURE:
      return {
        ...state,
        transactions: 'FAILURE',
      };
    case GET_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        transactions: action.transactions,
      };
    default:
      return state;
  }
}
