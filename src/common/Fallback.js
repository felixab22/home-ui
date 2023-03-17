import React from "react";
import "@styles/Fallback.css"

const Fallback = () => {
  return (
    <div className="container-animation">
      <div className="lds-roller">
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
      </div>
    </div>
  );
}

export default Fallback;