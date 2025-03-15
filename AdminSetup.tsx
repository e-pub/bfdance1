import { useState } from "react";

const AdminSetup = ({ onSetupComplete }) => {
    const [step, setStep] = useState(1);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [tempCode, setTempCode] = useState("");
    const [verificationCode, setVerificationCode] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleVerifyAdmin = async () => {
        const res = await fetch("/api/auth/verify-admin", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, phone, tempCode }),
        });

        const data = await res.json();
        data.success ? setStep(2) : alert("관리자 정보가 일치하지 않습니다.");
    };

    const handleVerifyCode = async () => {
        const res = await fetch("/api/auth/verify-code", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ phone, verificationCode }),
        });

        const data = await res.json();
        data.success ? setStep(3) : alert("인증번호가 올바르지 않습니다.");
    };

    const handleSetupAccount = async () => {
        const res = await fetch("/api/auth/setup-account", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ phone, username, password }),
        });

        const data = await res.json();
        data.success ? onSetupComplete() : alert("계정 설정 실패!");
    };

    return (
        <div className="admin-setup">
            {step === 1 && (
                <>
                    <h2>관리자 승인</h2>
                    <input type="text" placeholder="이름" value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="text" placeholder="연락처" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    <input type="text" placeholder="임시번호" value={tempCode} onChange={(e) => setTempCode(e.target.value)} />
                    <button onClick={handleVerifyAdmin}>확인</button>
                </>
            )}

            {step === 2 && (
                <>
                    <h2>인증번호 입력</h2>
                    <input type="text" placeholder="인증번호" value={verificationCode} onChange={(e) => setVerificationCode(e.target.value)} />
                    <button onClick={handleVerifyCode}>확인</button>
                </>
            )}

            {step === 3 && (
                <>
                    <h2>아이디 & 비밀번호 설정</h2>
                    <input type="text" placeholder="아이디" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input type="password" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button onClick={handleSetupAccount}>완료</button>
                </>
            )}
        </div>
    );
};

export default AdminSetup;
