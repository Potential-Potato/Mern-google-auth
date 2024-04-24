import { Routes, Route, Navigate } from 'react-router-dom' 
import { useEffect, useState } from 'react' // Importing useEffect and useState hooks from React
import axios from 'axios' // Importing axios for HTTP requests
import "./index.css"

import Login from "./LoginPage/Login.jsx";
import Home from "./Pages/Home.jsx";
import LocationPage from "./Pages/LocationPage.jsx";
import AboutPage from "./Pages/AboutPage.jsx";
import StudentProfile from "./StudentPages/StudentProfile.jsx";
import StudentIndex from "./StudentPages/StudentIndex.jsx";
import AdminProfile from "./AdminPages/AdminProfile.jsx";
import ServicesPage from "./Pages/ServicesPage.jsx";
import Schedule from "./Pages/Schedule.jsx";
import TelemedPage from "./Pages/TelemedPage.jsx";
import EventPage from "./Pages/EventPage.jsx";
import RequestPage from "./Pages/RequestPage.jsx";
import HealthPage from "./Pages/HealthPage.jsx";

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
        <Route path='/login' element={user? <Navigate to='/'/> : <Login/>} />
        <Route path='/location' element={user? <LocationPage/>: <Navigate to='/login'></Navigate>} />
        <Route path='/aboutus' element={user? <AboutPage/>: <Navigate to='/login'/>} />
        <Route path='/student_profile' element={user? <StudentProfile/> : <Navigate to='/login'/>} />
        <Route path='/student_index' element={user? <StudentIndex/> : <Navigate to='/login'/>} />
        <Route path='/services' element={user? <ServicesPage/> : <Navigate to='/login'/>} />
        <Route path='/schedule' element={user? <Schedule/> : <Navigate to='/login'/>} />
        <Route path='/telemed' element={user? <TelemedPage/> : <Navigate to='/login'/>} />
        <Route path='/requestForms' element={user? <RequestPage/> : <Navigate to='/login'/>} />
        <Route path='/events' element={user? <EventPage/> : <Navigate to='/login'/>} />
        <Route path='/healthTips' element={user? <HealthPage/> : <Navigate to='/login'/>} />

        <Route path='/admin_profile' element={user? <AdminProfile/> : <Navigate to='/login'/>} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </div>
  )
}

export default App
