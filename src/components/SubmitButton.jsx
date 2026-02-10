// SubmitButton.jsx
import React from "react";

function SubmitButton() {
  // Event handler for mouse entering button
  const handleEnter = () => {
    console.log("Mouse Entering");
  };

  // Event handler for mouse leaving button
  const handleLeave = () => {
    console.log("Mouse Exiting");
  };

  return (
    <div>
      <button
        onMouseEnter={handleEnter} // attach mouse enter event
        onMouseLeave={handleLeave} // attach mouse leave event
      >
        Submit Password
      </button>
    </div>
  );
}

export default SubmitButton;
