import { Link } from "react-router-dom"
export default function Error(){
    return(
        <div className="container">
            <h1 style={{fontSize: 120}}>404</h1>
            <span style={{fontSize: 50, marginBottom: 20}}>pagina não encontrada!</span>
            <Link to="/" className="button">Voltar para filmes</Link>
        </div>
    )
}