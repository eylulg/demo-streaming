import axios from "axios";
import { useState, useEffect } from "react";
import { apikey } from "../Api-key";
import search from "../images/search.png";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const addNewMovie = (movieData) => {
        setMovies((prevState) => [...prevState, movieData]);
    };
    useEffect(() => {
        console.log(movies)
        if (movies.length === 21) {
            sortMovies();
        }
    }, [movies])
    let moviesInList = 0, pageNumber = 1;
    const getMovies = async () => {
        try {
            const resp = await axios.get('https://api.themoviedb.org/3/movie/top_rated', {
                params: {
                    api_key: apikey,
                    page: pageNumber
                },
            });
            const size = resp.data.results.length;
            resp.data.results.map((object, index) => {
                if (moviesInList < 21) {
                    if (parseInt(object.release_date) >= 2010) {
                        addNewMovie(object);
                        moviesInList++;
                    }
                    if (index === (size - 1)) {
                        pageNumber++;
                        getMovies();
                    }
                }

            });
        }
        catch (error) {
            console.log(error);
        }
    };
    const sortMovies = () => {
        movies.sort((obj1, obj2) => obj1.title.localeCompare(obj2.title));
    };
    useEffect(() => {
        getMovies();
    }, [])
    const [{ searchInput }, setSearchInput] = useState('');
    return (
        <div>
            <input
                type="text"
                value={searchInput}
                onChange={event => setSearchInput({ searchInput: event.target.value })}
                placeholder="Search..."
                required
            />
            <button>
                <img src={search}></img>
            </button>
            <select>
                <option value="year-ascending">Year in ascending order</option>
                <option value="year-descending">Year in descending order</option>
                <option selected value="title-ascending">Title in ascending order</option>
                <option value="title-descending">Title in descending order</option>
            </select>
        </div>
    );
};

export default Movies;