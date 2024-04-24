import React from "react";
import MainLayout from "../Layout/MainLayout";
import "./ServicesPage.css";
import checkup from "../assets/checkup.jpg";
import consult from "../assets/consult.jpg";
import dental from "../assets/dental.jpg";
import kid from "../assets/kid.jpg";
import seminar from "../assets/seminar.jpg";
import sprain from "../assets/sprain.jpeg";
import sray from "../assets/sray.jpg";
import telemed from "../assets/telemed.jpg";

function ServicesPage() {
  return (
    <MainLayout>
      <div className="services">
        <main className="slider">
          <div className="slider-track">
            <img src={checkup} alt="" className="slider-image" />
            <img src={consult} alt="" className="slider-image" />
            <img src={dental} alt="" className="slider-image" />
            <img src={kid} alt="" className="slider-image" />
            <img src={seminar} alt="" className="slider-image" />
            <img src={seminar} alt="" className="slider-image" />
            <img src={sprain} alt="" className="slider-image" />
            <img src={sray} alt="" className="slider-image" />
            <img src={telemed} alt="" className="slider-image" />
          </div>
        </main>
      </div>
    </MainLayout>
  );
}

export default ServicesPage;
