import React, { Component } from 'react';
import { connect } from 'react-redux';

class Edit extends Component{
    render(){
        return(
            <h1>Edit</h1>
        )
    }
}

const putReduxStateOnProps = (reduxStore) => ({
    reduxStore
})

export default connect(putReduxStateOnProps)(Edit);