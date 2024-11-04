import React from "react";

interface PasswordDisplayProps {
  password: string;
}

const PasswordDisplay: React.FC<PasswordDisplayProps> = ({ password }) => {
  return (
     <input
        type="text"
        value={password}
        readOnly
        style={{ width: "100%", height: "50px", fontSize: "1em" }}
        />
  );
};

export default PasswordDisplay;