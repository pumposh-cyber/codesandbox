//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";
import styles from "../public/styles.css";

let greetingText = "";
let date = new Date();
var hours = date.getHours();

let headingStyles = { color: "red" };

if (hours < 12) {
  // if between midnight and 12PM.
  //Display greeting Good morning
  greetingText = "Good morning";
} else if (hours >= 12 && hours < 18) {
  // "Good Afternoon" if between 12PM and 6PM.
  greetingText = "Good Afternoon";
  headingStyles.color = "green";
} else if (hours >= 12 && hours < 18) {
  //or "Good evening" if between 6PM and midnight.
  greetingText = "Good evening";
  headingStyles.color = "blue";
}

ReactDOM.render(
  <div>
    <h1 className={styles.heading} style={headingStyles}>
      Hello World {greetingText}!!
    </h1>
  </div>,

  document.getElementById("root")
);
//End of render function
