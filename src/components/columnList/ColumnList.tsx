import React, {FC} from 'react';
import {IBoard} from "../../types/Types";
import {useTypeSelector} from "../../hooks/useTypeSelector";
import {useActions} from "../../hooks/useActions";
import more from '../../images/more.png'

interface ColumnListProps {
    board: IBoard,
    children: React.ReactNode
}

const ColumnList: FC<ColumnListProps> = ({board, children}) => {
    const {currentBoard, currentTodo, boards} = useTypeSelector(state => state.boards);
    const {setBoard, addTodo} = useActions()

    const dragHandleOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
    };

    const dragHandleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        board.todos.push(currentTodo)
        const currentIndex = currentBoard.todos.indexOf(currentTodo);
        currentBoard.todos.splice(currentIndex, 1)
        setBoard(boards.map((b) => {
            if (b.id === currentBoard.id)
                return currentBoard;
            if (b.id === board.id)
                return board
            return b
        }))
    };

    const btnHandleAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        board.todos.push({id: board.todos.length, body: 'New todo'})
        addTodo(board)
    };

    return (
        <div className="max-w-[300px] h-full
        bg-gray-100
        shadow shadow-md
        flex flex-col justify-center items-center
        mr-12 p-5 last:mr-0 rounded-lg"
             onDragOver={dragHandleOver}
             onDrop={dragHandleDrop}
        >
            <div className="h-full font-semibold">
                <h1>{board.title}</h1>
            </div>
            <div className="flex flex-col py-4">
                <div className="flex flex-wrap">
                    {children}
                </div>
            </div>
            <button onClick={btnHandleAdd}>
                <img src={more}
                     alt="Add"
                     className="h-6"
                />
            </button>
        </div>
    );
};

export default ColumnList;