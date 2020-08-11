import React, {Component} from "react";
import {Link} from 'react-router-dom'
import "../styles/Nav-first.css"
import {Route,NavLink} from "react-router-dom";
class NavFirst extends Component{
    constructor(props) {
        super(props);
        this.state= {
            display: "none"
        }
        this.navFirstClick=this.navFirstClick.bind(this);
    }
    navFirstClick(){
        this.setState({
          display:this.state.display==="none"?"list-item":"none"
        })
        console.log(this.state.display);
    }
    render(){
        console.log(this.props.name);
        const childrenwithDisplay=React.Children.map(this.props.children,child => React.cloneElement(child,{
                display:this.state.display
            })
        );
        return(
            <div>
                <NavLink to="/index/Nav1" onClick={this.navFirstClick} className="Nav-first">{this.props.name}</NavLink>
                <ul className="Nav-first">
                    {childrenwithDisplay}
                </ul>
            </div>
        );
    }
}
export default NavFirst;