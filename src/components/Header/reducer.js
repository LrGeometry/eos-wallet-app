const TOGGLE_MENU = 'TOGGLE_MENU';
const CLOSE_MENU = 'CLOSE_MENU';

const initialState = {
  menu: false,
};

export function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CLOSE_MENU:
      return {
        ...state,
        menu: false,
      };
    case TOGGLE_MENU:
      return {
        ...state,
        menu: !state.menu,
      };
    default:
      return state;
  }
}

export function closeMenu() {
  return {
    type: CLOSE_MENU,
  };
}

export function toggleMenu() {
  return {
    type: TOGGLE_MENU,
  };
}
