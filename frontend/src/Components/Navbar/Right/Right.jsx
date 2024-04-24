import React from "react";
import "./Right.css";
import bakuna from "../../../assets/bakuna.png";

const Right = () => {
  return (
    <div className="announcement">
      <span className="month">Monthly Announcement</span>
      <div className="right-container">
        <div className="prio">
          <icon className="mic">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-speakerphone"
              width="52"
              height="52"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 8a3 3 0 0 1 0 6" />
              <path d="M10 8v11a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1v-5" />
              <path d="M12 8h0l4.524 -3.77a.9 .9 0 0 1 1.476 .692v12.156a.9 .9 0 0 1 -1.476 .692l-4.524 -3.77h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h8" />
            </svg>
          </icon>
          <span className="ann-title"> XRAY XRAY XRAY </span>
          <icon className="arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-arrow-badge-right-filled"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#003163"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M7 6l-.112 .006a1 1 0 0 0 -.669 1.619l3.501 4.375l-3.5 4.375a1 1 0 0 0 .78 1.625h6a1 1 0 0 0 .78 -.375l4 -5a1 1 0 0 0 0 -1.25l-4 -5a1 1 0 0 0 -.78 -.375h-6z"
                stroke-width="0"
                fill="currentColor"
              />
            </svg>
          </icon>
          <p className="desc"> College freshmen and transferees </p>
        </div>

        <div>
          <img src={bakuna} alt="" className="bakuna" />
        </div>

        <div className="poster-desc">
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Right;
