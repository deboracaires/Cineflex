import React from "react";

export default function Assento(props){
    
    const{
        name, 
        isAvailable
    } = props;
    
    return (
        <div>
            <button className = {isAvailable === true ? 'botao-assento disponivel' : 'botao-assento indisponivel'}>{name}</button>
        </div>
    );
}