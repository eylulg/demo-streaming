import axios from "axios";
import { useState, useEffect } from "react";
import { apikey } from "../Api-key";
import searchImage from "../images/search.png";
import Card from "../components/Card";
import "./Movies-Series.css";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [sortedMovies, setSortedMovies] = useState([]);
  const addNewMovie = (movieData) => {
    setMovies((prevState) => [...prevState, movieData]);
  };
  useEffect(() => {
    if (movies.length === 21) {
      sortMovies();
    }
  }, [movies]);
  let moviesInList = 0,
    pageNumber = 1;
  const getMovies = async () => {
    try {
      const resp = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated",
        {
          params: {
            api_key: apikey,
            page: pageNumber,
          },
        }
      );
      const size = resp.data.results.length;
      resp.data.results.map((object, index) => {
        if (moviesInList < 21) {
          if (parseInt(object.release_date) >= 2010) {
            addNewMovie(object);
            moviesInList++;
          }
          if (index === size - 1) {
            pageNumber++;
            getMovies();
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  const search = async (searchWord) => {
    try {
      const resp = await axios.get(
        "https://api.themoviedb.org/3/search/movie/",
        {
          params: {
            api_key: apikey,
            query: searchWord,
          },
        }
      );
      setSortedMovies(resp.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  const sortMovies = () => {
    setSortedMovies(
      movies.sort((obj1, obj2) => obj1.title.localeCompare(obj2.title))
    );
  };
  const filter = (data, type, ascending) => {
    if (type === "year") {
      data.sort(
        (obj1, obj2) =>
          parseInt(obj1.release_date) - parseInt(obj2.release_date)
      );
      if (ascending === true) {
        return data;
      } else {
        return data.reverse();
      }
    } else {
      data.sort((obj1, obj2) => obj1.title.localeCompare(obj2.title));
      if (ascending === true) {
        return data;
      } else {
        return data.reverse();
      }
    }
  };
  useEffect(() => {
    getMovies();
  }, []);
  const [{ searchInput }, setSearchInput] = useState("");
  return (
    <div className="Movies-Series-Container">
      <div className="Bar-Container">
        <input
          className="Height"
          type="text"
          value={searchInput}
          onChange={(event) => {
            setSearchInput({ searchInput: event.target.value });
            if (event.target.value.length >= 3) {
              search(event.target.value);
            }
          }}
          placeholder="Search..."
        />
        <button className="Height">
          <img src={searchImage}></img>
        </button>
        <select
          className="Height"
          onChange={(event) => {
            if (event.target.value === "year-ascending") {
              let temp = filter(sortedMovies, "year", true);
              setSortedMovies([...temp]);
            } else if (event.target.value === "year-descending") {
              let temp = filter(sortedMovies, "year", false);
              setSortedMovies([...temp]);
            } else if (event.target.value === "title-ascending") {
              let temp = filter(sortedMovies, "title", true);
              setSortedMovies([...temp]);
            } else if (event.target.value === "title-descending") {
              let temp = filter(sortedMovies, "title", false);
              setSortedMovies([...temp]);
            }
          }}
        >
          <option value="year-ascending">Year in ascending order</option>
          <option value="year-descending">Year in descending order</option>
          <option selected value="title-ascending">
            Title in ascending order
          </option>
          <option value="title-descending">Title in descending order</option>
        </select>
      </div>
      <div className="Screen-Display">
        {sortedMovies.map((object) => {
          return <Card url={object.poster_path} title={object.title} />;
        })}
      </div>
    </div>
  );
};

export default Movies;
