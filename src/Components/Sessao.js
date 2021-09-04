import React from "react";
import {Link} from "react-router-dom";

export default function Sessao(props){
    const {
        id, 
        data, 
        horarios, 
        weekday,
        dataSelecionada,
        horarioSelecionado
    } = props;
    function salvarData(){
        dataSelecionada(data);
    }
    function salvarHorario1(){
        horarioSelecionado(horarios[0].name);
    }
    function salvarHorario2(){
        horarioSelecionado(horarios[1].name);
    }
    return (
        <div>
        <div className="sessao" onClick={salvarData}>
            <h2>{weekday} - {data}</h2>
            <Link to={`/assentos/${horarios[0].id}`}><button className="horario-sessao" onClick={salvarHorario1}>{horarios[0].name}</button></Link>
            <Link to={`/assentos/${horarios[1].id}`}><button className="horario-sessao" onClick={salvarHorario2}>{horarios[1].name}</button></Link>
        </div>
        </div>
    );
}