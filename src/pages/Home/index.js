import React, { useState, useEffect } from 'react'

import api from '../../services/api'
import { Link } from 'react-router-dom'
import './home.css'
function Home() {
    const [movies, setMovies] = useState([])

    useEffect(() => {

        async function loadMovies(){
            await api.get()
            .then( r => setMovies(r.data))
        }
        loadMovies()
    }, [])

    return (
        <div className="container">
            <h1>Movies</h1>
            {
                movies.map(item => (
                    <article key={item.id}>
                        <strong className="title">{item.nome}</strong>
                        <img src={item.foto} alt={item.nome}/>
                        <Link className="button" to={`/filmes/${item.id}`}>Acessar</Link>
                    </article>
                ))
            }
        </div>
    );
}

export default Home;
