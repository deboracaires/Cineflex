import React from "react";
import { useState} from "react";

export default function Assento(props){
    
    const{
        name, 
        isAvailable,
        salvarAssento,
        removerAssento
    } = props;
    const [selecionar, setSelecionar]=useState("botao-assento disponivel");

    function selecionarAssento(){
        if(isAvailable){
            if(selecionar === "botao-assento selecionado"){
                setSelecionar("botao-assento disponivel")
                removerAssento(name);
                
            }else{
                setSelecionar("botao-assento selecionado");
                salvarAssento(name);
            }
        }else{
            alert("Esse assento não está disponível");
        }
    }


    return (
        <div>
            <button className = {isAvailable ? selecionar : "botao-assento indisponivel"} onClick={selecionarAssento}>{name}</button>
        </div>
    );
}