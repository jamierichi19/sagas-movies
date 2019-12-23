import React, { Component } from 'react';
import { connect } from 'react-redux';

class Edit extends Component{

    state= {
        title: '',
        description: '',
        id: this.props.reduxStore.details[0].id
    }

    editDetails = (event) => {
        this.props.dispatch({ type: 'EDIT_DETAILS', payload: this.state});
        this.props.dispatch({ type: 'GET_DETAILS', payload: {id: this.state.id} });
        this.props.history.push('/details')
    }

    goBack = ()=>{
        this.props.history.push(`/details`);
    }

      // keeps track of information being typed in form
      handleChange = (event, propertyName) => {
        console.log('Got a change:', event.target.value, propertyName );
        this.setState({
          [propertyName]: event.target.value
      })
    }
    render(){
        return(
            <>
            <input type="text" placeholder="Updtate Title" onChange={(event)=>this.handleChange(event, 'title')} value={this.state.title}/>
            <br></br>
            <textarea type="text" placeholder="Update Description" onChange={(event)=>this.handleChange(event, 'description')} value={this.state.description} />
            <br></br>
            <button onClick={this.goBack}>Cancel</button>
            <button onClick={(event) => this.editDetails(event)} >Save</button>
            </>
        )
    }
}

const putReduxStateOnProps = (reduxStore) => ({
    reduxStore
})

export default connect(putReduxStateOnProps)(Edit);