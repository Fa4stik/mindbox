import {BoardState, TodoAction, TypesAction} from "../../types/Types";

const initialState: BoardState = {
    boards: [
        {id: 1, title: 'all', todos: [
            {id: 1, body: 'all1'},
            {id: 2, body: 'all2'}
            ]},
        {id: 2, title: 'complited', todos: [
                {id: 1, body: 'complited1'},
                {id: 2, body: 'complited2'}
            ]},
        {id: 3, title: 'field', todos: [
                {id: 1, body: 'field1'},
                {id: 2, body: 'field2'}
            ]},
    ],
    currentBoard: {
        id: 1,
        title: 'all',
        todos: [
            {id: 1, body: 'all1'},
            {id: 2, body: 'all2'}
        ]
    },
    currentTodo: {
        id: 1,
        body: 'all1'
    }
}

export const boardsReducer = (state = initialState, action: TodoAction): BoardState => {
    switch (action.type) {
        case TypesAction.ADD_TODO:
            return {
                ...state,
                boards: state.boards.map((board) => {
                    return board.id === action.payload.id
                        ? {...board, todos: [...action.payload.todos]}
                        : board
                })
            }
        case TypesAction.SET_TYPE_TODO:
            return {
                ...state,
                boards: state.boards.map((board) => {
                    return board.id === action.payload.id
                        ? action.payload
                        : board
                })
            }
        case TypesAction.SET_BOARD:
            return {...state, boards: action.payload}
        case TypesAction.DEL_TODO:
            return {
                ...state,
                boards: state.boards.map((board) => {
                    return board.id === action.payload.id
                        ? action.payload
                        : board
                })
            }
        case TypesAction.SET_CURRENT_BOARD:
            return {...state, currentBoard: action.payload}
        case TypesAction.SET_CURRENT_TODO:
            return {...state, currentTodo: action.payload}
        default:
            return state;
    }
}