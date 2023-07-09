import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createContext } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));

export const server = "https://nodejs-todoapp-zhur.onrender.com/api/v1";
export const Context = createContext({isAuth: false})

const AppWrapper = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState({})

  return (
    <Context.Provider
      value={{
        isAuth,
        setIsAuth,
        loading,
        setLoading,
        user, 
        setUser
      }}>
      <App />
    </Context.Provider>
  )
}

root.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
