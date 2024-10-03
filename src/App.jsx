import { createContext, useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import axios from 'axios'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Profile from './components/Profile';
import { useContext } from 'react';

const PostContext = createContext(null) 
const ContactContext = createContext(null) 

function App() {
  const [posts, setPosts] = useState([])
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    axios
    .get('https://boolean-uk-api-server.fly.dev/Ic4rus90/post')
    .then(res => {
        setPosts(res.data); 
      });
    }, [])

  useEffect(() => {
    axios
    .get('https://boolean-uk-api-server.fly.dev/Ic4rus90/contact')
    .then(res => {
      setContacts(res.data);
    })
  })



  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      <ContactContext.Provider value={{ contacts, setContacts }}>
        <header>
          <Header/>
          <Sidebar />
        </header>
      <section className='main-content'>
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
      </section>
      </ContactContext.Provider>
    </PostContext.Provider>
  )
}

export { App, PostContext, ContactContext}
