import "./MovieList.css";
import Header from "./header";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const MovieList = () => {
  const [movieInfo, setMovieInfo] = useState([]);
  const [records, setRecords] = useState([]);

  const searchFil = (text) => {
    setRecords(
      movieInfo.filter((ele) => ele.title.toLowerCase().includes(text))
    );
  };

  const URL = "https://imdb-top-100-movies.p.rapidapi.com/";
  const options = {
    url: URL,
    headers: {
      "X-RapidAPI-Key": '8be28eda27msh4a03fa5810f77a1p1dbc41jsn41c44d720894',
      "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
    },
  };

  const fetchFromApi = async (url) => {
    let data = await axios.get(url, options);

    return data;
  };
  useEffect(() => {
    fetchFromApi(URL).then((data) => {
      setMovieInfo(data.data);
      setRecords(data.data);
    });
  }, []);

  const filterGener = (event) => {
    setRecords(
      movieInfo.filter((ele) => {
        const a = ele.genre.join("");

        return a.includes(event.target.value);
      })
    );
  };

  return (
    <>
      <Header searchFilter={searchFil} />
      <div className="buttonContainer">
        <button className="buttonFilter" value="Action" onClick={filterGener}>
          Action
        </button>
        <button className="buttonFilter" value="Drama" onClick={filterGener}>
          Drama
        </button>
        <button
          className="buttonFilter"
          value="Adventure"
          onClick={filterGener}
        >
          Adventure
        </button>
        <button className="buttonFilter" value="Sci-Fi" onClick={filterGener}>
          Sci-Fi
        </button>
        <button className="buttonFilter" value="Crime" onClick={filterGener}>
          Crime
        </button>
        <button className="buttonFilter" value="Thriller" onClick={filterGener}>
          Thriller
        </button>
        <button className="buttonFilter" value="Mystery" onClick={filterGener}>
          Mystery
        </button>
        <button className="buttonFilter" value="Romance" onClick={filterGener}>
          Romance
        </button>
        <button className="buttonFilter" value="Family" onClick={filterGener}>
          Family
        </button>
      </div>

      <div className="movieContainer">
        {records.map((item) => {
          return (
            <div className="movies">
              <Link to={`/${item.id}`}>
                <img className="movieimg" src={item.image} alt="" />
                <Link to={`/${item.id}`}>
                  {" "}
                  <h3>{item.title}</h3>
                </Link>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default MovieList;
