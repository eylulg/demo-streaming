import axios from "axios";
import { useState, useEffect } from "react";
import { apikey } from "../Api-key";

const Series = () => {
    const [series, setSeries] = useState([]);
    const addNewSeries = (seriesData) => {
        setSeries((prevState) => [...prevState, seriesData]);
    };
    const [pageNumber, setPageNumber] = useState(1);
    const getSeries = async () => {
        try {
            const resp = await axios.get('https://api.themoviedb.org/3/tv/top_rated', {
                params: {
                    api_key: apikey,
                    page: pageNumber
                },
            });
            resp.data.results.map((object) => {
                if (parseInt(object.first_air_date) >= 2010) {
                    addNewSeries(object);
                }
            });
        }
        catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getSeries();
    }, [])
    useEffect(() => {
        console.log(series)
    }, [series])
    return (
        null
    );
};

export default Series;