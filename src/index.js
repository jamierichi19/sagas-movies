import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import {takeEvery, put} from 'redux-saga/effects';

import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery( 'GET_MOVIES', getMoviesSaga);
    yield takeEvery( 'GET_DETAILS', getDetailsSaga);
    yield takeEvery( 'GET_GENRES', getGenresSaga);
    yield takeEvery( 'EDIT_DETAILS', editDetailsSaga)
}

// Gets all the movie details from the server and sends them to a holder reducer
function* getDetailsSaga(action){
    try{
        const response = yield axios.get(`/movies/${action.payload.id}`);
        yield put({type: 'SET_DETAILS', payload: response.data})
    } catch (error){
        console.log(error)
    }
}

// Sends data to the server to edit movie details
function* editDetailsSaga(action){
    try{
        yield axios.put(`/movies/${action.payload.id}`, action.payload);
    } catch (error){
        console.log(error)
    }
}

// Gets all the movie genres from the server and sends them to a holder reducer
function* getGenresSaga(action){
    try{
        const response = yield axios.get(`/genres/${action.payload.id}`);
        yield put({type: 'SET_GENRES', payload: response.data})
    } catch (error){
        console.log(error)
    }
}

// Gets all the movies from the server and sends them to a holder reducer
function* getMoviesSaga(action){
    try{
        const response = yield axios.get('/movies');
        yield put({type: 'SET_MOVIES', payload: response.data})
    } catch (error){
        console.log(error)
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store details returned from the server
const details = (state = [], action) => {
    switch (action.type) {
        case 'SET_DETAILS':
            return action.payload;
        default:
            return state;
    }
}

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        details,
        movies,
        genres,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
