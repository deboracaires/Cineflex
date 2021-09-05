import {Link} from "react-router-dom";
import React from "react";

export default function PaginaInicial(props){
    const {
        image, 
        id, 
        filmeSelecionado,
        titulo,
        salvaImagem
    } = props;

    function salvarFilme(){
        filmeSelecionado(titulo);
        salvaImagem(image);
    }

    return (
        <div>
        <Link to={`/sessoes/${id}`}>
            <div className="filme" onClick={salvarFilme}>
                <img src={image} alt="" />
            </div>
        </Link>
        </div>
    );
}