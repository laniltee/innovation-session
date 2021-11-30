import {SHOW_NOTIFICATION} from "./actionTypes";

export const showNotification = (message) => ({
  type: SHOW_NOTIFICATION,
  payload: message
})
