import {useState} from 'react';
import './App.css';

function App () {
  
  return (
    <div>
      <h1>TO DO APP</h1>
      <form>
        <input className='input' placeholder='Add Task'/>
        <button className='addButton' type="submit">Add</button>

      </form>

    </div>
  );

}

export default App
