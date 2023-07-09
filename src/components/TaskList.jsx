import axios from 'axios'
import React from 'react'
import { toast } from 'react-hot-toast'
import { FiTrash } from 'react-icons/fi'
import { server } from '..'


const TaskList = ({task, setRefresh}) => {

  const deleteHandler = async (id) => {
    try {
      const {data} = await axios.delete(`${server}/tasks/${id}`, {
        withCredentials: true,
      })
      toast.success(data.message);
      setRefresh(prev=> !prev);
    } catch (error) {
      toast.error(error.response.data.message);
      setRefresh(prev=> !prev);
    }
  }

  const updateHandler = async (id) => {
    try {
      const {data} = await axios.patch(`${server}/tasks/${id}`,
      {},
       {
        headers: {
          "Content-Type": "application/json" 
        },
        withCredentials: true,
      })
      toast.success(data.message);
      setRefresh(prev=> !prev);
    } catch (error) {
      toast.error(error.response.data.message);
      setRefresh(prev=> !prev);
    }
  }

  return (
    <>
      <li className='padding-3 fs-300' >
        <div>
          <input 
            type="checkbox"
            onChange={() =>updateHandler(task._id)}
            checked={task.isCompleted} />
          <p> {task.name} </p>
        </div>

        <div>
          <FiTrash 
            className='bin' 
            onClick={() =>deleteHandler(task._id)}/>
        </div>
      </li>
    </>
  )
}

export default TaskList;

