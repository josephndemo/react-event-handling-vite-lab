// PasswordInput.jsx
import React, { useState } from "react";

function PasswordInput() {
  const [password, setPassword] = useState("");

  // Event handler for input change
  const handleChange = (e) => {
    setPassword(e.target.value);
    console.log("Entering password...");
  };

  return (
    <div>
      <input
        type="password"
        value={password}
        onChange={handleChange} // attach change event
        placeholder="Enter your password"
      />
    </div>
  );
}

export default PasswordInput;
