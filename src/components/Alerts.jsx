import React from "react";
import Alert from "react-bootstrap/Alert";

function ScrollingTextAlert() {
  return (
    <div className="alertContainer">
      <Alert variant="primary" className="alertMsg">
        <div className="scrolling-text">
          <span className="jersey-15-regular">
            Serie A TIM - Atalanta 2 - 1 AS Roma De Keatelare x2, Pellegrini rig.
          </span>
        </div>
      </Alert>
    </div>
  );
}

export default ScrollingTextAlert;
