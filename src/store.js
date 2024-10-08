import {  applyMiddleware, legacy_createStore } from "redux";
import todoReducer from "./reducer";
import { thunk } from "redux-thunk";


const store=legacy_createStore(
    todoReducer,applyMiddleware(thunk) //thunk is used as a middleware store has the major changes
);

export default store;

