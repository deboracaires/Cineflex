
import React from "react";
import { useEffect, useState} from "react";
import { useParams } from "react-router";
import axios from 'axios';
import Sessao from "./Sessao";



export default function EscolherSessao({dataSelecionada, horarioSelecionado}){
    
    const [sessoes, setSessoes] = useState([]);
    
    const {idSessoes} = useParams();
    
    useEffect(() => {
        const promisse = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies/${idSessoes}/showtimes`);
        promisse.then(resposta => {
           setSessoes(resposta.data.days);
        });
    }, []);
    
    if(sessoes === null){
        return "carregando sessoes...";
    }
    
    
    return(
        <div>
            <h1>Selecione o horário</h1>
            {sessoes.map((sessao, index) => 
            <Sessao 
            key={index} 
            id={sessao.id} 
            data={sessao.date} 
            horarios={sessao.showtimes} 
            weekday={sessao.weekday}
            dataSelecionada={dataSelecionada}
            horarioSelecionado={horarioSelecionado}
            />)}
        
        </div>
    );
}