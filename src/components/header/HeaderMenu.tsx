import { useState, useEffect, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import logo1 from "/assets/images/logo-1.png";

const HeaderMenu = () => {
    const [isAdmin, setIsAdmin] = useState(() => localStorage.getItem("isAdmin") === "true");
    const [showLogin, setShowLogin] = useState(false);
    const [step, setStep] = useState(1);
    const [userInfo, setUserInfo] = useState({ name: "", phone: "", tempCode: "" });
    const [otp, setOtp] = useState("");
    const [credentials, setCredentials] = useState({ username: "", password: "" });

    useEffect(() => setStep(isAdmin ? 4 : 1), [isAdmin]);

    // 이벤트 타입 명시적으로 지정 (React.ChangeEvent<HTMLInputElement>)
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    };

    const verifyInitialAdmin = async () => {
        userInfo.name && userInfo.phone && userInfo.tempCode
            ? (await fetch("/api/auth/verify-admin", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(userInfo),
              }).then((res) => res.json()).then((data) => data.success
                  ? setStep(2)
                  : alert("정보가 일치하지 않습니다.")
              ))
            : alert("모든 정보를 입력하세요.");
    };

    const verifyOtp = async () => {
        otp
            ? (await fetch("/api/auth/verify-otp", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ phone: userInfo.phone, otp }),
              }).then((res) => res.json()).then((data) => data.success
                  ? setStep(3)
                  : alert("OTP가 일치하지 않습니다.")
              ))
            : alert("인증번호를 입력하세요.");
    };

    const setAdminCredentials = async () => {
        credentials.username && credentials.password
            ? (await fetch("/api/auth/set-admin", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(credentials),
              }).then((res) => res.json()).then((data) => data.success
                  ? (setStep(4), setShowLogin(false))
                  : alert("설정 실패. 다시 시도하세요.")
              ))
            : alert("아이디와 비밀번호를 입력하세요.");
    };

    const loginAdmin = async () => {
        credentials.username && credentials.password
            ? (await fetch("/api/auth/login", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(credentials),
              }).then((res) => res.json()).then((data) => data.success
                  ? (setIsAdmin(true), localStorage.setItem("isAdmin", "true"), setShowLogin(false))
                  : alert("로그인 실패! 아이디 또는 비밀번호를 확인하세요.")
              ))
            : alert("아이디와 비밀번호를 입력하세요.");
    };

    const logoutAdmin = () => (setIsAdmin(false), localStorage.removeItem("isAdmin"));
    const closePopup = () => setShowLogin(false);

    return (
        <>
            <header className="header-menu-wrap">
                <div className="custom-container">
                    <div className="custom-row">
                        <Link to="/" className="logo">
                            <img src={logo1} alt="logo" />
                        </Link>

                        <nav className="navbar">
                            <ul className="menu">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/projects">Projects <span>(7)</span></Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </nav>

                        <div className="header-right-info">
                            <a className="with-border" href="tel:+1234567890">(+84) 0123456789</a>
                            <a href="mailto:example@gmail.com"><i className="iconoir-mail-out" /></a>

                            <div className={`admin-switch ${isAdmin ? "admin-active" : ""}`} onClick={() => isAdmin ? logoutAdmin() : setShowLogin(true)}>
                                <div className="switch-thumb" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {showLogin && (
                <div className="modal-sm">
                    <button className="btn-close" onClick={closePopup}>✕</button>
                    {step === 1 && (
                        <>
                            <h2 className="tit">관리자 승인</h2>
                            <input type="text" name="name" placeholder="이름" onChange={handleInputChange} className="input-reg" />
                            <input type="text" name="phone" placeholder="전화번호" onChange={handleInputChange} className="input-reg" />
                            <input type="text" name="tempCode" placeholder="임시번호" onChange={handleInputChange} className="input-reg" />
                            <p className="txt-info">이름, 전화번호, 초기 임시번호를 입력하세요.</p>
                            <button onClick={verifyInitialAdmin} className="btn-confirm">승인 요청</button>
                        </>
                    )}

                    {step === 2 && (
                        <>
                            <h2 className="tit">OTP 입력</h2>
                            <p className="txt-info">휴대폰으로 받은 인증번호를 입력하세요.</p>
                            <input type="text" placeholder="인증번호" value={otp} onChange={(e) => setOtp(e.target.value)} />
                            <button onClick={verifyOtp} className="btn-confirm">확인</button>
                        </>
                    )}

                    {step === 3 && (
                        <>
                            <h2 className="tit">관리자 계정 설정</h2>
                            <input type="text" placeholder="아이디" onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} />
                            <input type="password" placeholder="비밀번호" onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />
                            <p className="txt-info">아이디와 비밀번호를 설정하세요.</p>
                            <button onClick={setAdminCredentials} className="btn-confirm">설정 완료</button>
                        </>
                    )}

                    {step === 4 && (
                        <>
                            <h2 className="tit">관리자 로그인</h2>
                            <input type="text" placeholder="아이디" onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} />
                            <input type="password" placeholder="비밀번호" onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />
                            <p className="txt-info">설정한 계정으로 로그인하세요.</p>
                            <button onClick={loginAdmin} className="btn-confirm">로그인</button>
                        </>
                    )}
                </div>
            )}
        </>
    );
};

export default HeaderMenu;
