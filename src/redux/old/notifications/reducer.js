import {SHOW_NOTIFICATION} from "./actionTypes";

const initialState = {
  message: ''
}

const notificationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_NOTIFICATION:
      return {
        ...state,
        message: action.payload
      }
    default:
      return state;
  }
}

export default notificationsReducer;
