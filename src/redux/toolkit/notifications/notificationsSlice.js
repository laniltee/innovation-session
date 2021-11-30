import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  message: ''
}

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    showNotification: (state, action) => {
      state.message = action.payload
    }
  }
})

// exported actions
export const {showNotification} = notificationsSlice.actions;

// exported reducer
export default notificationsSlice.reducer
