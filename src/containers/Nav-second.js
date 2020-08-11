import React, {Component} from "react";
import "../styles/Nav-second.css"
import {NavLink} from "react-router-dom";
class NavSecond extends Component{
    render() {
        let path=this.props.path+"/"+this.props.name;
        return(
            <li >
                <NavLink
                    to={path}
                    className="Nav-second"
                >
                    {this.props.name}
                </NavLink>
            </li>
        );
    }
}
export default NavSecond;
