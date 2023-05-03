import React from 'react'
// import { logo } from './../images/todo-logo.svg'
import {GoFileCode} from 'react-icons/go'

const Header = () => {
  return (
    <div className='Header padding-2'>
      <GoFileCode className='logo' />
      <h1 className='fs-400'>To-do List</h1>
    </div>
  )
}

export default Header