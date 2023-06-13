export interface TodoState {
    todos: ITodo[]
}

export interface ITodo {
    id?: number,
    body?: string,
    type?: string
}

export enum TypesAction {
    ADD_TODO = 'ADD_TODO',
    SET_TYPE_TODO = 'SET_TYPE_TODO',
    DEL_TODO = 'DEL_TODO',
}

interface AddTodoAction {
    type: TypesAction.ADD_TODO
    payload: ITodo
}

interface SetTypeTodoAction {
    type: TypesAction.SET_TYPE_TODO
    payload: ITodo
}

interface DelTodoAction {
    type: TypesAction.DEL_TODO
    payload: ITodo
}

export type TodoAction = AddTodoAction | SetTypeTodoAction | DelTodoAction