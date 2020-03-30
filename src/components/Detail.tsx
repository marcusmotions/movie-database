import React from "react";
import { connect } from "react-redux";
import "../styles/movies.scss";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addFavorites } from "../redux/actions";
import { useParams, useHistory } from "react-router-dom";

interface MoviesProps {
  movies: any;
}

const Detail: React.FC<MoviesProps> = props => {
  const extractedMovies = props.movies.movies;

  const { imdbID } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const selectedMovie =
    extractedMovies &&
    extractedMovies.filter(
      (movie: { imdbID: string }) => movie.imdbID === imdbID
    );

  const handleFavorites = () => {
    dispatch(addFavorites(selectedMovie[0] && selectedMovie[0]));
    history.push("/");
  };

  const DEFAULT_PLACEHOLDER_IMAGE =
    "https://www.creativefabrica.com/wp-content/uploads/2018/12/Movie-roll-cinema-entertainment-icon-EPS-10-by-Hoeda80.jpg";

  return (
    <div className="main">
      {selectedMovie &&
        selectedMovie.map((movie: any) => (
          <div
            className="movie-page-detail"
            style={{ width: "50%" }}
            key={movie.imdbID}
          >
            <div className="menu">
              <p>
                title: <strong>{movie.Title}</strong>
              </p>
              <FaStar className="favorites" onClick={handleFavorites} />
            </div>
            <p>
              imdbID: <strong>{movie.imdbID}</strong>{" "}
            </p>
            <p>
              year: <strong>{movie.Year}</strong>{" "}
            </p>
            <p>
              type: <strong>{movie.Type}</strong>
            </p>
            <img
              style={{ cursor: "initial" }}
              className="poster"
              alt="poster"
              src={
                movie.Poster === "N/A"
                  ? DEFAULT_PLACEHOLDER_IMAGE
                  : movie.Poster
              }
            />
          </div>
        ))}
    </div>
  );
};

function mapStateToProps(state: any) {
  return {
    movies: state
  };
}

export default connect(mapStateToProps, {})(Detail);
