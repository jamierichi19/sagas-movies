import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class MovieItem extends Component {
    
    goToDetails = (event, id) => {
        this.props.dispatch({ type: 'GET_DETAILS', payload: {id: id} });
    }

    render(){
        return(
            <div key={this.props.reduxStore.movies[0].id}>
                <h3>{this.props.item.title}</h3>
                <Link to="/details">
                    <img 
                    onClick={(event) => this.goToDetails(event, this.props.item.id)}
                    src={this.props.item.poster} alt={this.props.item.title} />
                </Link>
                <h4>Description</h4>
                <p>{this.props.item.description}</p>
            </div>
        )
    }
}

const putReduxStateOnProps = ( reduxStore ) =>({
    reduxStore
});

export default connect(putReduxStateOnProps)(MovieItem);