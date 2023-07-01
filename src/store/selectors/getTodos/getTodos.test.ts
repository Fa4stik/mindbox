import {getTodos} from "./getTodos";
import {initialState} from "../../reducers/todosReducer";

describe('TESTS SELECTOR', () => {
    test('initial state', () => {
        const state = {boards: initialState};
        expect(getTodos(state)).toEqual({
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
        });
    })

    test('set initial state', () => {
        const boardsState = {
            boards: [
                {id: 1, title: 'all', todos: [
                        {id: 1, body: 'all1'},
                        {id: 2, body: 'all2'}
                    ]},
            ],
            currentBoard: {id: 1, title: 'all', todos: [
                    {id: 1, body: 'all1'},
                    {id: 2, body: 'all2'}
                ]},
            currentTodo: {
                id: 1,
                body: 'all1'
            },
        }
        const state = {boards: boardsState}
        expect(getTodos(state)).toEqual({
            boards: [
                {id: 1, title: 'all', todos: [
                        {id: 1, body: 'all1'},
                        {id: 2, body: 'all2'}
                    ]},
            ],
            currentBoard: {id: 1, title: 'all', todos: [
                    {id: 1, body: 'all1'},
                    {id: 2, body: 'all2'}
                ]},
            currentTodo: {
                id: 1,
                body: 'all1'
            },
        })
    })
})

export {};