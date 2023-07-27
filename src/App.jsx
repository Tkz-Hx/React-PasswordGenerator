import { useState } from "react";
import "./App.css";
import usePasswordGenerator from "./hook/usePasswordGenerator";
import PasswordStrengthIndicator from "./assets/Components/Strenght";
import Button from "./assets/Components/Button";
import Checkbox from "./assets/Components/Checkbox";

function App() {
  const { password, errorMessage, generatePasswordString } = usePasswordGenerator();
  const [length, setLength] = useState(0);
  const [checkboxData, setCheckboxData] = useState([
    { title: "Include Uppercase letters", state: false },
    { title: "Include Lowercase letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false },
  ]);

  const handleCheckboxChange = (i) => {
    const updatedCheckboxData = [...checkboxData];
    updatedCheckboxData[i].state = !updatedCheckboxData[i].state;
    setCheckboxData(updatedCheckboxData);
  };
  //======= COPY BUTTON ========//
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000); 
  };

  return (
    <div className="container">
      {password !== "" && (
        <div className="header">
          <div className="title">{password}</div>
          <Button
            text={copied ? "Copied" : "Copy"}
            customClass="copyBtn"
            onClick={handleCopy}
          />
        </div>
      )}
      {/* ===== CHARACTER LENGTH====== */}
      <div className="charlength">
        <span>
          <label>Character Length</label>
          <label>{length}</label>
        </span>
        <input
          type="range"
          min="4"
          max="20"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>

      {/* ==== CHECK-BOX ===== */}
      <div className="checkboxes">
        {checkboxData.map((checkbox, i) => {
            return (
              <Checkbox
                key={i} 
                title={checkbox.title}
                onChange={() => handleCheckboxChange(i)}
                state={checkbox.state}
              />
            );
          })}
      </div>

      {/* ===== STRENGTH ====== */}
      <PasswordStrengthIndicator password={password} />

      {/* ===== ERROR HANDLING ==== */}
      {errorMessage &&  <div className="erroMessage" style={{color:"red"}}>
        {errorMessage}
      </div>} 

      {/* ===== GENERATE BTN ====== */}
      <Button
        text="GENERATE PASSWORD"
        customClass="generateBtn"
        onClick={() => generatePasswordString(checkboxData, length)}
      />
    </div>
  );
}

export default App;
