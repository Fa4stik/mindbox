import React from 'react';
import {fireEvent, screen, waitFor} from '@testing-library/react';
import App from './App';
import renderWithProvider from "./tests/helpers/renderWithProvider";

describe('TESTS', () => {
    test('Board render', () => {
        renderWithProvider(<App/>);
        const board = screen.getAllByTestId('column-list')[0];
        expect(board).toBeInTheDocument();
        expect(board).toMatchSnapshot();
    })

    test('Card render', () => {
        renderWithProvider(<App/>);
        const card = screen.getAllByTestId('item-card')[0];
        expect(card).toBeInTheDocument();
        expect(card).toMatchSnapshot();
    })

    test('Count board', () => {
        renderWithProvider(<App/>)
        const columnLists = screen.getAllByTestId('column-list');
        expect(columnLists.length).toBe(3);
    })

    test('Count children board', () => {
        renderWithProvider(<App/>)
        const firstBoardChildren = screen.getAllByTestId('column-list')[0]
            .querySelectorAll('[data-testid="item-card"]')
            .length
        expect(firstBoardChildren).toBe(2);
    })

    test('Check styles board', () => {
        renderWithProvider(<App/>)
        const board = screen.getAllByTestId('column-list')[0];
        expect(board).toHaveClass('mr-12 max-w-[300px]');
    })

    test('Check styles card', () => {
        renderWithProvider(<App/>)
        const card = screen.getAllByTestId('item-card')[0]
        expect(card).toHaveClass('bg-gray-400 shadow-lg')
    })

    test('Add card on board', () => {
        renderWithProvider(<App/>);
        const btnAddCard = screen.getAllByTestId('add-card')[0];
        const countCardStart = screen.getAllByTestId('item-card').length;
        expect(countCardStart).toBe(6);
        fireEvent.click(btnAddCard)
        fireEvent.click(btnAddCard)
        const countCardEnd = screen.getAllByTestId('item-card').length;
        expect(countCardEnd).toBe(8);
    })

    test('Add card on first board', () => {
        renderWithProvider(<App/>);
        const btnFirstBoardCard = screen.getAllByTestId('column-list')[0].querySelector('[data-testid="add-card"]')
        fireEvent.click(btnFirstBoardCard as Element);
        expect(screen.getAllByTestId('column-list')[0].childElementCount).toBe(3);
    })

    test('Delete card on first board', () => {
        renderWithProvider(<App/>);
        const delCard = screen.getAllByTestId('column-list')[0]
            .querySelectorAll('[data-testid="item-card"]')[0]
            .querySelector('[data-testid="delete-card"]')
        fireEvent.click(delCard as Element);
        const countElBoard = screen.getAllByTestId('column-list')[0]
            .querySelectorAll('[data-testid="item-card"]')
        expect(countElBoard.length).toBe(1);
    })

    test('Edit card on first board', () => {
        renderWithProvider(<App/>);
        const editCard = screen.getAllByTestId('column-list')[0]
            .querySelectorAll('[data-testid="item-card"]')[0]
            .querySelector('[data-testid="edit-card"]')
        fireEvent.click(editCard as Element);
        const textareaCard = screen.getAllByTestId('column-list')[0]
            .querySelectorAll('[data-testid="item-card"]')[0]
            .querySelector('[data-testid="textarea-card"]')
        fireEvent.input(textareaCard as Element, {
            target: {
                value: 'testValueX029'
            }
        })
        fireEvent.click(screen.getAllByTestId('column-list')[0])
        const textTest = screen.getByText(/testValueX029/i)
        expect(textTest).toBeInTheDocument();
    })
})