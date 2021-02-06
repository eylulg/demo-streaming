import axios from "axios";
import { useState, useEffect } from "react";
import { apikey } from "../Api-key";


const Movies = () => {
    const [movies, setMovies] = useState([]);
    const addNewMovie = (movieData) => {
        setMovies((prevState) => [...prevState, movieData]);
    };
    useEffect(() => {
        console.log(movies)
    }, [movies])

    const [pageNumber, setPageNumber] = useState(1);
    let movieInList = 0;
    const getMovies = async () => {
        try {
            const resp = await axios.get('https://api.themoviedb.org/3/movie/top_rated', {
                params: {
                    api_key: apikey,
                    page: pageNumber
                },
            });
            resp.data.results.map((object, index) => {
                if (parseInt(object.release_date) >= 2010) {
                    addNewMovie(object);
                }
                /*   if (index === (resp.data.results.length - 1) && movieInList !== 21) {
                      setPageNumber(pageNumber + 1);
                  } */
            });
        }
        catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getMovies();
    }, [])

    return (
        null
    );
};

export default Movies;