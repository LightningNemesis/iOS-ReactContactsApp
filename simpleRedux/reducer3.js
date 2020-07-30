const fetch = require('isomorphic-fetch')

//Action types
const UPDATE_USER = "UPDATE_USER";
const UPDATE_CONTACT = "UPDATE_CONTACT";

const login = async (username, password) => {
  const response = await fetch("http://localhost:8000/", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  // .then((res) => console.log(JSON.stringify(res)));

  if (response.ok) {
    return true;
  }

  const errMessage = await response.text();
  throw new Error(errMessage);
};

class Store {
  constructor(reducer, intitialState) {
    this.reducer = reducer;
    this.state = intitialState;
  }
  getState() {
    console.log(this.state);
  }

  dispatch(action) {
    if (typeof action === "function") {
      action(this.dispatch.bind(this));
    } else {
      console.log("Recieved an Action:", action.type);
      this.state = this.reducer(this.state, action);
    }
  }
}

const DEFAULT_USER = { user: {}, contacts: [] };

// Action creators
const updateUser = (update) => ({
  type: UPDATE_USER,
  payload: update,
});

const updateContact = (update) => ({
  type: UPDATE_CONTACT,
  payload: update,
});

// Async action creator
const logInUser = (username, password) => (dispatch) => {
  dispatch({ type: "LOG_IN_SENT" });
  login(username, password)
    .then(() => {
      dispatch({ type: "LOG_IN_SUCCESS" });
    })
    .catch((err) => {
      dispatch({ type: "LOG_IN_REJECTED" });
    });
  return;
};

const merge = (prev, next) => Object.assign({}, prev, next);

const contactReducer = (state, action) => {
  if (action.type === UPDATE_CONTACT) {
    return [...state, action.payload];
  }
  return state;
};

const userReducer = (state, action) => {
  if (action.type === UPDATE_USER) {
    return merge(state, action.payload);
  }
  return state;
};

const reducer = (state, action) => ({
  user: userReducer(state.user, action),
  contacts: contactReducer(state.contacts, action),
});

const store = new Store(reducer, DEFAULT_USER);
store.dispatch(logInUser('username', 'password'));
// store.dispatch(updateUser({ foo: "foo" }));
// store.dispatch(updateUser({ bar: "bar" }));
// store.dispatch(updateUser({ foo: "foz" }));

// store.dispatch(updateContact({ name: "Abhishek K", number: 7903470169 }));
// store.dispatch(updateContact({ name: "Ankita K", number: 8124600519 }));

console.log(store.getState());
