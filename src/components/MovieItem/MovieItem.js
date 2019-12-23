import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardContent} from '@material-ui/core/';

const styles = theme => ({
    card: {
        minWidth: 275,
        height: 780
    },
});

class MovieItem extends Component {
    
    goToDetails = (event, id) => {
        this.props.dispatch({ type: 'GET_DETAILS', payload: {id: id} });
        this.props.dispatch({ type: 'GET_GENRES', payload: {id: id} });
    }

    render(){
        const { classes } = this.props;
        return(
            <Card className={classes.card}>
                <CardContent>
                    <h3>{this.props.item.title}</h3>
                    <Link to="/details">
                        <img 
                        onClick={(event) => this.goToDetails(event, this.props.item.id)}
                        src={this.props.item.poster} alt={this.props.item.title} />
                    </Link>
                    <h4>Description</h4>
                    <p>{this.props.item.description}</p>
                </CardContent>
            </Card>
        )
    }
}

const putReduxStateOnProps = ( reduxStore ) =>({
    reduxStore
});

export default withStyles(styles)(connect(putReduxStateOnProps)(MovieItem));