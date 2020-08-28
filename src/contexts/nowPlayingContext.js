import React, { useEffect, createContext, useReducer, useState } from "react";
import { getNowPlaying } from "../api/tmdb-api";

export const NowPlayingContext = createContext(null);

const NowPlayingContextProvider = props => {
    const [movies, setMovies] =useState([]);

    useEffect(() => {
        getNowPlaying().then(movies => {
            setMovies(movies);
        });
    }, []);

    return (
        <NowPlayingContext.Provider
            value={{
                movies: movies
            }}
        >
            {props.children}
        </NowPlayingContext.Provider>
    );
};

export default NowPlayingContextProvider