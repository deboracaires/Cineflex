import React from "react";
import {Link} from "react-router-dom";

export default function Sucesso({data, horario, titulo}){
    return (
        <div>
            <div className="texto-sucesso">
                <h4>
                    Pedido feito com sucesso!
                </h4>   
            </div>
            <div className="conteiner-info-final">
                <p className="titulo-informacoes-finais">
                    Filme e sessão
                </p>
                <p className="informacao-final">
                    {titulo}
                </p>
                <p className="informacao-final">
                    {data} {horario}
                </p>
            </div>
            <div className="conteiner-info-final">
                <p className="titulo-informacoes-finais">
                    Ingressos
                </p>
                <p className="informacao-final">
                    {titulo}
                </p>
                <p className="informacao-final">
                    {data} {horario}
                </p>
            </div>
            <div className="conteiner-info-final">
                <p className="titulo-informacoes-finais">
                    Comprador
                </p>
                <p className="informacao-final">
                    {titulo}
                </p>
                <p className="informacao-final">
                    {data} {horario}
                </p>
            </div>
            <div className="conteiner-voltar-home">
                <Link to="/">
                    <button className="voltar-home">Voltar para Home</button>
                </Link>
            </div>
        </div>  
    );
}