import { useState, useEffect, useCallback } from "react";

type EventItem = {
  title: string;
  link: string;
};

type EventsData = Record<string, EventItem[]>; // 날짜별 여러 개의 이벤트 저장 가능

const CalendarDiary = ({ events = {} }: { events: EventsData }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [days, setDays] = useState<{ date: string; events: EventItem[] }[]>([]);

  useEffect(() => {
    generateCalendar();
  }, [currentDate, events]);

  const generateCalendar = () => {
    const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const firstDay = startOfMonth.getDay();

    const daysArray: { date: string; events: EventItem[] }[] = [];

    for (let i = 0; i < firstDay; i++) {
      daysArray.push({ date: "", events: [] });
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dateString = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)
        .toString()
        .padStart(2, "0")}-${day.toString().padStart(2, "0")}`;

      daysArray.push({
        date: dateString,
        events: events[dateString] || [],
      });
    }

    setDays(daysArray);
  };

  const handleMonthChange = useCallback(
    (offset: number) => setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + offset, 1)),
    []
  );

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={() => handleMonthChange(-1)}>◀</button>
        <h2>{currentDate.toLocaleString("ko-KR", { year: "numeric", month: "long" })}</h2>
        <button onClick={() => handleMonthChange(1)}>▶</button>
      </div>
      <div className="calendar-grid">
        {["일", "월", "화", "수", "목", "금", "토"].map((day) => (
          <div key={day} className="day-header">{day}</div>
        ))}
        {days.map((day, index) => (
          <div key={index} className={`day ${day.events.length ? "has-event" : ""}`}>
            <span className="day-number">{day.date ? day.date.split("-")[2] : ""}</span>
            {day.events.map((event, i) => (
              <a key={i} href={event.link} target="_blank" rel="noopener noreferrer" className="event-link">
                {event.title || "📌 인스타그램 게시글"}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarDiary;
