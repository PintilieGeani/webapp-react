import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const Movies = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/movies/").then((resp) => {
            console.log(resp.data.data)
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
                        <div className="card-image"><img src={curMovie.image} alt={curMovie.title} /></div>
                        <div className="card-text"><h3>Titolo: {curMovie.title}</h3>
                            <p class="text-overview"><b>Descrizione:</b> {curMovie.abstract}</p>
                            <p><b>Regista:</b> {curMovie.director}</p>
                            <p><b>Genere:</b> {curMovie.genre}</p>
                            <p><b>Anno di rilascio:</b> {curMovie.release_year}</p>
                            <p><Link to={`/movies/${id}`} className="btn">
                                Vedi dettagli
                            </Link></p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default Movies
