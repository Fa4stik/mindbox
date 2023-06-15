import {combineReducers} from "redux";
import {boardsReducer} from "./todosReducer";

export const rootReducer = combineReducers({
    boards: boardsReducer
})

export type RootState = ReturnType<typeof rootReducer>