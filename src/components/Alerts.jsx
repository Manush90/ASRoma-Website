import React from "react";
import Alert from "react-bootstrap/Alert";

function ScrollingTextAlert() {
  return (
    <div className="alertContainer">
      <Alert variant="primary" className="alertMsg">
        <div className="scrolling-text">
          <span>Matchday ! Bayer Leverkusen - AS Roma</span>
        </div>
      </Alert>
    </div>
  );
}

export default ScrollingTextAlert;
