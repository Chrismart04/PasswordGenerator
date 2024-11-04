import { useState } from 'react';

const usePasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [options, setOptions] = useState({
    length: 20,
    hasLower: true,
    hasUpper: true,
    hasNumber: true,
    hasSymbol: true,
  });

  const generatePassword = () => {
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let characters = "";
    if (options.hasLower) characters += lowerCase;
    if (options.hasUpper) characters += upperCase;
    if (options.hasNumber) characters += numbers;
    if (options.hasSymbol) characters += symbols;

    let generatedPassword = "";
    for (let i = 0; i < options.length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedPassword += characters[randomIndex];
    }

    setPassword(generatedPassword);
  };

  return {
    password,
    options,
    setOptions,
    generatePassword,
  };
};

export default usePasswordGenerator;
