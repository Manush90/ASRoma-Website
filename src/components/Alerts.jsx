import React from "react";
import Alert from "react-bootstrap/Alert";

function ScrollingTextAlert() {
  return (
    <div className="alertContainer stopalerts">
      <Alert variant="primary" className="alertMsg">
        <div className="scrolling-text">
          <span className="jersey-15-regular">
            Serie A TIM - AS Roma 1 - 0 Genoa (Lukaku 79', Paredes esp. 72)
          </span>
        </div>
      </Alert>
    </div>
  );
}

export default ScrollingTextAlert;
