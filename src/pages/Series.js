import axios from "axios";
import { useState, useEffect } from "react";
import { apikey } from "../Api-key";
import search from "../images/search.png";

const Series = () => {
    const [series, setSeries] = useState([]);
    const addNewSeries = (seriesData) => {
        setSeries((prevState) => [...prevState, seriesData]);
    };
    useEffect(() => {
        console.log(series)
        if (series.length === 21) {
            sortSeries();
        }
    }, [series])
    let seriesInList = 0, pageNumber = 1;
    const getSeries = async () => {
        try {
            const resp = await axios.get('https://api.themoviedb.org/3/tv/top_rated', {
                params: {
                    api_key: apikey,
                    page: pageNumber
                },
            });
            const size = resp.data.results.length;
            resp.data.results.map((object, index) => {
                if (seriesInList < 21) {
                    if (parseInt(object.first_air_date) >= 2010) {
                        addNewSeries(object);
                        seriesInList++;
                    }
                    if (index === (size - 1)) {
                        pageNumber++;
                        getSeries();
                    }
                }
            });
        }
        catch (error) {
            console.log(error);
        }
    };
    const sortSeries = () => {
        series.sort((obj1, obj2) => obj1.name.localeCompare(obj2.name));
    };
    useEffect(() => {
        getSeries();
    }, [])
    return (
        <div>
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

export default Series;