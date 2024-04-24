import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Navbar/Sidebar/Sidebar";

function ProfileLayout({ children }) {
  return (
    <div>
      <Navbar> </Navbar>
      <Sidebar></Sidebar>
      <div> {children}</div>
    </div>
  );
}

export default ProfileLayout;
