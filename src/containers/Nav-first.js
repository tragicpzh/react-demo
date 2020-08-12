import React, {Component} from "react";
import "../styles/Nav-first.css"
import {NavLink, withRouter} from "react-router-dom";
class NavFirst extends Component{
    constructor(props) {
        super(props);
        this.state= {
            isShow: false,
            path:this.props.location.pathname+"/"+this.props.name
        }
        this.navFirstClick=this.navFirstClick.bind(this);
    }
    navFirstClick(){

        this.setState({
            isShow:this.state.isShow===true?false:true
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
