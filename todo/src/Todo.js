import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';

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
        </ListItem>
        <Divider />

        </div>
    )
}

export default Todo
