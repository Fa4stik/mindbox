import {Dispatch} from "redux";
import {ITodo, TodoAction, TypesAction} from "../../types/Types";

export const addTodo = (payload: ITodo) => {
    return (dispatch: Dispatch<TodoAction>) => {
        dispatch({type: TypesAction.ADD_TODO, payload})
    }
}

export const setTodo = (payload: ITodo) => {
    return (dispatch: Dispatch<TodoAction>) => {
        dispatch({type: TypesAction.SET_TYPE_TODO, payload})
    }
}

export const delTodo = (payload: ITodo) => {
    return (dispatch: Dispatch<TodoAction>) => {
        dispatch({type: TypesAction.DEL_TODO, payload})
    }
}