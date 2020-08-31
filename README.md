# Project - ReactJS app.

Name: Andrew Helen

## Overview.

Add actors to the movie details page. Create a page to show movies currently playing locally. Update storybook. 


...... Insert a bullet-point list of user features. For extension to the Movies Fan app, only list new/modified features)...... 
 
 + Feature 1 - Add actors to moviesDetails page
 + Feature 2 - Add Person details page, showing person image, biography etc. 
 + Feature 3 - Update stories to include person details page
 + Feature 4 - Add page to show movies showing now using context. 
 + Feature 5 - Deploy to netlify - https://cocky-easley-075bce.netlify.app

## Setup requirements.

Add a .env file to root containing tmdb api key variable as "REACT_APP_TMDB_KEY={API Key}"

## API Data Model.

Feature- 1 Actors https://api.themoviedb.org/3/movie/${id}/credits?api_key=

JSON example

{
  "id": 475557,
  "cast": [
    {
      "cast_id": 357,
      "character": "Arthur Fleck / Joker",
      "credit_id": "5e8593bd98f1f10014aacb71",
      "gender": 2,
      "id": 73421,
      "name": "Joaquin Phoenix",
      "order": 0,
      "profile_path": "/nXMzvVF6xR3OXOedozfOcoA20xh.jpg"
    },
    {
      "cast_id": 16,
      "character": "Murray Franklin",
      "credit_id": "5b5242749251411f8600052d",
      "gender": 2,
      "id": 380,
      "name": "Robert De Niro",
      "order": 1,
      "profile_path": "/cT8htcckIuyI1Lqwt1CvD02ynTh.jpg"
    },
}

Feature - 2 Person https://api.themoviedb.org/3/person/${id}?api_key=

{
  "birthday": null,
  "known_for_department": "Acting",
  "deathday": null,
  "id": 2136319,
  "name": "Kadrolsha Ona Carole",
  "also_known_as": [],
  "gender": 0,
  "biography": "",
  "popularity": 0.84,
  "place_of_birth": null,
  "profile_path": "/xRg7Tv3beUyIfuNOcit0hVQg6CE.jpg",
  "adult": false,
  "imdb_id": "",
  "homepage": null
}


Feature - 4 Now Playing GET/movie/now_playing

 {
      "popularity": 56.723,
      "vote_count": 69,
      "video": false,
      "poster_path": "/7I8BmtqjLyyMf3EjrUEIQs0gFYw.jpg",
      "id": 625568,
      "adult": false,
      "backdrop_path": "/e7bpDu3RKsjOYLSt9gHYT2c32Zd.jpg",
      "original_language": "en",
      "original_title": "Unhinged",
      "genre_ids": [
        28,
        53
      ],
      "title": "Unhinged",
      "vote_average": 6.3,
      "overview": "A case of road rage turns into full-blown terror when an unstable driver follows a woman and her son.",
      "release_date": "2020-07-31"
    },

## App Design.

### Component catalogue.

![alt text][storybook.PNG]

### UI Design.

...... Insert screenshots of the app's views (see example below) with appropriate captions (For extension to the Movies Fan App, only show the new/modified views) ........

![][view]
>Shows detailed information on a movie. Clicking the 'Show Reviews' button will display extracts from critic reviews.

### Routing.

+ /person/:id - loads the person details page
+ /nowPlaying - loads a list of movies currently playing


## React feature set.


+ useState and useEffect hooks - src/contexts/nowPlayingContext.js
+ custom hook src/hooks/useCredits.js
+ etc
+ etc

## Independent learning.

App deployed to netlifly @ https://cocky-easley-075bce.netlify.app