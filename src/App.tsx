import React, {useEffect, useState} from 'react';
import './App.css';
import ColumnList from "./components/columnList/ColumnList";
import {ITodo} from "./types/Types";
import {useSelector} from "react-redux";
import {useTypeSelector} from "./hooks/useTypeSelector";
import {useActions} from "./hooks/useActions";

function App() {
    const state = useTypeSelector(state => state.todos)

    const { addTodo, setTodo, delTodo } = useActions();

    return (
        <div className="App">
            Work
            <div className="flex">
                Work
                {/*<ColumnList title={"Все"} todos={todosAll}/>*/}
                {/*<ColumnList title={"Невыполненные"} todos={todosFiled}/>*/}
                {/*<ColumnList title={"Выполненные"} todos={todosCompleted}/>*/}
            </div>
        </div>
    );
}

export default App;
