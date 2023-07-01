import React from 'react';
import './App.css';
import ColumnList from "./components/columnList/ColumnList";
import {useTypeSelector} from "./hooks/useTypeSelector";
import Item from "./components/item/Item";
import cover from './images/cover.png'
import {getTodos} from "./store/selectors/getTodos/getTodos";

function App() {
    const state = useTypeSelector(getTodos)

    return (
        <div className="App">
            <div className="w-full h-full px-12 py-4">
                <img src={cover}
                     alt="Cover"
                     className="w-full h-24 object-cover rounded-lg mb-4"/>
                <div className="flex">
                    {state.boards.map((board, indexB) => {
                        return <ColumnList board={board}
                                           key={indexB}
                        >
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