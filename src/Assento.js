import React from "react";

export default function Assento(props){
    
    const{
        name
    } = props;
    return (
        <div>
            <button className = "botao-assento disponivel ">{name}</button>
        </div>
    );
}