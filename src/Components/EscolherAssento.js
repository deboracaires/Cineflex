import React from "react";
import { useEffect, useState} from "react";
import { useParams } from "react-router";
import axios from 'axios';
import Assento from "./Assento";
import {Link} from "react-router-dom";

export default function EscolherAssento({assentosSelecionados, removerAssento}){
    
    const [assentos, setAssentos] = useState([]);
    const [nomeComprador, setNomeComprador] = useState("");
    const [cpfComprador, setCpfComprador] = useState("");

    const {idAssento} = useParams();

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${idAssento}/seats`);
        promisse.then(resposta => {
           setAssentos(resposta.data.seats);
        });
    }, []);
    if(assentos === null){
        return "carregando assentos...";
    }
    
   
    return(
        <div>
            <h1>Selecione o(s) assento(s)</h1>
            <div className="botoes-conteiner">
                {assentos.map((assento, index)=> <Assento 
                key ={index} 
                name={assento.name} 
                salvarAssento={assentosSelecionados} 
                removerAssento={removerAssento}
                isAvailable={assento.isAvailable}
                /> )}
                <div className="legenda">
                    <div>
                        <button className="botao-assento selecionado"></button>
                        <p>Selecionado</p>
                    </div>
                    <div>
                        <button className="botao-assento disponivel"></button>
                        <p>Disponível</p>
                    </div>
                    <div>
                        <button className="botao-assento indisponivel"></button>
                        <p>Indisponível</p>
                    </div>
                </div>
                
            </div>
            <div className = "informacoes-comprador">
                <h3>Nome do comprador:</h3>
                <input 
                    type="text" 
                    placeholder="Digite seu nome..."
                    value={nomeComprador}
                    onChange={(e)=> setNomeComprador(e.target.value)}>
                </input>
                <h3>CPF do comprador:</h3>
                <input
                    type="text" 
                    placeholder="Digite seu CPF..."
                    value={cpfComprador}
                    onChange={(e)=> setCpfComprador(e.target.value)}
                ></input>
            </div>
            <div className="reservar">
                <Link to="/sucesso">
                    <button className="reservar-assentos">Reservar assento(s)</button>
                </Link>
            </div>
        </div>
    );
}