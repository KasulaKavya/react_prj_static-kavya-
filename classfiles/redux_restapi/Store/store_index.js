import { createStore } from 'redux'
import rootReducer from './../Reducers/reducer_index'
import promiseMiddleware from 'redux-promise';

let storedata=createStore(rootReducer,applyMiddleware(promiseMiddleware) )
export default storedata;