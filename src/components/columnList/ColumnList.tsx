import React, {FC, ReactNode} from 'react';
import Item from "../item/Item";
import {ITodo} from "../../types/Types";

interface ColumnListProps {
    title: string,
    todos: ITodo[]
}

const ColumnList: FC<ColumnListProps> = ({title, todos}) => {
    return (
        <div className="min-w-[400px] h-full
        bg-gray-100
        shadow shadow-md
        p-5 my-4 mx-12">
            <div className="h-full font-semibold mb-4">
                <h1>{title}</h1>
            </div>
            <div className="flex flex-wrap">
                {todos.map(todo => {
                    return <Item id={todo.id} body={todo.body}/>
                })}
            </div>
        </div>
    );
};

export default ColumnList;