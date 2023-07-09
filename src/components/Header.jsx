import React, { useContext } from 'react'
// import { logo } from './../images/todo-logo.svg'
import {GoFileCode} from 'react-icons/go'
import '../CSS/header.css';
import { Context, server } from '..';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const Header = () => {
  const {isAuth, setIsAuth, loading, setLoading} = useContext(Context);

  const logoutHandler = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const { data } = await axios.get(`${server}/users/logout`, {
        withCredentials: true,
      })
      toast.success(data.message);
      setIsAuth(false);
      setLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setIsAuth(true);
      setLoading(false);
    }
  }

  return (
    <div className='Header padding-2'>
      <div>
      <GoFileCode className='logo' />
      <h1>To-do List</h1>
      </div>

      { (isAuth) 
        ? <button disabled={loading} onClick={logoutHandler}>Logout</button>
        : <Link to={'/login'}>
            <button disabled={loading}>Login</button>
        </Link>
      }
    </div>
  )
}

export default Header