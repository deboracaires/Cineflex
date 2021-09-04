import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header";
import PaginaInicial from "./PaginaInicial";
import EscolherSessao from "./EscolherSessao";
import EscolherAssento from "./EscolherAssento";
import Sucesso from "./Sucesso";
import axios from 'axios';
import { useEffect, useState } from "react";
import React from "react";

import "../css/reset.css";
import "../css/style.css";


export default function App(){
    
    const [filmes, setFilmes] = useState([]);
    const [data, setData] = useState([]);
    const [horario, setHorario] = useState([]);
    const [filmeSelecionado, setFilmeSelecionado] = useState([]);
    const [assentosSelecionados, setAssentosSelecionados] = useState([]);

    useEffect(() => {
        const promisse = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies");
        promisse.then(resposta => {
            setFilmes(resposta.data);
        });
    }, []);
    
    if(filmes === null){
        return "carregando filmes...";
    }

    function tituloFilmeSelecionado(titulo){
        setFilmeSelecionado(titulo);
    }
    function dataSelecionada(date){
        setData(date);
    }
    function horarioSelecionado(time){
        setHorario(time);
    }
    function assentos(numero){
        const novoAssento = [...assentosSelecionados, numero];
        setAssentosSelecionados(novoAssento);
    }
    function removerAssento(numero){
        const novosAssentos = assentosSelecionados.filter((num)=>  num !== numero);
        setAssentosSelecionados(novosAssentos);
    }
    
   
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path="/" exact>
                    <h1>Selecione o filme</h1>
                    <div className="filmes-conteiner">
                        {filmes.map((filme, index) => 
                        <PaginaInicial 
                        key = {index} 
                        image={filme.posterURL} 
                        id = {filme.id} 
                        titulo={filme.title}
                        filmeSelecionado={tituloFilmeSelecionado}
                        />)}
                    </div>
                </Route>
                <Route path="/sessoes/:idSessoes" exact>
                    <EscolherSessao 
                    dataSelecionada={dataSelecionada}
                    horarioSelecionado={horarioSelecionado}
                    />
                </Route>
                <Route path="/assentos/:idAssento" exact>
                    <EscolherAssento 
                    assentosSelecionados={assentos}
                    removerAssento={removerAssento}
                    />
                </Route>
                <Route path="/sucesso" exact>
                    <Sucesso 
                    data = {data}
                    horario={horario}
                    titulo={filmeSelecionado}
                    assentos={assentosSelecionados}
                    
                    />
                </Route>

            </Switch>
        </BrowserRouter>
    );
}
