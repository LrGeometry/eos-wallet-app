const TOGGLE_MENU = 'TOGGLE_MENU';

const initialState = {
  menu: false,
};

export function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        menu: !state.menu,
      };
    default:
      return state;
  }
}

export function toggleMenu() {
  return {
    type: TOGGLE_MENU,
  };
}
