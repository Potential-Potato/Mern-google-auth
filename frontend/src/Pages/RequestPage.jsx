import React, { useState } from "react";
import MainLayout from "../Layout/MainLayout";
import "./RequestPage.css";

const Popup = ({
  isOpen,
  onClose,
  title,
  content,
  button,
  onButtonClick,
  secondButtonLabel,
  onSecondButtonClick,
  thirdButtonLabel,
  onThirdButtonClick,
}) => {
  if (!isOpen) return null;

  return (
    <div className="overlay" onClick={onClose}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-square-rounded-x close-icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="3"
          stroke="#9e9e9e"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          onClick={onClose}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M10 10l4 4m0 -4l-4 4" />
          <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
        </svg>
        <h2>{title}</h2>
        <p>{content}</p>
        <p className="note">
          Please review the information you've entered before submitting. Ensure
          all fields are correctly filled out.
        </p>
        {secondButtonLabel && (
          <button className="second-button" onClick={onSecondButtonClick}>
            {secondButtonLabel}
          </button>
        )}
        {button && (
          <button className="primary-button" onClick={onButtonClick}>
            {button}
          </button>
        )}

        <div className="popup-button">
          {thirdButtonLabel && (
            <button className="third-button" onClick={onThirdButtonClick}>
              {thirdButtonLabel}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

function RequestPage() {
  const [popupDetails, setPopupDetails] = useState({
    title: "",
    content: "",
    button: "",
  });
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleDownloadButtonClick = () => {
    setIsPopupOpen(true);
    setPopupDetails({
      title: "Absence Leave Form",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Make sure to input correct information when filling out the forms.",
      secondButtonLabel: "Download File",
      onSecondButtonClick: handleClosePopup,
      onButtonClick: handleClosePopup,
    });
  };

  const handleUploadButtonClick = () => {
    setIsPopupOpen(true);
    setPopupDetails({
      title: "Form Submission",
      content:
        "Please review the information you've entered before submitting. Ensure all fields are correctly filled out.",
      secondButtonLabel: "Upload File",
      onSecondButtonClick: handleClosePopup,
      thirdButtonLabel: "Submit",
      onThirdButtonClick: handleSubmit,
    });
  };

  const handleSubmit = () => {};

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <MainLayout>
      <div className="request">
        Downlaod the form. Fill out. Submit!
        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-input" />
          <button className="search-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-search"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke-width="3"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
              <path d="M21 21l-6 -6" />
            </svg>
          </button>
        </div>
        <div className="form-container">
          <div className="form1">
            <p className="form-title"> Absence Leave Form</p>
            <h3>
              Absence leave is for those hsdgshgdahsdghsg. Donload the
              bdhsahdgsahd and submit jdshdsghdshhdfh Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </h3>

            <div className="form-button">
              <button className="download" onClick={handleDownloadButtonClick}>
                Download
              </button>
              <button className="submit" onClick={handleUploadButtonClick}>
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="form-container">
          <div className="form1">
            <p className="form-title"> Absence Leave Form</p>
            <h3>
              Absence leave is for those hsdgshgdahsdghsg. Donload the
              bdhsahdgsahd and submit jdshdsghdshhdfh Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </h3>

            <div className="form-button">
              <button className="download" onClick={handleDownloadButtonClick}>
                Download
              </button>
              <button className="submit" onClick={handleUploadButtonClick}>
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="form-container">
          <div className="form1">
            <p className="form-title"> Absence Leave Form</p>
            <h3>
              Absence leave is for those hsdgshgdahsdghsg. Donload the
              bdhsahdgsahd and submit jdshdsghdshhdfh Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </h3>

            <div className="form-button">
              <button className="download" onClick={handleDownloadButtonClick}>
                Download
              </button>
              <button className="submit" onClick={handleUploadButtonClick}>
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="form-container">
          <div className="form1">
            <p className="form-title"> Absence Leave Form</p>
            <h3>
              Absence leave is for those hsdgshgdahsdghsg. Donload the
              bdhsahdgsahd and submit jdshdsghdshhdfh Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </h3>

            <div className="form-button">
              <button className="download" onClick={handleDownloadButtonClick}>
                Download
              </button>
              <button className="submit" onClick={handleUploadButtonClick}>
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="form-container">
          <div className="form1">
            <p className="form-title"> Absence Leave Form</p>
            <h3>
              Absence leave is for those hsdgshgdahsdghsg. Donload the
              bdhsahdgsahd and submit jdshdsghdshhdfh Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </h3>

            <div className="form-button">
              <button className="download" onClick={handleDownloadButtonClick}>
                Download
              </button>
              <button className="submit" onClick={handleUploadButtonClick}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      <Popup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        {...popupDetails}
      />
    </MainLayout>
  );
}

export default RequestPage;
