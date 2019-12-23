import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';
import { withStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core';

const styles = theme => ({

})

class MovieList extends Component {

    componentDidMount(){
        this.props.dispatch({type: "GET_MOVIES"});
    }

    render(){
        return(
            <Grid container spacing={8}>
                {this.props.reduxStore.movies.map( item => ( 
                <Grid item xs={6} md={4} key={item.id}>
                    <MovieItem item={item} /> 
                </Grid>) ) }
            </Grid>
        )
    }
}

const putReduxStateOnProps = ( reduxStore ) => ({
    reduxStore,
});

export default withStyles(styles)(connect(putReduxStateOnProps)(MovieList));