import React, {Component} from 'react';
import "../styles/Main.css";
import Defaultpage from "./defaultpage";
import Item2 from "./Item2";
import Item1 from "./Item1";
import Item3 from "./Item3";
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import NavFirst from "./Nav-first";
import NavSecond from "./Nav-second";
import {createBrowserHistory} from "history";
import Nav1 from "./Nav1";
class  Main extends Component{
    constructor() {
        super();
    }
    render(){
        const history=createBrowserHistory();
        history.push("/index");
        console.log(history.location);
        return (
            <Router>
                <div className="container">
                    <div className="sidebar">
                        <div id="log">
                            <h1>导航栏</h1>
                        </div>
                        <NavFirst name="Nav1">
                            <NavSecond name="Item1"></NavSecond>
                            <NavSecond name="Item2"></NavSecond>
                        </NavFirst>
                        <NavFirst name="Nav2">
                            <NavSecond name="Item3"></NavSecond>
                        </NavFirst>
                    </div>
                    <div className="main">
                        <div className="header">
                                header
                        </div>
                        <div className="main-contain">
                                <Route exact path="/index" component={Defaultpage}></Route>
                                <Route exact path="/index/Nav1" component={Nav1}></Route>
                                <Route path="/index/Nav1/Item1" component={Item1}></Route>
                                <Route path="/index/Nav1/Item2" component={Item2}></Route>
                                <Route path="/index/Nav2/Item3" component={Item3}></Route>
                        </div>
                        <div className="footer">
                            footer
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}

export default Main;
