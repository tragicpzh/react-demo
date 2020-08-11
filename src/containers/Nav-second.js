import React, {Component} from "react";
import "../styles/Nav-second.css"
import {NavLink} from "react-router-dom";
class NavSecond extends Component{
    render() {
        const displayStyle={
            display:this.props.display
        };
        console.log(displayStyle);
        return(
            <li style={displayStyle} >
                <NavLink
                    to={this.props.path}
                    className="Nav-second"
                >
                    {this.props.name}
                </NavLink>
            </li>
        );
    }
}
export default NavSecond;