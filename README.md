# Project - ReactJS app.

Name: Andrew Helen

## Overview.
...... Insert a statement of the app concept and objectives. For an expansion of the Movies Fan app, only state the additional objectives .........


...... Insert a bullet-point list of user features. For extension to the Movies Fan app, only list new/modified features)...... 
 
 + Feature 1 - Add actors to moviesDetails page
 + Feature 2
 + Feature 3
 + etc
 + etc

## Setup requirements.

...... Insert a brief explanation (to a third party) of any non-standard setup steps necessary to run your app/client locally (after cloning the repo) ........

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


## App Design.

### Component catalogue.

....... Insert a screenshot from the Storybook UI showing your components' stories. [For projects that expanded the Movies app, hi-light stories relating to new/modified components - see example screenshot below] .......

![][stories]

### UI Design.

...... Insert screenshots of the app's views (see example below) with appropriate captions (For extension to the Movies Fan App, only show the new/modified views) ........

![][view]
>Shows detailed information on a movie. Clicking the 'Show Reviews' button will display extracts from critic reviews.

### Routing.

...... Insert a list of the routes supported by your app and state the associated view. If relevant, specify which of the routes require authentication, i.e. protected/private. For projects that expanded the Movies Fan app, only new routes should be listed ......... 

+ /blogs - displays all published blogs.
+ /blogs/:id (private) - detail view of a particular blog.
+ /blogs/:id/comments (private) - detail view of a particular blog and its comments.
+ etc.
+ etc.

## React feature set.

..... Insert a bullet-point list of the React features used in your project, including one source code file references for each - see examples below ......

+ useState and useEffect hooks - src/components/fileA.js
+ useContext hook - src/components/fileb.js
+ Extended Link - src/components/fileA.js
+ Programmatic navigation - src/pages/fileC.js
+ etc
+ etc
+ etc

## Independent learning.

. . . . . Briefly state the technologies/techniques used in your project codebase that were not covered in the lectures/labs. Provide source code filename references to support your assertions and include source material references (articles/blogs) ......... 


[model]: ./data.jpg
[view]: ./view.png
[stories]: ./storybook.png