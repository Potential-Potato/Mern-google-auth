import React, { useState } from "react";
import MainLayout from "../Layout/MainLayout";
import DatePicker from "react-datepicker";
import "./SchedulePage.css";
import classNames from "classnames";

function Schedule() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <MainLayout>
      <div className="schedule-page">
        <div className="calendar-container">
          <h1 className="calendar-title">Editable Calendar</h1>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            inline
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            className={classNames("react-datepicker", "calendar")}
          />
        </div>
      </div>
    </MainLayout>
  );
}

export default React.memo(Schedule);
