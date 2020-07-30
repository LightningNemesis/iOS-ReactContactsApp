
class Store {
    constructor(reducer, intitialState){
        this.reducer = reducer
        this.state = intitialState
    }
    getState() {
        console.log(this.state)
    }
    
    dispatch(update) {
        this.state = this.reducer(this.state, update)
    }
}

const merge = (prev, next) => Object.assign({}, prev, next)

const reducer = (state, update) => merge(state, update)

const store = new Store(reducer)
store.dispatch({bar: 'baz'})
store.dispatch({foo: 'far'})
console.log(store.getState())

// let state = {}
// state = reducer(state, {foo: 'foo'})
// state = reducer(state, {bar: 'bar'})
// state = reducer(state, {foo: 'baz'})
// state = reducer(state, {bar: 'booz'})

// console.log(state)