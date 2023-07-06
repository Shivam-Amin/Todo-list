import React, { useEffect, useState } from 'react'
import TaskList from './TaskList'

const AddTask = ({task, setTask}) => {

  // If local storage has tasks to it then get the tasks or return []
  const [taskList, settaskList] = useState(() => {
    const data = localStorage.getItem("tasks");
    const initialValue = JSON.parse(data);
    return initialValue || []
  });

  // Store the tasks whenever the taskList is changed...
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskList))
  }, [taskList])
  
  const handleTask = (e) => {
    setTask(e.target.value)
  }

  const addTask = () => {
    if (taskList.includes(task)) {
      window.alert('You already have this task..')
    } else {
      settaskList([...taskList, task]);
      setTask("")
    }
  }

  const removeTask = (id) => {
    // console.log(index);
    const newList = taskList.filter((val, index) => index !== id )
    settaskList(newList);
  }

  const isEnter = (e) => {
    if (e.keyCode === 13) {
      // copy code of addTask arrow function.
      if (taskList.includes(task)) {
        window.alert('You already have this task..')
      } else {
        settaskList([...taskList, task]);
        setTask("")
      }
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