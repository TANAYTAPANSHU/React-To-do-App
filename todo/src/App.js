import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [todos, setTodos]  = useState(['Wake up early', 'Go for a walk']);
  const[input,setinput]= useState('');
  console.log(input)

  let addTodo = (event) => {
    event.preventDefault();
         console.log("hello")    
         setTodos([...todos,input])

  }

  return (
    <div className="App">
  <h1>Hello Programmers 🚀</h1>
  <form>
  <input value={input}  onChange={e => setinput(e.target.value) }/>
  <button onClick={addTodo}>add the work</button>
  </form>
    <ul>
      {todos.map(function(e)
      {
      return(<li>{e} <button>Delete</button> </li>)
      })}
    </ul>
    </div>
  );
}

export default App;
