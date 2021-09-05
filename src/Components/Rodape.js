import React from "react";

export default function Rodape({imagem, titulo, data, horario}){
    return (
        <div className="rodape">
            <div className="img-rodape">
                <img src={imagem} alt=""/>
            </div>
            <div className="texto-rodape">
                <p>{titulo}</p>
                <p>{data}  {horario}</p>
            </div>
        </div>
    );
}