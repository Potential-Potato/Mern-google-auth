import React from "react";
import ProfileLayout from "../Layout/ProfileLayout";
import "./AdminProfile.css";

function AdminProfile() {
  return (
    <ProfileLayout>
      <div className="adminProfile">
        <span className="healthRecord"> Health Record </span>
        <div className="container_one">
          <div className="c2_button">
            <button class="jhs">Junior High School</button>
            <button class="shs">Senior High School</button>
            <button class="college">College</button>
          </div>
          <div className="c1_button">
            <button class="cAccount">Create Account</button>
            <button class="inventory">View Inventory</button>
          </div>
        </div>
        <span className="chartStat"> Chart Statistics </span>
        <div className="container_three">
          <div className="left">
            <div className="left1"></div>
            <div className="left2"></div>
            <div className="left3"></div>
          </div>
          <div className="middle"></div>
          <div className="right">
            <span className="insight"> Insights </span>
          </div>
        </div>
        <span className="diagram"> Diagram </span>
        <div className="container_four"></div>
      </div>
    </ProfileLayout>
  );
}

export default AdminProfile;
