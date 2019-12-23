import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { List, ListItem, Button } from '@material-ui/core/';
import BackspaceIcon from '@material-ui/icons/Backspace';
import EditIcon from '@material-ui/icons/Edit';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
      },
    iconSmall: {
    fontSize: 20,
    },
    leftIcon: {
    marginRight: theme.spacing.unit,
    },
    listItem: {
        textAlign: 'right',
        justifyContent: 'flex-center'
    },
    list: {
        margin: '0 auto',
        width: '100%',
        justifyContent: 'center',
        maxWidth: '12rem'
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
      },
});


class Details extends Component{

    goToHome = ()=>{
        this.props.history.push(`/`);
    }

    editDetails = ( event, id ) =>{
        this.props.history.push('/edit')
    }
    
    render(){
        const { classes } = this.props;
        return(
            <>
            <Button variant="contained" color="secondary" className={classes.button} 
                onClick={this.goToHome}> <BackspaceIcon className={classes.leftIcon} />Go Back
            </Button>
            <Button variant="contained" color="primary" className={classes.button} 
                onClick={(event)=> this.editDetails(event, this.props.details)}>Edit <EditIcon className={classes.rightIcon} />
            </Button>
            {this.props.reduxStore.details.map( (item, i) =>{ return (
                <div key={i}>
                <h3>{item.title}</h3> 
                <p>{item.description}</p>
                </div>
            )}) }
            <h3>Genres</h3>
            <List className={classes.list}>
            {this.props.reduxStore.genres.map( (item, i) =>{ return (
                <ListItem className={classes.listItem}key={i}>{item.name}</ListItem> 
            )}) }
            </List>
            </>
        )
    }
}

const putReduxStateOnProps = (reduxStore) => ({
    reduxStore,
});

export default withStyles(styles)(connect(putReduxStateOnProps)(Details));