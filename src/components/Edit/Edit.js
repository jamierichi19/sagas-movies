import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core/';
import CancelIcon from '@material-ui/icons/Cancel';
import SaveAltIcon from '@material-ui/icons/SaveAlt';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
});


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
        const { classes } = this.props;
        return(
            <>
            <TextField className={classes.textField} variant="outlined" type="text" label="Updtate Title" 
                onChange={(event)=>this.handleChange(event, 'title')} value={this.state.title}/>
            <br />
            <TextField className={classes.textField} variant="outlined" multiline rows="4" type="text" placeholder="Update Description" 
                onChange={(event)=>this.handleChange(event, 'description')} value={this.state.description} />
            <br />
            <Button variant="contained" color="secondary" className={classes.button} onClick={this.goBack}>
                <CancelIcon className={classes.leftIcon} />Cancel</Button>
            <Button variant="contained" color="primary" className={classes.button} 
                onClick={(event) => this.editDetails(event)} >Save<SaveAltIcon className={classes.rightIcon} /></Button>
            </>
        )
    }
}

const putReduxStateOnProps = (reduxStore) => ({
    reduxStore
})

export default withStyles(styles)(connect(putReduxStateOnProps)(Edit));