import React, {useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import '@fontsource/roboto';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ButtonGroup from '@mui/material/ButtonGroup';


import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));




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
    <div className='tasks-list' >
      <h1>TO DO APP</h1>
      <form onSubmit={addToDoList}>
        {/* <input value={toDoListTask} className='input' placeholder='Add Task' onChange={e => setToDoListTask(e.target.value)} /> */}
        <TextField color="primary" value={toDoListTask} className='input'  onChange={e => setToDoListTask(e.target.value)} id="filled-basic" label="Add Task" variant="filled" />
        <br></br>
        <Button color='primary' className='addButton' type="submit" variant="outlined">Add</Button>
      

      </form>

      {toDoListArray.map(task =>
      (
      <li key={task.id} className={`task ${task.complete ? 'complete' : 'standard'}`}>
        {task.task} {task.complete}
        {/* <div className='buttons'> */}

    
      
 
    
       
    <ButtonGroup
    disableElevation
    variant="contained"
    aria-label="Disabled elevation buttons"
    >
    <Button onClick={() => toggleComplete(task.id)}  >Complete</Button>
    <Button onClick={() => deleteTask(task.id)} >Delete</Button>
    
    </ButtonGroup>

          {/* </div> */}
        </li>
        ))}

      
      </div>
    );

  }

export default toDoListSection;
