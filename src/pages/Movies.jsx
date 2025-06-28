import axios from "axios"
import { useEffect, useState } from "react"

const Movies = () =>{
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/movies/").then((resp) => {
            setMovies(resp.data.data)
        });
    }, []);

    console.log(movies)

    return (
        <main className="container">
            <div className="titolo">
                <h1>Benvenuto nel catalogo dei nostri film</h1>
                <h2>Qui puoi vedere tutti i film a nostra disposizione</h2>
            </div>
            <div className="row">
               {movies.map((curMovie, id) => (
                    <div key={id} className="card">
                    <p>Titolo: {curMovie.title}</p>
                    <p>Descrizione: {curMovie.abstract}</p>
                    <p>Regista: {curMovie.director}</p>
                    <p>Genere: {curMovie.genre}</p>
                    <p>Anno di rilascio: {curMovie.release_year}</p>
                </div>
               ))}
            </div>
        </main>
    )
}

export default Movies

{/* <div className="card">
                    <p>Titolo: Titolo del film</p>
                    <p>Descrizione: Descrizione</p>
                    <p>Regista: nome del regista</p>
                    <p>Genere: genere</p>
                    <p>Anno di rilascio: anno di rilascio</p>
                </div> */}