import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header";
import PaginaInicial from "./PaginaInicial";
import EscolherSessao from "./EscolherSessao";
import EscolherAssento from "./EscolherAssento";
import axios from 'axios';
import { useEffect, useState } from "react";
import React from "react";

import "./css/reset.css";
import "./css/style.css";


export default function App(){
    
    const [filmes, setFilmes] = useState([]);
    const [sessoes, setSessoes] = useState([]);
    const [idFilmeSelecionado, setIdFilmeSelecionado] = useState(0);

    useEffect(() => {
        const promisse = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies");
        promisse.then(resposta => {
            setFilmes(resposta.data);
        });
    }, []);
    
    if(filmes === null){
        return "carregando filmes...";
    }


    

    function filmeSelecionado(id){
        setIdFilmeSelecionado(id);
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
                        filmeSelecionado={filmeSelecionado}
                        />)}
                    </div>
                </Route>
                <Route path="/sessoes/:idSessoes" exact>
                    <EscolherSessao />
                </Route>
                <Route path="/assentos/:idAssento" exact>
                    <EscolherAssento />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
