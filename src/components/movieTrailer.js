import Header from "./header";
import "./movieTrailer.css";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import axios from "axios";
import { useEffect, useState } from "react";
const MovieTrailer = () => {
  const id = useParams();
  const newID = id.id;
  const updatedID = newID.substring(1);
  console.log(newID);
  const [data, setData] = useState("");

  const URL = `https://imdb-top-100-movies.p.rapidapi.com/${newID}`;
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
    fetchFromApi(URL).then((data) => setData(data.data));
  }, []);

  return (
    <>
      <Header />
      <div className="videoContainer">
        <h1>Watch Trailer</h1>
        <ReactPlayer
          url={data.trailer}
          controls
          width="1000px"
          height="500px"
        />
      </div>
    </>
  );
};
export default MovieTrailer;
