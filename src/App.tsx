import React, {useEffect, useState} from 'react';
import './App.css';
import ColumnList from "./components/columnList/ColumnList";
import {useTypeSelector} from "./hooks/useTypeSelector";
import {useActions} from "./hooks/useActions";
import Item from "./components/item/Item";
import {setTodo} from "./store/action-creator/todo";
import cover from './images/cover.png'

function App() {
    const state = useTypeSelector(state => state.boards)

    const { addTodo, setTodo, delTodo } = useActions();

    return (
        <div className="App">
            <div className="w-full h-full px-12 py-4">
                <img src={cover}
                     alt="Cover"
                     className="w-full h-24 object-cover rounded-lg mb-4"/>
                <div className="flex">
                    {state.boards.map((board, indexB) => {
                        return <ColumnList board={board} key={indexB}>
                            {board.todos.map((todo, indexT) => {
                                return <Item board={board} todo={todo} key={(indexB+1)*indexT}/>
                            })}
                        </ColumnList>
                    })}
                </div>
            </div>
        </div>
    );
}

export default App;