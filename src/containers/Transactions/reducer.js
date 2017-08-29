const GET_TRANSACTIONS = 'GET_TRANSACTIONS';
const GET_TRANSACTIONS_FAILURE = 'GET_TRANSACTIONS_FAILURE';
const GET_TRANSACTIONS_SUCCESS = 'GET_TRANSACTIONS_SUCCESS';

const initialState = {
  recents: [
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
        recents: 'LOADING',
      };
    case GET_TRANSACTIONS_FAILURE:
      return {
        ...state,
        recents: 'FAILURE',
      };
    case GET_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        recents: action.transactions,
      };
    default:
      return state;
  }
}
