import {rootReducer} from "../../reducers";

export const getTodos = (state: ReturnType<typeof rootReducer>) => state.boards;