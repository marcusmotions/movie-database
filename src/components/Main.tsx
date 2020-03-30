import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "../styles/movies.scss";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://www.creativefabrica.com/wp-content/uploads/2018/12/Movie-roll-cinema-entertainment-icon-EPS-10-by-Hoeda80.jpg";

interface MoviesProps {
  movies: any;
}

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2)
    }
  }
}));

const Main: React.FC<MoviesProps> = props => {
  const classes = useStyles();

  const extractedMovies = props.movies.movies;
  // Pagination
  const [page, setPage] = useState(1);
  const handleChange = (event: any, value: React.SetStateAction<number>) => {
    setPage(value);
  };
  const [paginationArray, setPaginationArray] = useState<any[]>();
  function paginate(array: any[], page_size: number, page_number: number) {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  }
  useEffect(() => {
    const paginateSave =
      extractedMovies && paginate(extractedMovies && extractedMovies, 5, page);
    setPaginationArray(paginateSave);
  }, [page, extractedMovies]);

  return (
    <div className="main">
      {extractedMovies &&
        paginationArray &&
        paginationArray.length !== undefined &&
        paginationArray.map((movie: any) => (
          <div className="movie-page-detail" key={movie.imdbID}>
            <p>{movie.Title}</p>
            <p>{movie.Year}</p>
            <Link to={`/detail/${movie && movie.imdbID}`}>
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
      {extractedMovies && extractedMovies[0] && (
        <div className="pagination">
          <div className={classes.root}>
            <Pagination
              count={10}
              page={page}
              onChange={handleChange}
              color="primary"
            />
          </div>
        </div>
      )}
    </div>
  );
};

function mapStateToProps(state: any) {
  return {
    movies: state
  };
}

export default connect(mapStateToProps, {})(Main);
