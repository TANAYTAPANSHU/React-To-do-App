import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Todo from './Todo';

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
}));


function App() {
 const classes = useStyles();
  const [todos, setTodos]  = useState(['Love you react💕', 'React ✨']);
  const[input,setinput]= useState('');
  console.log(input)

  let addTodo = (event) => {
    event.preventDefault();
         console.log("hello")    
         if(input==='')
         {
           setTodos([...todos]) 
         }
         else
         {
         setTodos([...todos,input])
         }
  }

  return (
    <div className="App">
  <h1>React is Super Fast🚀</h1>
      <h2> Super Awesome🚀</h2>
  <form className={classes.form} noValidate autoComplete="off">

 <TextField id="filled-basic" label="The work you want to do" variant="filled" onChange={e => setinput(e.target.value) } />
  <Button  variant="contained" color="primary" onClick={addTodo}>
  Add work
</Button>
  </form>
    <ul>
      {todos.map(function(e)
      {
      return(<Todo text={e} />) 
      })}
    </ul>
    </div>
  );
}

export default App;
