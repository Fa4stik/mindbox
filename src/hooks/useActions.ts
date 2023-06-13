import * as TodoActionCreator from '../store/action-creator/todo'
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(TodoActionCreator, dispatch);
}