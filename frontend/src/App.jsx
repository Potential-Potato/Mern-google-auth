import { Routes, Route, Navigate } from 'react-router-dom' 
import { useEffect, useState } from 'react' // Importing useEffect and useState hooks from React
import axios from 'axios' // Importing axios for HTTP requests
import Home from './pages/home/index' // Importing Home component
import Login from './pages/login/index' // Importing Login component
import Signup from './pages/signup/index' // Importing Signup component
import Post from './pages/post/index'

import './App.css' // Importing CSS file for styling

axios.defaults.baseURL = 'http://localhost:8080' // Setting the base URL for backend requests
axios.defaults.withCredentials = true // Allowing axios to send cookies with cross-origin requests

function App() {
  const [user, setUser] = useState(null) // Initializing user state with null

  const getUser = async () => { // Function to fetch user data
    try {
      const url = `/auth/login/success` // Endpoint to fetch user data
      const { data } = await axios.get(url, { withCredentials: true }) // Making GET request to fetch user data
      setUser(data.user._json) // Updating user state with fetched user data
    } catch (err) {
      console.log(err) // Logging error if fetching user data fails
    }
  }

    useEffect(() => { // useEffect hook to fetch user data when component mounts
        getUser()
    }, []) // Dependency array is empty, so it only runs once when component mounts

  return (
    <div>
      <Routes>
        <Route path='/' element={user? <Home user={user}/> : <Navigate to='/login'/>} />
        <Route path='/post' element={user? <Post/> : <Navigate to='/post'/>} />
        <Route path='/login' element={user? <Navigate to='/'/> : <Login/>} />
        <Route path='/signup' element={user? <Navigate to='/'/> : <Signup/>} />
      </Routes>
    </div>
  )
}

export default App
