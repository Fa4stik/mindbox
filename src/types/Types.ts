export interface BoardState {
    boards: IBoard[],
    currentBoard: IBoard,
    currentTodo: ITodo
}

export interface IBoard {
    id: number,
    title: string,
    todos: ITodo[]
}

export interface ITodo {
    id?: number,
    body?: string,
}

export enum TypesAction {
    ADD_TODO = 'ADD_TODO',
    SET_TYPE_TODO = 'SET_TYPE_TODO',
    SET_BOARD = 'SET_BOARD',
    SET_CURRENT_BOARD = 'SET_CURRENT_BOARD',
    SET_CURRENT_TODO = 'SET_CURRENT_TODO',
    DEL_TODO = 'DEL_TODO',
}

interface AddTodoAction {
    type: TypesAction.ADD_TODO
    payload: IBoard
}

interface SetTypeTodoAction {
    type: TypesAction.SET_TYPE_TODO
    payload: IBoard
}

interface SetBoardAction {
    type: TypesAction.SET_BOARD,
    payload: IBoard[]
}

interface DelTodoAction {
    type: TypesAction.DEL_TODO
    payload: IBoard
}

interface SetCurrentBoard {
    type: TypesAction.SET_CURRENT_BOARD,
    payload: IBoard
}

interface SetCurrentTodo {
    type: TypesAction.SET_CURRENT_TODO,
    payload: ITodo
}

export type TodoAction =
    AddTodoAction
    | SetTypeTodoAction
    | DelTodoAction
    | SetCurrentBoard
    | SetCurrentTodo
    | SetBoardAction