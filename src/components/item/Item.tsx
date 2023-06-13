import React, {FC} from 'react';
import {ITodo} from "../../types/Types";

const Item: FC<ITodo> = ({id, body}) => {

    return (
        <div className="bg-gray-400 shadow-lg p-3 mr-2 mb-2"
             draggable={true}
        >
            <p>{body}</p>
        </div>
    );
};

export default Item;