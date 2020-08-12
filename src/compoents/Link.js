import React from "react";
const Link=({active,children,onClick})=>(
    <a
        onClick={e=>{
            e.preventDefault();
            onClick()
        }}
    >
        {children}
    </a>
)
export default Link;