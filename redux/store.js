import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import {persistStore, persistReducer} from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage';
// import createExpoFileSystemStorage from 'expo-filesystem-storage'
import reducer from './reducer'

// const expoFsStorage = createExpoFileSystemStorage();

import {updateContact} from './actions'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['navigation']
}

export const persistedReducer = persistReducer(persistConfig, reducer)

export const store = createStore(persistedReducer, applyMiddleware(thunk))
export const persistor = persistStore(store)

// const thunkMiddleware = store => next => action => {
//     if(typeof action === 'function') {
//         action(store.dispatch)
//     } else {
//         next(action)
//     }
// }


// store.dispatch(updateUser({ foo: "foo" }));
// store.dispatch(updateUser({ bar: "bar" }));
// store.dispatch(updateUser({ foo: "foz" }));

store.dispatch(updateContact({ name: "Stefan Salvatore", phone: '7903478169' }));
store.dispatch(updateContact({ name: "Niklaus Mikaelson", phone: '8432600519' }));

// console.log(store.getState());

