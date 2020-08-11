import React from "react";
import {NavLink} from "react-router-dom";
import "../styles/BreadCrumb.css"
function BreadCrumb(props){
    let path=props.path;
    let pathArr=path.split("/");
    let breadcrumb=new Array();
    let curPath="";
    for(let i=1;i<pathArr.length;i++){
        curPath+="/"+pathArr[i];
        breadcrumb.push(<NavLink to={curPath} className="BreadCrumb">{"/"+pathArr[i]}</NavLink>);
    }
    return (
        <div>{breadcrumb}</div>
    );
}
export default BreadCrumb;