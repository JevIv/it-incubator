import {applyMiddleware, combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-recuder";
import thunk from "redux-thunk";
import {loadState, saveState} from "../utils/localStorage-utils";

export type AppStateType = ReturnType<typeof rootReducer>
export type AppStoreType = typeof store

const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = createStore(rootReducer, loadState(), applyMiddleware(thunk))

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    });
    localStorage.setItem("app-state", JSON.stringify(store.getState()))
})
