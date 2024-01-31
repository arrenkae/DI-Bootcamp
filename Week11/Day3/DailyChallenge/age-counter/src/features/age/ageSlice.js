import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  age: 0,
  loading: false
};

export const ageUpAsync = createAsyncThunk('age/ageUp', (amount) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(amount);
    }, 1000);
  });
});

export const ageDownAsync = createAsyncThunk('age/ageDown', (amount) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(amount);
    }, 2000);
  });
});

const ageSlice = createSlice({
  name: 'age',
  initialState,
  reducers: {
    calculateAge: (state, action) => {
      const birthDate = new Date(action.payload);
      const diff = Date.now() - birthDate.getTime();
      const ageDate = new Date(diff);
      state.age = Math.abs(ageDate.getUTCFullYear() - 1970);
      state.loading = false;
    },
  },
  extraReducers(builder) {
    builder.addCase(ageUpAsync.fulfilled, (state, action) => {
      console.log(action.payload);
      state.age += action.payload;
      state.loading = false;
    });
    builder.addCase(ageUpAsync.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(ageDownAsync.fulfilled, (state, action) => {
      if (state.age - action.payload >= 0) {
        state.age -= action.payload;
      } else {
        state.age = 0;
      }
      state.loading = false;
    });
    builder.addCase(ageDownAsync.pending, (state, action) => {
      state.loading = true;
    });
  }
});

export const { calculateAge } = ageSlice.actions;
export default ageSlice.reducer;