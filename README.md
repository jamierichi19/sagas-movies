# Saga Movie List

## Description

Duration: Weekend Project

This application displays a list of movies including titles, movie posters, and descriptions.  When the user clicks on an image, it takes them to a page where they can see the details about the movie.  While on this page, the user can either click to go back or click to edit.  If they click to edit, they are brought to the edit view, where they can give the movie a new title and discription.  While on this page the user can either click a cancel button and be brought back to the details page, or they can click the save button, which will update the database with the new information and bring the user back to the details page.

## Installation
1. Create a database named `saga_movies_weekend`.
2. Use the provided database.sql file to create necessary tables and input data.
3. Install dependencies using terminal within vs code
```
npm install
```
4. Start project by running the server and client in different terminals within vs code
```
npm run server
npm run client
```