//Action types
const UPDATE_USER = "UPDATE_USER";
const UPDATE_CONTACT = "UPDATE_CONTACT";

class Store {
  constructor(reducer, intitialState) {
    this.reducer = reducer;
    this.state = intitialState;
  }
  getState() {
    console.log(this.state);
  }

  dispatch(update) {
    this.state = this.reducer(this.state, update);
  }
}

const DEFAULT_USER = { user: {}, contacts: [] };

const updateUser = (update) => ({
  type: UPDATE_USER,
  payload: update,
});

const updateContact = (update) => ({
  type: UPDATE_CONTACT,
  payload: update,
});

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
store.dispatch(updateUser({ foo: "foo" }));
store.dispatch(updateUser({ bar: "bar" }));
store.dispatch(updateUser({ foo: "foz" }));

store.dispatch(updateContact({ name: "Abhishek K", number: 7903470169 }));
store.dispatch(updateContact({ name: "Ankita K", number: 8124600519 }));

console.log(store.getState());
