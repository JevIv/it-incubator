import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-recuder";

const rootReducer = combineReducers({
    countner: counterReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)

type AppStoreType = typeof store
