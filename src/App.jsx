import { createContext, useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import axios from 'axios'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Profile from './components/Profile';

const PostContext = createContext(null) 
 
function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios
    .get('https://boolean-uk-api-server.fly.dev/Ic4rus90/post')
    .then(res => {
        setPosts(res.data); 
      });
    }, [])

  return (
    <PostContext.Provider value={{ posts, setPosts }}>
        <header>
        <Header/>
        <Sidebar />
        </header>
      {/* Global components above*/}
      <Routes>
        <Route
          path="/"
          element={<Dashboard/>}
        />
        <Route
          path="/profile"
          element={<Profile/>}
          />
      </Routes>
    </PostContext.Provider>
  )
}

export { App, PostContext}
