// src/CalendarStyled.jsx
import React, { useState, useMemo } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // must import first
import "./calendar-bootstrap.css"; // our custom styles (below)

export default function CalendarBootstrap() {
  const [selectedDate, setSelectedDate] = useState(null);

  // sample "not available" dates (replace with API)
  const notAvailable = useMemo(
    () => [
      new Date(2025, 10, 2),
      new Date(2025, 10, 9),
      new Date(2025, 10, 16),
      new Date(2025, 10, 23),
      new Date(2025, 10, 30)
    ],
    []
  );

  const isNotAvailable = (date) =>
    notAvailable.some(
      (d) =>
        d.getFullYear() === date.getFullYear() &&
        d.getMonth() === date.getMonth() &&
        d.getDate() === date.getDate()
    );

  // dayClassName: give classes for styling
  const dayClassName = (date) => {
    // sunday -> mark as not available column
    if (date.getDay() === 0) return "cs-sunday cs-not-available";
    if (isNotAvailable(date)) return "cs-not-available";
    return "";
  };

  // prevent selecting disabled days
  const filterDate = (date) => !isNotAvailable(date) && date.getDay() !== 0;

  return (
    <div className="cs-root">
      <div className="cs-header">
        <h3><span className="cs-step">1</span> SELECT YOUR DATE</h3>
      </div>

      <div className="cs-calendar">
        <DatePicker
          inline
          selected={selectedDate}
          onChange={(d) => setSelectedDate(d)}
          filterDate={filterDate}
          dayClassName={dayClassName}
          calendarStartDay={1} // week starts Monday (Mo)
        />
      </div>

      <input
        type="hidden"
        id="my_hidden_input"
        value={selectedDate ? selectedDate.toISOString().slice(0, 10) : ""}
        readOnly
      />

      <ul className="cs-legend">
        <li><span className="cs-legend-available" /> Available</li>
        <li><span className="cs-legend-not" /> Not available</li>
      </ul>
    </div>
  );
}
