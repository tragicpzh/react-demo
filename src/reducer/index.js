import {combineReducers} from "redux";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";
const todoAPP=combineReducers(
    {
        todos:todos,
        visibilityFilter:visibilityFilter
    }
)
export default todoAPP;
