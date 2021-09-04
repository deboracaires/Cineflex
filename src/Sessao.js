import React from "react";
import {Link} from "react-router-dom";

export default function Sessao(props){
    const {
        id, 
        data, 
        horarios, 
        weekday
    } = props;
    
    return (
        <div>
        <div className="sessao">
            <h2>{weekday} - {data}</h2>
            <Link to={`/assentos/${horarios[0].id}`}><button className="horario-sessao">{horarios[0].name}</button></Link>
            <Link to={`/assentos/${horarios[1].id}`}><button className="horario-sessao">{horarios[1].name}</button></Link>
        </div>
        </div>
    );
}