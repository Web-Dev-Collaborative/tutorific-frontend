import defaultAppState from './defaultState';

export const login = (state = defaultAppState.login, action) => {
  switch (action.type) {
    case 'set_login_user_type':
    return {
      ...state,
      userType: action.userType
    }
    case 'toggle_login_panel':
    return {
      ...state,
      showLoginModal: !state.showLoginModal
    }
    case 'update_login_data':
    return {
      ...state,
      ...action.data
    }
    default:
    return state;
  }
};