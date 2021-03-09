import { LOGOUT } from "./AppTemplateActions";
import { SHOW_MODAL } from "./AppTemplateActions";
import { HIDE_MODAL } from "./AppTemplateActions";
import { LOGIN } from "../login/LoginPageActions";


const initialState = {
  token: null,
  authenticated: false,
  showModal: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT:
      return { ...initialState };
    case LOGIN:
      return {
        ...state,
        token: action.token,
        authenticated: true,
      };
    case SHOW_MODAL:
      return {
        ...state,
        showModal: true,
      };
    case HIDE_MODAL:
      return {
        ...state,
        showModal: false,
      };
    default:
      return state;
  }
};
