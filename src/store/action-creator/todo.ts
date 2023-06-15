import {Dispatch} from "redux";
import {IBoard, ITodo, TodoAction, TypesAction} from "../../types/Types";

export const addTodo = (payload: IBoard) => {
    return (dispatch: Dispatch<TodoAction>) => {
        dispatch({type: TypesAction.ADD_TODO, payload})
    }
}

export const setTodo = (payload: IBoard) => {
    return (dispatch: Dispatch<TodoAction>) => {
        dispatch({type: TypesAction.SET_TYPE_TODO, payload})
    }
}

export const setCurrentBoard = (payload: IBoard) => {
    return (dispatch: Dispatch<TodoAction>) => {
        dispatch({type: TypesAction.SET_CURRENT_BOARD, payload})
    }
}

export const setCurrentTodo = (payload: ITodo) => {
    return (dispatch: Dispatch<TodoAction>) => {
        dispatch({type: TypesAction.SET_CURRENT_TODO, payload})
    }
}

export const setBoard = (payload: IBoard[]) => {
    return (dispatch: Dispatch<TodoAction>) => {
        dispatch({type: TypesAction.SET_BOARD, payload})
    }
}

export const delTodo = (payload: IBoard) => {
    return (dispatch: Dispatch<TodoAction>) => {
        dispatch({type: TypesAction.DEL_TODO, payload})
    }
}