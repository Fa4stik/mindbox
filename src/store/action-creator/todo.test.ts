import {addTodo, delTodo, setTodo} from "./todo";
import {TypesAction} from "../../types/Types";

const mockDispatch = jest.fn();

describe('addTodo action creator', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('dispatches the correct action add todo', () => {
        const mockPayload = {
            id: 1,
            title: 'Test Board',
            todos: [{ id: 1, body: 'Test todo' }]
        };  // Substitute this with your actual payload

        // Call the action creator and thunk
        const action = addTodo(mockPayload);
        action(mockDispatch);

        // Check if dispatch was called with the correct action
        expect(mockDispatch).toHaveBeenCalledWith({
            type: TypesAction.ADD_TODO,
            payload: mockPayload,
        });
    });

    test('dispatches the correct action set todo', () => {
        const mockPayload = {
            id: 1,
            title: 'Test Board',
            todos: [{ id: 1, body: 'Test todo' }]
        };  // Substitute this with your actual payload

        // Call the action creator and thunk
        const action = setTodo(mockPayload);
        action(mockDispatch);

        // Check if dispatch was called with the correct action
        expect(mockDispatch).toHaveBeenCalledWith({
            type: TypesAction.SET_TYPE_TODO,
            payload: mockPayload,
        });
    });

    test('dispatches the correct action set todo', () => {
        const mockPayload = {
            id: 1,
            title: 'Test Board',
            todos: [{ id: 1, body: 'Test todo' }]
        };  // Substitute this with your actual payload

        // Call the action creator and thunk
        const action = delTodo(mockPayload);
        action(mockDispatch);

        // Check if dispatch was called with the correct action
        expect(mockDispatch).toHaveBeenCalledWith({
            type: TypesAction.DEL_TODO,
            payload: mockPayload,
        });
    });
});

export {};
