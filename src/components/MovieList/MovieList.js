import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';

class MovieList extends Component {

    componentDidMount(){
        this.props.dispatch({type: "GET_MOVIES"});
    }

    render(){
        return(
            <div>
                {this.props.reduxStore.movies.map( item => ( <MovieItem item={item} /> ) ) };
            </div>
        )
    }
}

const putReduxStateOnProps = ( reduxStore ) => ({
    reduxStore,
});

export default connect(putReduxStateOnProps)(MovieList);