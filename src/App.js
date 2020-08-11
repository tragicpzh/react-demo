import React from 'react';
import './App.css';
import Main from "./containers/Main";
import {Route} from "react-router-dom";
function App(props) {
    return(
        <Route path="/" component={Main}></Route>
    );
}

export default App;
