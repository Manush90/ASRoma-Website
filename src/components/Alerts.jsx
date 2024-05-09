import React from "react";
import Alert from "react-bootstrap/Alert";

function ScrollingTextAlert() {
  return (
    <div className="alertContainer">
      <Alert variant="primary" className="alertMsg">
        <div className="scrolling-text">
          <span className="jersey-15-regular">
            - Matchday - Semi-Final Uefa Europa League - Bayer Leverkusen - AS Roma
          </span>
        </div>
      </Alert>
    </div>
  );
}

export default ScrollingTextAlert;
