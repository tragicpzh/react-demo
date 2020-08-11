import React, {Component} from "react";
import {Link} from 'react-router-dom'
import "../styles/Nav-first.css"
import {Route,NavLink,withRouter} from "react-router-dom";
import {createBrowserHistory} from "history";
const history=createBrowserHistory();
class NavFirst extends Component{
    constructor(props) {
        super(props);
        this.state= {
            isShow: false,
            path:'/'
        }
        this.navFirstClick=this.navFirstClick.bind(this);
    }
    navFirstClick(){

        this.setState({
            isShow:this.state.isShow===true?false:true,
            path:this.props.location.pathname+"/"+this.props.name
        })
    }
    render(){
        const childrenwithDisplay=React.Children.map(this.props.children,child => React.cloneElement(child,{
                path:this.state.path
            })
        );
        return(
            <div>
                <h1  onClick={this.navFirstClick} className="h1-hand">{this.props.name}</h1>{
                    this.state.isShow===true&&
                    <ul className="Nav-first">
                        {childrenwithDisplay}
                    </ul>
                }
            </div>
        );
    }
}
export default withRouter(NavFirst);
