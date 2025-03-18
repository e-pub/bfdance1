import { useEffect, useState } from "react";

const weekDays = ["시간", "월", "화", "수", "목", "금", "토"];

// ✅ 올바른 가로 방향 배열
const scheduleData = [
  ["11:00 ~ 12:00", "취미/기초반", "취미/기초반", "취미/기초반", "취미/기초반", "취미/기초반", "케이팝", "케이팝"],
  ["02:30 ~ 03:50", "키즈 기초반", "케이팝 키즈반", "케이팝 키즈반", "키즈 기초반", "키즈 기초반", "케이팝", "케이팝"],
  ["07:20 ~ 08:40", "케이팝", "취미/기초반", "케이팝", "취미/기초반", "케이팝", "케이팝", "힙합 기초반"],
  ["08:40 ~ 10:00", "코레오(안무반)", "케이팝", "코레오(안무반)", "케이팝", "케이팝", "힙합 기초반", ""]
];

// ✅ 수업별 영상 매핑
const videoMap: Record<string, string> = {
  "취미/기초반": "video1_id",
  "케이팝": "video2_id",
  "키즈 기초반": "video3_id",
  "케이팝 키즈반": "video4_id",
  "코레오(안무반)": "video5_id",
  "힙합 기초반": "video6_id"
};

const Schedule = () => {
  const [showSchedule, setShowSchedule] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [videoId, setVideoId] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scheduleElement = document.getElementById("schedule");
      const scheduleTop = scheduleElement?.getBoundingClientRect()?.top ?? Infinity;
      scheduleTop < window.innerHeight * 0.75 && setShowSchedule(true);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openModal = (className: string) => {
    if (videoMap[className]) {
      setVideoId(videoMap[className]);
      setModalOpen(true);
    }
  };

  return (
    <div className="sec-schedule">
      <div className="custom-container">
        <h2 className="tit">SCHEDULE</h2>
        <div id="schedule" className={`schedule-container ${showSchedule ? "opacity-100" : ""}`}>
          {/* ✅ 요일 헤더 (최상단) */}
          <div className="schedule-row">
            {weekDays.map((day, index) => (
              <div key={index} className="schedule-box header-box">{day}</div>
            ))}
          </div>

          {/* ✅ 가로(횡) 방향으로 정렬 */}
          {scheduleData.map((row, rowIndex) => (
            <div key={rowIndex} className="schedule-row">
              {row.map((className, colIndex) => (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  className={`schedule-box ${colIndex === 0 ? "time-column" : ""} ${showSchedule ? "appear" : ""}`}
                  style={{ transitionDelay: `${(rowIndex * 7 + colIndex) * 100}ms` }}
                  onClick={() => colIndex !== 0 && openModal(className)}
                >
                  {className}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* ✅ 유튜브 팝업 */}
        {modalOpen && (
          <div className="modal active">
            <button className="close-btn" onClick={() => setModalOpen(false)}>✕</button>
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="YouTube Video"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default Schedule;
