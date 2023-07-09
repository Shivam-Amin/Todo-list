import './App.css';
import Header from './components/Header';
import AddTask from './components/AddTask';
import { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Register';
import { Toaster } from 'react-hot-toast';
import { Context, server } from '.';
import axios from 'axios';


function App() {

  const {setUser, setIsAuth} = useContext(Context);

  useEffect(() => {
    axios.get(`${server}/users/me`, {
      withCredentials: true,
    })
    .then((res) => {
      setUser(res.data.user);
      setIsAuth(true)
    })
    .catch((error) => {
      setUser({});
      setIsAuth(false)
    })
  }, [])

  return (
    <div className="App ">
      
      <div>
        <Router>
          <Header />
          <Routes>

            <Route path = '/' element = {
              <div className='container'>
                  <AddTask />
                </div>
            } />

            <Route path = '/login' element = { <Login /> } />
            <Route path = '/register' element = { <Signup /> } />
          </Routes>
          <Toaster toastOptions={{
            style: {
              background: '#333',
              color: 'whitesmoke',
              fontSize: '14px',
            }
          }} />
        </Router>
      </div>
    </div>
  );
}

export default App;
