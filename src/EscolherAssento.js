import React from "react";
import { useEffect, useState} from "react";
import { useParams } from "react-router";
import axios from 'axios';
import Assento from "./Assento";

export default function EscolherAssento(){
    
    const [assentos, setAssentos] = useState([]);
    
    const {idAssento} = useParams();
    
    console.log(idAssento)

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${idAssento}/seats`);
        promisse.then(resposta => {
           setAssentos(resposta.data.seats);
        });
    }, []);
    
    console.log(assentos);
   
    return(
        <div>
            <h1>Selecione o(s) assento(s)</h1>
            <div className="botoes-conteiner">
                {assentos.map((assento, index)=> <Assento key ={index} name={assento.name}/> )}
            </div>
        </div>
    );
}