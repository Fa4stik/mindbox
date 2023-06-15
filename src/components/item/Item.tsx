import React, {FC, useRef, useState} from 'react';
import {IBoard, ITodo} from "../../types/Types";
import {useTypeSelector} from "../../hooks/useTypeSelector";
import {useActions} from "../../hooks/useActions";
import edit from '../../images/edit.png';
import del from '../../images/delete.png';

interface ItemProps {
    board: IBoard,
    todo: ITodo
}

const Item: FC<ItemProps> = ({board, todo}) => {
    const {currentBoard, currentTodo, boards} = useTypeSelector(state => state.boards)
    const {setCurrentBoard, setCurrentTodo, setBoard, setTodo, delTodo} = useActions();

    const [visInput, setVisInput] = useState<string>('none')
    const textAreaRef = useRef<HTMLTextAreaElement>(null)
    const [textAreaTodo, setTextAreaTodo] = useState<ITodo>(todo)

    const dragHandlerStart = (e: React.DragEvent<HTMLDivElement>) => {
        setCurrentTodo(todo);
        setCurrentBoard(board);
    };

    const dragHandleLeave = (e: React.DragEvent<HTMLDivElement>) => {
        const target = e.target as HTMLElement;
        target.style.boxShadow = '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
    };

    const dragHandleEnd = (e: React.DragEvent<HTMLDivElement>) => {
        const target = e.target as HTMLElement;
        target.style.boxShadow = '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
    };

    const dragHandleOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        const target = e.target as HTMLElement;
        target.style.boxShadow = '0 0 3px #FF0000'
    };

    const dragHandleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const currentIndex = currentBoard.todos.indexOf(currentTodo);
        const newCurrentBoardTodos = [...currentBoard.todos];
        newCurrentBoardTodos.splice(currentIndex, 1);
        const newCurrentBoard = {...currentBoard, todos: newCurrentBoardTodos};

        const boardIndex = board.todos.indexOf(todo);
        const newBoardTodos = [...board.todos];
        newBoardTodos.splice(boardIndex+1, 0, currentTodo);
        const newBoard = {...board, todos: newBoardTodos};

        setBoard(boards.map((b) => {
            if (b.id === currentBoard.id)
                return newCurrentBoard;
            if (b.id === board.id)
                return newBoard;
            return b;
        }));
    };

    const imgHandleEdit = () => {
        if (visInput === 'none') {
            setVisInput('block')
        } else {
            setVisInput('none')
        }
    };

    const imgHandleDel = () => {
        const updateTodos = board.todos.filter(t => t.id !== todo.id)
        delTodo({...board, todos: updateTodos})
    };

    const textAreaHandleEditTodo = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextAreaTodo({...textAreaTodo, body: e.target.value});
        if (textAreaRef.current) {
            textAreaRef.current.style.height = 'auto';
            textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
        }
    };

    const textAreaHandleSaveTodo = () => {
        setVisInput('none');
        const updateTodos = board.todos.map((todo) => {
            if (todo.id === textAreaTodo.id)
                return textAreaTodo
            return todo
        })
        setTodo({...board, todos: updateTodos})
    };

    return (
        <div className="bg-gray-400 shadow-lg py-3 px-5 mr-2 mb-2 rounded-lg relative min-w-[250px] text-left"
             draggable={true}
             onDragStart={dragHandlerStart}
             onDragLeave={dragHandleLeave}
             onDragEnd={dragHandleEnd}
             onDragOver={dragHandleOver}
             onDrop={dragHandleDrop}
        >
            {visInput === 'none'
                ? todo.body
                : <textarea value={textAreaTodo.body}
                            ref={textAreaRef}
                            onChange={textAreaHandleEditTodo}
                            onBlur={textAreaHandleSaveTodo}
                            className="bg-gray-400 w-auto resize-none max-w-[250px] h-auto"
                />
            }
            {/*{todo.body}*/}
            <img src={edit}
                 alt="Edit"
                 onClick={imgHandleEdit}
                 className="absolute right-1 top-1 h-3"
            />
            <img src={del}
                 alt="Delete"
                 onClick={imgHandleDel}
                 className="absolute left-1 top-1 h-3"
            />
        </div>
    );
};

export default Item;