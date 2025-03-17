import { useState, useEffect } from "react";
import dayjs from "dayjs";
import "dayjs/locale/ko";

interface Event {
  date: string;
  media_url: string;
}

const CalendarBox = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [stories, setStories] = useState<{ [key: string]: string[] }>({});
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // ✅ Instagram API에서 스토리 가져오기
  useEffect(() => {
    const fetchInstagramStories = async () => {
      try {
        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=media_url,timestamp&access_token=YOUR_ACCESS_TOKEN`
        );
        const data = await response.json();

        const groupedStories: { [key: string]: string[] } = {};
        data.data.forEach((story: any) => {
          const date = dayjs(story.timestamp).format("YYYY-MM-DD");
          groupedStories[date] = [...(groupedStories[date] || []), story.media_url];
        });

        setStories(groupedStories);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchInstagramStories();
  }, []);

  const getDaysInMonth = () =>
    Array.from({ length: currentDate.daysInMonth() }, (_, i) =>
      currentDate.startOf("month").add(i, "day")
    );

  return (
    <div className="calendar-box">
      <div className="header">
        <button onClick={() => setCurrentDate(currentDate.subtract(1, "month"))}>◀</button>
        <h2>{currentDate.format("YYYY년 MM월")}</h2>
        <button onClick={() => setCurrentDate(currentDate.add(1, "month"))}>▶</button>
      </div>

      {/* ✅ Instagram API 로딩 상태 반영 */}
      {isLoading ? (
        <p>Loading Instagram Stories...</p>
      ) : error ? (
        <p>Error fetching stories: {error}</p>
      ) : (
        <div className="grid">
          {getDaysInMonth().map((day) => {
            const formattedDate = day.format("YYYY-MM-DD");
            return (
              <div
                key={formattedDate}
                className={`day ${stories[formattedDate] ? "has-story" : ""}`}
                onClick={() => setSelectedDate(formattedDate)}
              >
                {day.format("D")}
                {stories[formattedDate] && <span className="story-icon">📷</span>}
              </div>
            );
          })}
        </div>
      )}

      {/* ✅ 스토리 팝업 */}
      {selectedDate && stories[selectedDate] && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>{selectedDate}의 스토리</h2>
            <button className="close-btn" onClick={() => setSelectedDate(null)}>✖</button>
            <div className="video-list">
              {stories[selectedDate].map((video, index) => (
                <video key={index} controls>
                  <source src={video} type="video/mp4" />
                </video>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarBox;
