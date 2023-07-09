import "./App.css";
import MovieList from "./components/MovieList";
import { Route, Routes } from "react-router-dom";
import MovieTrailer from "./components/movieTrailer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route>
          <Route path="/" element={<MovieList />} />
        </Route>
        <Route>
          <Route path="/:id" element={<MovieTrailer />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
