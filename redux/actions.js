import { login } from "../API";

//Action types
import { PURGE } from "redux-persist";
export const UPDATE_USER = "UPDATE_USER";
export const UPDATE_CONTACT = "UPDATE_CONTACT";
export const LOG_IN_SENT = "LOG_IN_SENT";
export const LOG_IN_FULFILLED = "LOG_IN_FULFILLED";
export const LOG_IN_REJECTED = "LOG_IN_REJECTED";

//Action Creators
export const updateUser = (update) => ({
  type: UPDATE_USER,
  payload: update,
});

export const updateContact = (update) => ({
  type: UPDATE_CONTACT,
  payload: update,
});

// Async action creator
// export const logInUser = (username, password) => (dispatch) => {
//   dispatch({ type: LOG_IN_SENT });
//   login(username, password)
//     .then((token) => {
//       dispatch({ type: LOG_IN_FULFILLED, payload: token });
//     })
//     .catch((err) => {
//       dispatch({ type: LOG_IN_REJECTED, payload: err.message });
//     });
//   return;
// };

// async action creator
export const logInUser = (username, password) => async (dispatch) => {
  dispatch({ type: LOG_IN_SENT });
  try {
    const token = await login(username, password);
    dispatch({ type: LOG_IN_FULFILLED, payload: token });
  } catch (err) {
    dispatch({ type: LOG_IN_REJECTED, payload: err.message });
  }
};

export const purgeState = () => (dispatch) => {
  dispatch({
    type: PURGE,
    result: ()=>null,
    key: 'root', 
  });
};
