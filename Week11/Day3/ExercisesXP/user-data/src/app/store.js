import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/users/usersSlice";
import { addUserData, dataStatus } from '../features/users/usersSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

const fetchUserData = () => {
  return (dispatch, getState) => {
    dispatch(dataStatus('loading'));
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        data.forEach((element) => {
            dispatch(addUserData(element));
        });
        dispatch(dataStatus('succeded'))
      })
      .catch(error => {
        console.log(error);
        dispatch(dataStatus('failed'));
      });
  };
};

store.dispatch(fetchUserData());

export default store;