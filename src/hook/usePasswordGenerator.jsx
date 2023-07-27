import React from "react";
import { useState } from "react";


const usePasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const generatePasswordString = (checkboxData, length) => {
    let charset = "",
      generatedPassword = ""; 

    const selectedOption = checkboxData.filter((checkbox) => checkbox.state);

    selectedOption.forEach((option) => {
      switch (option.title) {
        case "Include Uppercase letters":
          charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;
        case "Include Lowercase letters": 
          charset += "abcdefghijklmnopqrstuvwxyz";
          break;
        case "Include Numbers":
          charset += "0123456789";
          break;
        case "Include Symbols":
          charset += "!@#$%^&*()";
          break;
        default:
          break;
      }
    });

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex]; 
    }
    
    if (selectedOption.length === 0) {
      setErrorMessage("Please select at least one option"); 
      setPassword('');
      return;
    }


    setPassword(generatedPassword); 
    setErrorMessage('');
  };

  return { password, errorMessage, generatePasswordString }; 
};

export default usePasswordGenerator;
