import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import firebase from "firebase";
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { Button } from '@material-ui/core';
import { db } from './firebase';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));


function Todo(prop) {
    const classes = useStyles();
    return (
        <div>
          
                   <ListItem >
               
          <ListItemText primary={prop.text} variant="h3" color="primary" />
          <Button onClick={event =>{db.collection('Todos').doc(prop.id).delete()} }> <DeleteIcon  /> </Button>
        </ListItem>
          
        <Divider />

        </div>
    )
}

export default Todo
