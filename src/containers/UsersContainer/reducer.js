const TRY_GET_USERS = 'TRY_GET_USERS';

const initialState = {
  all: [
    {
      status: 'Scientist - creative mind - crypto enthusiast - photographer',
      icon: 'url',
      username: 'Brian Dawson',
      url: '',
    },
    {
      status: 'Scientist - creative mind - crypto enthusiast - photographer',
      icon: 'url',
      username: 'Brian Dawson',
      url: '',
    },
    {
      status: 'Scientist - creative mind - crypto enthusiast - photographer',
      icon: 'url',
      username: 'Brian Dawson',
      url: '',
    },
    {
      status: 'Scientist - creative mind - crypto enthusiast - photographer',
      icon: 'url',
      username: 'Brian Dawson',
      url: '',
    },
    {
      status: 'Scientist - creative mind - crypto enthusiast - photographer',
      icon: 'url',
      username: 'Brian Dawson',
      url: '',
    },
    {
      status: 'Scientist - creative mind - crypto enthusiast - photographer',
      icon: 'url',
      username: 'Brian Dawson',
      url: '',
    },
    {
      status: 'Scientist - creative mind - crypto enthusiast - photographer',
      icon: 'url',
      username: 'Brian Dawson',
      url: '',
    },
    {
      status: 'Scientist - creative mind - crypto enthusiast - photographer',
      icon: 'url',
      username: 'Brian Dawson',
      url: '',
    },
    {
      status: 'Scientist - creative mind - crypto enthusiast - photographer',
      icon: 'url',
      username: 'Brian Dawson',
      url: '',
    },
    {
      status: 'Scientist - creative mind - crypto enthusiast - photographer',
      icon: 'url',
      username: 'Brian Dawson',
      url: '',
    },
    {
      status: 'Scientist - creative mind - crypto enthusiast - photographer',
      icon: 'url',
      username: 'Brian Dawson',
      url: '',
    },
    {
      status: 'Scientist - creative mind - crypto enthusiast - photographer',
      icon: 'url',
      username: 'Brian Dawson',
      url: '',
    },
    {
      status: 'Scientist - creative mind - crypto enthusiast - photographer',
      icon: 'url',
      username: 'Brian Dawson',
      url: '',
    },
  ],
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export function tryGetUser() {
  const action = {
    type: TRY_GET_USERS,
  };

  return async (dispatch) => {
    dispatch(action);

    /* TODO complete logic after API resolved */
    return fetch('/users');
  };
}
