import './header.css'
import { Link } from 'react-router-dom'
export default function Header(){
    return(
        <header>
            <Link className="logo" to="/">Filmaria</Link>
            <Link className="favorites" to="/favoritos">Salvos</Link>
        </header>
    )
}