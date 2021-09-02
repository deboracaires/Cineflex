import {Link} from "react-router-dom";
import { useParams } from "react-router";


export default function EscolherSessao(){
    
    const {idSessoes} = useParams();
    console.log(idSessoes);

    
    return(
        <>
        <h1>Selecione o horário</h1>
        <div className="sessao roboto">
            <h2>Quinta-feira - 24/06/2021</h2>
            <Link to="/assentos"><button className="horario-sessao">15:00</button></Link>
            <Link to="/assentos"><button className="horario-sessao">19:00</button></Link>
            </div>
        <div className="sessao">
            <h2>Quinta-feira - 24/06/2021</h2>
            <Link to="/assentos"><button className="horario-sessao">15:00</button></Link>
            <Link to="/assentos"><button className="horario-sessao">19:00</button></Link>
        </div>
        
        </>
    );
}