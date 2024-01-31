import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const addThunkTask = (text) => {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch(addTask({ text }));
    }, 5000);
  };
};

export const addAsyncTask = createAsyncThunk('todos/delaytask', (text) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(text);
    }, 2000);
  });
});

const usersSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      const { text } = action.payload;
      state.push({ id: nanoid(), text, completed: false });
    },
    toggleTask: (state, action) => {
      const task = state.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    removeTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
    addPosts: (state, action) => {
      state = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(addAsyncTask.rejected, (state, action) => {
      const text = 'rejected task';
      state.push({ id: nanoid(), text, completed: false });
    });
    builder.addCase(addAsyncTask.fulfilled, (state, action) => {
      const text = action.payload;
      state.push({ id: nanoid(), text, completed: false });
    });
    builder.addCase(addAsyncTask.pending, (state, action) => {
      const text = '...waiting';
      state.push({ id: nanoid(), text, completed: false });
    })
  }
});

export const { addTask, toggleTask, removeTask,addPosts } = todoSlice.actions;
export default todoSlice.reducer;
