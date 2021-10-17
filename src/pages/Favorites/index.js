import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './favorites.css'
import { toast } from 'react-toastify'
export default function Favorites(){
    const [movies, setMovies] = useState([])
    useEffect(() => {
        const myList = localStorage.getItem('movies')
        setMovies(JSON.parse(myList) || [])
    }, [])

    function handleDelete(id){
        const filtroFilmes = movies.filter(item => item.id !== id)
        setMovies(filtroFilmes)
        localStorage.setItem('movies', JSON.stringify(filtroFilmes))
        toast.warn('Filme excluido com sucesso')

    }

    return(
        <div className="container">
            <h1>Meus Filmes</h1>
            { !movies.length && <h2>Você ainda não tem filmes salvos</h2>}
            <ul>
                {movies.map(item => (
                    <li key={item.id}>
                        <div>
                            <img src={item.foto} className="img-radius"/>
                            <span>{item.nome}</span>
                        </div>
                        <div>
                            <Link to={`/filmes/${item.id}`}>Ver detalhes</Link>
                            <button onClick={ ()  => handleDelete(item.id)}>Excluir</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}