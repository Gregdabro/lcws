import authReducer from "./authSlice";
import messageReducer from "./messageSlice";

const { combineReducers, configureStore } = require("@reduxjs/toolkit");

const rootReducer = combineReducers({
    auth: authReducer,
    message: messageReducer,
});

export function createStore() {
    return configureStore({
        reducer: rootReducer,
    });
}