import React, { Component } from 'react';
import {connect} from 'react-redux';

class Details extends Component{

    goToHome = ()=>{
        this.props.history.push(`/`);
    }

    editDetails = ( event, id ) =>{
        this.props.history.push('/edit')
    }
    
    render(){
        return(
            <>
            <button onClick={this.goToHome}>Go Back</button>
            <button onClick={(event)=> this.editDetails(event, this.props.details)}>Edit</button>
            {this.props.reduxStore.details.map( (item, i) =>{ return (
                <div key={i}>
                <h3>{item.title}</h3> 
                <p>{item.description}</p>
                </div>
            )}) }
            </>
        )
    }
}

const putReduxStateOnProps = (reduxStore) => ({
    reduxStore,
});

export default connect(putReduxStateOnProps)(Details);