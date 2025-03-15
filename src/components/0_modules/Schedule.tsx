import { useEffect, useState } from "react";

const Schedule = () => {
  const [showSchedule, setShowSchedule] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [videoId, setVideoId] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const schedule = document.getElementById("schedule");
      if (schedule && schedule.getBoundingClientRect().top < window.innerHeight * 0.75) {
        setShowSchedule(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openModal = (id: string) => {
    setVideoId(id);
    setModalOpen(true);
  };

  return (
    <div className="sec-schedule">
      <div className="custom-container">
      <h2 className="tit">SCHEDULE</h2>
      <div id="schedule" className={`schedule-container ${showSchedule ? "opacity-100" : ""}`}>
        {[...Array(5)].map((_, row) =>
          [...Array(7)].map((_, col) => (
            <div
              key={`${row}-${col}`}
              className={`schedule-box ${col === 0 ? "first-column" : ""} ${showSchedule ? "appear" : ""}`}
              style={{ transitionDelay: `${(row * 7 + col) * 100}ms` }}
              onClick={() => col !== 0 && openModal("1cE7Cl_eS_Q")}
            >
              {col !== 0 ? "취미/기초반\nHobby/Basic" : "11:00 ~ 12:00 AM"}
            </div>
          ))
        )}
      </div>

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
        </div>{/* custom-container */}
    </div>
  );
};

export default Schedule;
