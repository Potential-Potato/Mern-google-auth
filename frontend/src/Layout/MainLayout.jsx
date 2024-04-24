import React from "react";
import { useState, useEffect, cloneElement } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Navbar/Sidebar/Sidebar";
import Right from "../Components/Navbar/Right/Right";

function MainLayout({ children }) {
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
      <Navbar user={user}/>
      <Sidebar></Sidebar>
      <Right />
      <div> {children}</div>
    </div>
  );
}

export default MainLayout;
