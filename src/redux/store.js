import { /*applyMiddleware, */configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
//import { legacy_createStore as createStore } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

/* const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store; */


const middlewares = [...getDefaultMiddleware(),logger];

const store = configureStore({
    reducer: rootReducer,
    middleware: middlewares
});

export default store;