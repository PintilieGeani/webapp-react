import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";

const SingleMovies = () => {
    const {id} = useParams();

    const apiUrl = "http://localhost:3000/movies/"
 
    const [movie, setMovies] = useState(null)

    useEffect(() => {
        axios.get(`http://localhost:3000/movies/${id}`).then((resp) => {
            setMovies(resp.data.data)
        })
    },[])

    return(
        <div className="single-card">
            <div className="card-image"></div>
            <h3>Titolo del film con id {id}</h3>
        </div>
    )
}




export default SingleMovies