import React, {Component} from "react";
import "../styles/Nav-second.css"
import {NavLink} from "react-router-dom";
function NavSecond(props){
    const path=props.path+"/"+props.name;
    return(
            <li >
                <NavLink
                    to={path}
                    className="Nav-second"
                >
                    {props.name}
                </NavLink>
            </li>
    );
}
export default NavSecond;
