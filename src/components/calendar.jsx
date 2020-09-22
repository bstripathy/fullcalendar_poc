import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

export default function SimpleFullCalender(props) {
  // const classes = useStyles();
  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      weekends={false}
      events={[
        { title: "event 1", date: "2020-09-09" },
        { title: "event 2", date: "2020-09-08" }
      ]}
    />
  );
}
