import PasswordDisplay from "./PasswordDisplay";
import usePasswordGenerator from "../hooks/usePasswordGenerator";

const PasswordGenerator = () => {
  const { password, options, setOptions, generatePassword } =
    usePasswordGenerator();

  return (
    <div>
      <h1>Password Generator</h1>
      <div>
        <PasswordDisplay password={password} />
      </div>
      <div>
       
      </div>
      <div>
        <button onClick={generatePassword}>Generate Password</button>
      </div>
    </div>
  );
};

export default PasswordGenerator;