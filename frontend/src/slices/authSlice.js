import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: localStorage.getItem("userInfo") // setting up data from local storage if it is exists
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
};

const authSlice = createSlice({
  name: "auth", //key for new redux data
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload; //creating userInfo state
      localStorage.setItem("userInfo", JSON.stringify(action.payload)); // setting up updating localStorage  data userInfo from payload
    },
    logout: (state, _action) => {
      state.userInfo = null;
      localStorage.clear();
    },
  },
});
export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
