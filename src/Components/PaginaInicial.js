import {Link} from "react-router-dom";
import React from "react";

export default function PaginaInicial(props){
    const {
        image, 
        id, 
        filmeSelecionado,
        titulo
    } = props;

    function salvarId(){
        filmeSelecionado(titulo);
    }


    return (
        <div>
        <Link to={`/sessoes/${id}`}>
            <div className="filme" onClick={salvarId}>
                <img src={image} alt="" />
            </div>
        </Link>
        </div>
    );
}