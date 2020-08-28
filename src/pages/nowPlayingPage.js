import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {NowPlayingContext} from '../contexts/nowPlayingContext'
import AddToFavoritesButton from '../components/buttons/addToFavorites'

const NowPlayingPage = () => {
  const context = useContext(NowPlayingContext);

  return (
      <PageTemplate 
        title='Now Playing'
        movies={context.movies}
        action={movie => <AddToFavoritesButton movie={movie} /> }
      />
  );
};

export default NowPlayingPage;