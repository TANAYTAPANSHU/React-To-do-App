import React,{useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Todo from './Todo';
import {db} from './firebase.js' ;
import firebase, { firestore } from "firebase"
import AccessTimeIcon from '@material-ui/icons/AccessTime';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
   form: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },

   
},
 text: {
    '& > *':   {
    color: '#FFF952'
    }
  
  },

}));


function App() {
 const classes = useStyles();
  const [todos, setTodos]  = useState([]);
  const[input,setinput]= useState('');
  console.log(input)

  useEffect(() => {
   db.collection('Todos').orderBy('timestamp','asc').onSnapshot(snapshot => {
     console.log(snapshot.docs.map(doc => doc.data()))
     setTodos(snapshot.docs.map(doc => ({ id:doc.id  , todo: doc.data().todo})))
   })
  }, [])

  let addTodo = (event) => {
    event.preventDefault();
    if(input==="")
    {

    }
    else{
        db.collection('Todos').add({
          todo: input,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
      }
  }

  return (
    <div className="App">
  
      <h1 className={classes.text}>Tanay's To-do App <AccessTimeIcon /> </h1>
  <form className={classes.form} noValidate autoComplete="off">

 <TextField id="filled-basic" label="The work you want to do" variant="filled" onChange={e => setinput(e.target.value) } />
  <Button  variant="contained" color="primary" onClick={addTodo}>
  Add work
</Button>
  </form>
    <ul>
      {todos.map(function(e)
      {
      return(<Todo text={e.todo} id={e.id}/>) 
      })}
    </ul>
    </div>
  );
}

export default App;
