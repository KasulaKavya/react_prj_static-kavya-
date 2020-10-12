import { createStore } from 'redux'
import rootReducer from './../Reducers/reducer_index'

let storedata=createStore(rootReducer)
export default storedata;