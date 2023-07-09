import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { Context, server } from '..';
import { toast } from 'react-hot-toast';
import TaskList from './TaskList';
import { Navigate } from 'react-router-dom';


const AddTask = () => {

  const [task, setTask] = useState("");
  const [loading, setLoading] = useState(true);
  const [taskList, setTaskList] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const { isAuth } = useContext(Context);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const {data} = await axios.post(`${server}/tasks/newTask`, {
        name: task
      }, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        }
      })
      setTask("")
      toast.success(data.message);
      setLoading(false);
      setRefresh(prev=> !prev);
    } catch (error) {
      toast.error(error.response.data.message);
      setLoading(false);
      setRefresh(prev=> !prev);
    }
  }

  useEffect(() => {
    setLoading(true);
    console.log(loading)
    axios
      .get(`${server}/tasks/all`, {
        withCredentials: true
      })
      .then((res) => setTaskList(res.data.tasks))
      .catch((error) => {
        toast.error(error.response.data.message);
      })
    setLoading(false);
  }, [refresh])

  // if (!isAuth) return <Navigate to={'/login'} />

  return (
    <>
      <div className="addTask">
        <form onSubmit={submitHandler}>
          <input type="text" 
          value={task}
          onChange={(e) => setTask(e.target.value)} 
          placeholder='Add your task...'
          onKeyDown={(e) => (e.keydown === 13) ? submitHandler : null}
          />
          <button
            disabled={loading}
            type='submit'
            className='fs-300 margin-2' >
              Add Task
          </button>
        </form>
      </div>
      
      <div className='taskList'>
        <ul role='listitem'>
          {
            (taskList.length !== 0) 
            ? taskList.map((task)=> {
              return (
                <TaskList 
                  task={task}
                  loading={loading}
                  setRefresh={setRefresh}
                  key={task._id}
                  id={task._id}
                  />
              )
            }) 
            : <li className='padding-3 fs-300' >
              { loading
                ?  <p>Loading...</p> 
                : <p>No tasks added...</p>
              }
            </li>
          }
        </ul>
      </div>
    </>
  )
}

export default AddTask