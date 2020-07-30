import { combineReducers } from "redux";
import { PURGE } from "redux-persist";

import {
  UPDATE_USER,
  UPDATE_CONTACT,
  LOG_IN_FULFILLED,
  LOG_IN_SENT,
  LOG_IN_REJECTED,
} from "./actions";

const merge = (prev, next) => Object.assign({}, prev, next);

// const contactReducer = (state = [], action) => {
//   switch (action.type) {
//     case UPDATE_CONTACT:
//       return [...state, action.payload];
//     default:
//       return state;
//   }
// };


const contactReducer = (state = [], action) => {
  if (action.type === UPDATE_CONTACT) return [...state, action.payload]
  return state
}

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return merge(state, action.payload)
    case UPDATE_CONTACT:
      return merge(state, {prevContact: action.payload})
    case LOG_IN_FULFILLED:
      console.log(action.type)
      return merge(state, {token: action.payload})
    case LOG_IN_REJECTED:
      console.log(action.type)
      return merge(state, {loginErr: action.payload})
    case PURGE: 
      return {}
    default:
      return state
  }
}

const reducer = combineReducers({
  user: userReducer,
  contacts: contactReducer,
});

export default reducer;
