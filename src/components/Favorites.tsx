import React from "react";
import { connect } from "react-redux";
import "../styles/movies.scss";
import { Link } from "react-router-dom";

interface MoviesProps {
  favorites: any;
}

const Favorites: React.FC<MoviesProps> = props => {
  const extractedMovies = props.favorites.favorites;

  const DEFAULT_PLACEHOLDER_IMAGE =
    "https://www.creativefabrica.com/wp-content/uploads/2018/12/Movie-roll-cinema-entertainment-icon-EPS-10-by-Hoeda80.jpg";

  return (
    <div className="main">
      {extractedMovies &&
        extractedMovies.map((movie: any) => (
          <div className="movie-page-detail" key={movie.imdbID}>
            <p>{movie.Title}</p>
            <p>{movie.Year}</p>
            <Link to={`/detail/favorites/${movie.imdbID}`}>
              <img
                className="poster"
                alt="poster"
                src={
                  movie.Poster === "N/A"
                    ? DEFAULT_PLACEHOLDER_IMAGE
                    : movie.Poster
                }
              />
            </Link>
          </div>
        ))}
    </div>
  );
};

function mapStateToProps(state: any) {
  return {
    favorites: state
  };
}

export default connect(mapStateToProps, {})(Favorites);
