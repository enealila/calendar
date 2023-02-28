import React, { useContext } from "react";

import "./style.scss";
import MyCalendar from "./MyCalendar";

export const Calendar = ({ data }) => {
  return (
    <section className="site-block">
      <div className="wrapper">
        <div>
          <h2 className="display-4 mb-3 text-center">
            <p>KALENDARI I CESHTJEVE</p>
          </h2>
        </div>
        <div className="accounts-row__wrap">
          <MyCalendar />
        </div>
      </div>
    </section>
  );
};

export default Calendar;
