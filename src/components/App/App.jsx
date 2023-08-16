import React, {useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function toDoListSection () {
  let [toDoListTask, setToDoListTask] = useState('');
  let [toDoListArray, setToDoListArray]=useState([]);
  
  const fetchToDoList = () => {
    axios.get('/todo/')
    .then((response) => {
      console.log(response.data);
      setToDoListArray(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }

    const addToDoList = (evt) => {
      console.log(`The task is ${toDoListTask} `);
      // POST ROUTE TO 
      axios.post(`/todo/`, {task: toDoListTask})
      .then( (response) => {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

      setToDoListTask('')
     
    } 

    useEffect(() => {
      fetchToDoList();
    }, []);



  
  
  return (
    <div>
      <h1>TO DO APP</h1>
      <form onSubmit={addToDoList}>
        <input value={toDoListTask} className='input' placeholder='Add Task' onChange={e => setToDoListTask(e.target.value)} />
        <button className='addButton' type="submit">Add</button>

      </form>

      {toDoListArray.map(task =>
      (<li key={task.task}>
        {task.task} {task.complete}
      </li>
      ))}

     
    </div>
  );

}

export default toDoListSection;
