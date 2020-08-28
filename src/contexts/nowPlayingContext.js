import React, { useEffect, createContext, useReducer } from "react";
import { getNowPlaying } from "../api/tmdb-api";

export const NowPlayingContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-favorite":
      return {
        movies: state.movies.filter((m) => m.id !== action.payload.movie.id),
        favorites: [...state.favorites, action.payload.movie],
      };
    case "load-movies":
      return { movies: [...action.payload.movies], favorites: [] };
    case "add-review":
        return {
            movies: [...state.movies],
            favorites: [
              ...state.favorites.filter((m) => m.id !== action.payload.movie.id),
              { ...action.payload.movie, review: action.payload.review },
            ],
        };
      break;
    default:
      return state;
  }
};

const NowPlayingContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { movies: [], favorites: [] });

  const addToFavorites = (movieId) => {
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favorite", payload: { movie: state.movies[index] } });
  };

  const addReview = (movie, review) => {
      dispatch({ type: "add-review", payload: { movie, review} });
  };

  useEffect(() => {
    getNowPlaying().then((movies) => {
      dispatch({ type: "load-movies", payload: { movies } });
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <NowPlayingContext.Provider
      value={{
        movies: state.movies,
        favorites: state.favorites,
        addToFavorites: addToFavorites,
        addReview: addReview,
      }}
    >
      {props.children}
    </NowPlayingContext.Provider>
  );
};

export default NowPlayingContextProvider;