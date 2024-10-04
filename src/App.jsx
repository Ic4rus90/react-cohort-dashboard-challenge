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
const ContactContext = createContext(null) 
const UserContext = createContext(null)

function App() {
  const [posts, setPosts] = useState([])
  const [contacts, setContacts] = useState([])
  const [userDetails, setUserDetails] = useState(
    {
      "firstName": "Ayana",
      "lastName": "Upton",
      "username": "AyanaU",
      "email": "Lenny_Hammes@gmail.com",
      "street": "Street 1",
      "suite": "No",
      "favouriteColour": "#19c257", 
      "city": "Unknown",
      "zipCode": "1234",
      "phone": "911",
      "website": "none",
      "companyName": "Evil inc",
      "companyCatchPhrase": "We eat you",
      "businessStatement": "We enjoy css"
    }
  )

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
        <UserContext.Provider value={{ userDetails, setUserDetails}}>
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
        </UserContext.Provider>
      </ContactContext.Provider>
    </PostContext.Provider>
  )
}

export { App, PostContext, ContactContext, UserContext}
