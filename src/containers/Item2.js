import React from "react";
import {Provider} from "react-redux";
import todoAPP from "../reducer";
import {createStore} from "redux";
import AddTodo from "./AddTodo";
import VisibleTodoList from "./VisibleTodoList";
import Footer from "../compoents/Footer";
const store=createStore(todoAPP);
function Item2() {
    return(
        <Provider store={store}>
            <div>
                <AddTodo></AddTodo>
                <VisibleTodoList></VisibleTodoList>
                <Footer></Footer>
            </div>
        </Provider>
    );
}

export default Item2;
