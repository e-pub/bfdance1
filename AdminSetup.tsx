import React, { useState } from "react";

const AdminSetup = ({ onSetupComplete }) => {
  const [verificationCode, setVerificationCode] = useState("");

  return (
    <div>
      <h2>인증번호 입력</h2>
      <input 
        type="text" 
        placeholder="인증번호" 
        value={verificationCode} 
        onChange={(e) => setVerificationCode(e.target.value)} 
      />
      <button onClick={() => onSetupComplete(verificationCode)}>확인</button>
    </div>
  );
};

export default AdminSetup;
