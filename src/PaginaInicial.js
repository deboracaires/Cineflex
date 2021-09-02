import {Link} from "react-router-dom";

export default function PaginaInicial(props){
    return (
        <>
        <Link to={`/sessoes/${props.id}`}>
            <div className="filme">
                <img src={props.image} alt="" />
            </div>
        </Link>
        </>
    );
}