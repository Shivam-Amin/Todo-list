import React, { useState } from 'react'
import TaskList from './TaskList'

const AddTask = ({task, setTask}) => {
  const [taskList, settaskList] = useState([]);
  
  const handleTask = (e) => {
    setTask(e.target.value)
  }

  const addTask = () => {
    settaskList([...taskList, task]);
    setTask("")
  }

  const removeTask = (id) => {
    // console.log(index);
    const newList = taskList.filter((val, index) => index != id )
    settaskList(newList);
    console.log(id);
    console.log(taskList);
  }

  const isEnter = (e) => {
    if (e.keyCode == 13) {
      settaskList([...taskList, task]);
      setTask("")
    }
  }

  return (
    <>
      <div className="addTask">
        <input type="text" 
        value={task} 
        onChange={handleTask} 
        placeholder='Add your task...'
        onKeyDown={isEnter}
         />
        <button
          className='fs-300 margin-2'
          onClick={addTask}>
            Add Task
        </button>
      </div>

      <TaskList taskList={taskList} removeTask={removeTask} />
    </>
  )
}

export default AddTask