import React, { useEffect, useState } from "react";
import "./evo-calendar.min.css";
import "./evo-calendar.min.js";
import $ from "jquery";

export default function MyCalendar() {
  const [cases, setCases] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  async function fetchCases() {
    const baseUrl = "http://3.74.232.236:3000/cases?_limit=100";
    const params = [];
    params.push("_sort=registeredDate:DESC");
    const url = `${baseUrl}&${params.join("&")}`;
    const fullResponse = await fetch(url);
    const responseJson = await fullResponse.json();

    const formattedCases = responseJson.map((caseData) => {
      const date = new Date(caseData.registeredDate);
      const formattedDate = date.toLocaleDateString("en-US");
      return {
        id: caseData.caseNumber,
        name:
          "<b>Nr:</b>" +
          caseData.caseNumber +
          " </br><b>" +
          caseData.caseTitle +
          "</b>",
        description:
          "Data ora seanca: <b>01.02.2023 09:10:00</b> </br> Shpallur më: <b>18.01.2023</b> </br> Relatori: <b>Margarita Buhali</b>",
        date: formattedDate,
        url: "https://www.gjykataelarte.gov.al/gjl_ceshtje_detaje.php?caseId_sel=2015-00026&ln=Lng1&uni=20230226212134185200215232525412",
        type: "holiday",
      };
    });

    setCases(formattedCases);
    setIsLoaded(true);
  }

  useEffect(() => {
    fetchCases();
  }, []);

  useEffect(() => {
    const events = [
      {
        id: "124",
        name: "Event 1 Event 1 Event 1 Event 1 Andi SHkembi eshte nje djale me nr id / 5-66- 64848- 83u",
        date: "2023-02-26",
        type: "holiday",
      },
      {
        id: "1",
        name: "Event 1",
        date: "2023-02-24",
        type: "holiday",
      },
    ];

    if (isLoaded) {
      $("#myCalendar").evoCalendar({
        calendarEvents: cases,
      });
    }
  }, [isLoaded, cases]);

  return <div id="myCalendar" />;
}
