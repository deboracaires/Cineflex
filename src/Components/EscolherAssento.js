import React from "react";
import { useEffect, useState} from "react";
import { useParams } from "react-router";
import axios from 'axios';
import Assento from "./Assento";
import {Link} from "react-router-dom";
import Rodape from "./Rodape";

export default function EscolherAssento({assentosSelecionados, removerAssento, saveNomeComprador, saveCpfComprador, imagem, titulo, data, horario, idAssentos}){
    
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

    function salvarDadosComprador(){
        if(nomeComprador !== "" && cpfComprador !== ""){
            saveNomeComprador(nomeComprador);
            saveCpfComprador(cpfComprador);

            const dados = 
            { 
                ids: idAssentos,
                name: nomeComprador,
                cpf: cpfComprador
            };
            axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/seats/book-many', dados)
            
        }
    }
   
    return(
        <div className="assentos-conteiner">
            <h1>Selecione o(s) assento(s)</h1>
            <div className="botoes-conteiner">
                {assentos.map((assento, index)=> <Assento 
                key ={index} 
                name={assento.name} 
                salvarAssento={assentosSelecionados} 
                removerAssento={removerAssento}
                isAvailable={assento.isAvailable}
                id={assento.id}
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
                    <button className="reservar-assentos" onClick={salvarDadosComprador}>Reservar assento(s)</button>
                </Link>
            </div>
            <Rodape 
            imagem={imagem}
            titulo={titulo}
            data={data}
            horario={horario}
            />
        </div>
    );
}