import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage';
import FavouriteMoviesPage from './pages/favouritesMoviesPage'
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import PersonPage from './pages/personDetailsPage';
import NowPlayingPage from './pages/nowPlayingPage'

const App = () => {
  return (
    <BrowserRouter>
    <div className="jumbotron">
      <SiteHeader />  {/* New Header */}
        <div className="container-fluid">
          <MoviesContextProvider>
            <GenresContextProvider>
              <Switch>
                <Route exact path="/reviews/form" component={AddMovieReviewPage} />
                <Route path="/reviews/:id" component={MovieReviewPage} />
                <Route exact path="/movies/favorites" component={FavouriteMoviesPage} />
                <Route path="/movies/:id" component={MoviePage} />
                <Route path="/person/:id" component={PersonPage} />
                <Route path="/nowPlaying" component={NowPlayingPage} />
                <Route path="/" component={HomePage} />
                <Redirect from="*" to="/" />
              </Switch>
            </GenresContextProvider>
          </MoviesContextProvider>        
      </div>
    </div>
  </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));