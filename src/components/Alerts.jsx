import React, { useState, useEffect } from "react";
import Alert from "react-bootstrap/Alert";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../firebase";

function ScrollingTextAlert() {
  const [alertMsg, setAlertMsg] = useState("");

  useEffect(() => {
    const fetchAlertMsg = async () => {
      const docRef = doc(firestore, "Alert", "AlertMsg");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setAlertMsg(docSnap.data().messaggioAlert);
      } else {
        console.error("No such document!");
      }
    };

    fetchAlertMsg();
  }, []);

  return (
    <div className="alertContainer stopalerts">
      <Alert variant="primary" className="alertMsg">
        <div className="scrolling-text">
          <span className="jersey-15-regular">{alertMsg}</span>
        </div>
      </Alert>
    </div>
  );
}

export default ScrollingTextAlert;
