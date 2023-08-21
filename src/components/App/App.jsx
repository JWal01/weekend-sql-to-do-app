import React, {useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function toDoListSection () {
  let [toDoListTask, setToDoListTask] = useState('');
  const [toDoListArray, setToDoListArray]=useState([]);
  
  

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
      axios.post(`/todo/`, {task: toDoListTask, complete: false})
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

    const toggleComplete = (id) => {
      console.log('running route');
      axios.put(`/todo/toggle/${id}`)
      .then((response) =>{
        console.log(response)
        fetchToDoList();
      })
      .catch((error) => {
        console.log(error);
      })
    }

    const deleteTask = (id) => {
      axios.delete(`/todo/${id}`)
      .then((response) =>{
        console.log(response)
        fetchToDoList();
      })
      .catch((error) => {
        console.log(error);
      })
    }
  



  
  
  return (
    <div>
      <h1>TO DO APP</h1>
      <form onSubmit={addToDoList}>
        <input value={toDoListTask} className='input' placeholder='Add Task' onChange={e => setToDoListTask(e.target.value)} />
        <button className='addButton' type="submit">Add</button>

      </form>

      {toDoListArray.map(task =>
      (<li key={task.task} className={task.complete ? 'complete' : 'standard'}   >
        {task.task} {task.complete}
        <button onClick={() => deleteTask(task.id)}>Delete</button>
       
        {JSON.stringify(task.complete)}

        <button onClick={() => toggleComplete(task.id)}  >Complete</button>
      </li>
      ))}

     
    </div>
  );

}

export default toDoListSection;
