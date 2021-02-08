import axios from "axios";
import { useState, useEffect } from "react";
import { apikey } from "../Api-key";
import searchImage from "../images/search.png";
import Card from "../components/Card";
import "./Movies-Series.css";

const Series = () => {
  const [series, setSeries] = useState([]);
  const [sortedSeries, setSortedSeries] = useState([]);
  const addNewSeries = (seriesData) => {
    setSeries((prevState) => [...prevState, seriesData]);
  };
  useEffect(() => {
    if (series.length === 21) {
      sortSeries();
    }
  }, [series]);
  let seriesInList = 0,
    pageNumber = 1;
  const getSeries = async () => {
    try {
      const resp = await axios.get(
        "https://api.themoviedb.org/3/tv/top_rated",
        {
          params: {
            api_key: apikey,
            page: pageNumber,
          },
        }
      );
      const size = resp.data.results.length;
      resp.data.results.map((object, index) => {
        if (seriesInList < 21) {
          if (parseInt(object.first_air_date) >= 2010) {
            addNewSeries(object);
            seriesInList++;
          }
          if (index === size - 1) {
            pageNumber++;
            getSeries();
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  const search = async (searchWord) => {
    try {
      const resp = await axios.get("https://api.themoviedb.org/3/search/tv/", {
        params: {
          api_key: apikey,
          query: searchWord,
        },
      });
      setSortedSeries(resp.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  const sortSeries = () => {
    setSortedSeries(
      series.sort((obj1, obj2) => obj1.name.localeCompare(obj2.name))
    );
  };
  const filter = (data, type, ascending) => {
    if (type === "year") {
      data.sort(
        (obj1, obj2) =>
          parseInt(obj1.first_air_date) - parseInt(obj2.first_air_date)
      );
      if (ascending === true) {
        return data;
      } else {
        return data.reverse();
      }
    } else {
      data.sort((obj1, obj2) => obj1.name.localeCompare(obj2.name));
      if (ascending === true) {
        return data;
      } else {
        return data.reverse();
      }
    }
  };
  useEffect(() => {
    getSeries();
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
              let temp = filter(sortedSeries, "year", true);
              setSortedSeries([...temp]);
            } else if (event.target.value === "year-descending") {
              let temp = filter(sortedSeries, "year", false);
              setSortedSeries([...temp]);
            } else if (event.target.value === "title-ascending") {
              let temp = filter(sortedSeries, "title", true);
              setSortedSeries([...temp]);
            } else if (event.target.value === "title-descending") {
              let temp = filter(sortedSeries, "title", false);
              setSortedSeries([...temp]);
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
        {sortedSeries.map((object) => {
          return <Card url={object.poster_path} title={object.name} />;
        })}
      </div>
    </div>
  );
};

export default Series;
