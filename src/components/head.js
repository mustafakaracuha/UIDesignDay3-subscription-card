import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperclip,
  faTv,
  faCalendarDay,
} from "@fortawesome/free-solid-svg-icons";
import Carousel from './carousel';

export default function head() {
  return (
    <>
    <div className="head">
      <h1>Subscriptions</h1>
      <div>
        <p>
          Support these creators by purchasing their montly subscriptions, and
          get access to premium content:
        </p>
      </div>
      <div className="tag">
        <button type="">
          <FontAwesomeIcon
            style={{ marginRight: "10px", marginLeft: "5px" }}
            icon={faPaperclip}
          />
          Source files
        </button>
        <button type="">
          <FontAwesomeIcon
            style={{ marginRight: "10px", marginLeft: "5px" }}
            icon={faTv}
          />
          Live streams
        </button>
        <button type="">
          <FontAwesomeIcon
            style={{ marginRight: "10px", marginLeft: "5px" }}
            icon={faCalendarDay}
          />
          Meetup
        </button>
      </div>
    </div>
      <Carousel/>
    </>
    
  );
}
