import React, { Component } from 'react';
import {connect} from 'react-redux';

class Details extends Component{
    render(){
        return(
            <>
            <h2>Details</h2>
            </>
        )
    }
}

const putReduxStateOnProps = (reduxStore) => ({
    reduxStore,
});

export default connect(putReduxStateOnProps)(Details);