import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  status: 'idle'
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUserData: (state, action) => {
      const user = action.payload;
      state.users.push(user);
    },
    dataStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { addUserData, dataStatus } = usersSlice.actions;
export default usersSlice.reducer;