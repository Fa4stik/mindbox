import {boardsReducer, initialState} from "../reducers/todosReducer";
import {TypesAction} from "../../types/Types";

describe('TEST VALUE REDUCER', () => {
    test('ADD TODO', () => {
        const reducer = boardsReducer(initialState, {
            type: TypesAction.ADD_TODO,
            payload: {
                ...initialState.currentBoard,
                todos: [
                    ...initialState.currentBoard.todos,
                    {id: 3, body: 'all3'}
                ]
            }
        })
        expect(reducer.boards[0].todos.length).toBe(3);
    })

    test('SET TODO', () => {
        const payload = {
            ...initialState.currentBoard,
            todos: [
                {id: 1, body: 'dl2'},
                {id: 2, body: 'all2'}
            ]
        }
        const reducer = boardsReducer(initialState, {
            type: TypesAction.SET_TYPE_TODO,
            payload
        })
        expect(reducer.boards[0].todos[0]).toEqual({id: 1, body: 'dl2'});
    })
})

export {}