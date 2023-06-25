import React from 'react'
import { FiTrash } from 'react-icons/fi'


const TaskList = ({taskList, removeTask}) => {
  
  return (
    <div className='taskList'>
      <ul role='list'>
        {taskList.map((task, index)=> {
          return (
            <li className='padding-3 fs-300' id={index} key={task} >
              <div>
              <input type="checkbox" />
              <p> {task} </p>
              </div>

              <div>
                <FiTrash 
                  className='bin' 
                  onClick={() => {
                    removeTask(index)
                  }} />
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default TaskList;

