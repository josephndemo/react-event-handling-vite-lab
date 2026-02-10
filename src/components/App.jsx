// App.jsx
import React from "react";
import PasswordInput from "./PasswordInput";
import SubmitButton from "./SubmitButton";
import "../App.css";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Password Security Lab</h1>
      <PasswordInput />
      <SubmitButton />
    </div>
  );
}

export default App;
