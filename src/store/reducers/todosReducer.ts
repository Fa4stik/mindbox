import {TodoAction, TypesAction, TodoState} from "../../types/Types";

const initialState: TodoState = {
    todos: [
        {id: 1, body: 'completed1', type: 'complited'},
        {id: 2, body: 'completed2', type: 'complited'},
        {id: 3, body: 'all1', type: 'all'},
        {id: 4, body: 'all2', type: 'all'},
        {id: 5, body: 'filed1', type: 'filed'},
        {id: 6, body: 'filed2', type: 'filed'},
    ]
}

export const todosReducer = (state = initialState, action: TodoAction): TodoState => {
    switch (action.type) {
        case TypesAction.ADD_TODO:
            return {...state, todos: [...state.todos, action.payload]}
        case TypesAction.SET_TYPE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.payload.id
                        ? {...todo, type: action.payload.type}
                        : todo
                )
            }
        case TypesAction.DEL_TODO:
            return {...state, todos: [...state.todos.filter(value => value.id !== action.payload.id)]}
        default:
            return state;
    }
}