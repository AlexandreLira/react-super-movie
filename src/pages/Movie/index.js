
import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import './movie.css'
import { toast } from 'react-toastify'
import api from '../../services/api'
 
export default function Movie(){

    const { id } = useParams()
    const history = useHistory()
    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function loadMovie(){
            await api.get(id)
            .then(r => {
                const response = r.data
                
                if(response.length === 0) {
                    history.replace('/')
                    return
                }
                setMovie(response)
            })
        }
        loadMovie()

        return () => {
            console.log('componente desmotando')
        } 

    }, [id, history])


    function salveMovie(){
        const myList = localStorage.getItem('movies')
        console.log(myList)
        let movies = JSON.parse(myList) || []
        const hasMovie = movies.some(i => i.id === movie.id)
        if (hasMovie) {
            toast.info("Você já possui esse filme salvo!")
            return
        }
        movies.push(movie)
        localStorage.setItem('movies', JSON.stringify(movies))
        toast.success('Filme salvo com sucesso')

    }

    return(
        <div className="container">
            <div className="movie-info">
                <h1>{movie.nome}</h1>
                <img src={movie.foto} alt={movie.nome}/>
                <h3>Sinopse</h3>
                <p>{movie.sinopse}</p>
                <div className="buttonArea">
                    <button className="button" onClick={salveMovie} >Salvar</button>
                    <a className="button" href={`https://www.youtube.com/results?search_query=${movie.nome} Trailer`} target="blank">
                        Trailer
                    </a>
                </div>
            </div>
        </div>
    )
}