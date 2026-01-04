import React from 'react';
import './CalendarSection.css';

const CalendarSection: React.FC = () => {
  const year = 2026;
  const month = 3; // March
  const weddingDay = 28;

  // 2026년 3월의 달력 데이터 생성
  const firstDayOfMonth = new Date(year, month - 1, 1).getDay(); // 0 = Sunday
  const daysInMonth = new Date(year, month, 0).getDate(); // 31 days in March

  const days = [];
  // 빈 칸 (이전 달)
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(null);
  }
  // 실제 날짜
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const weekDays = ['일', '월', '화', '수', '목', '금', '토'];

  return (
    <section className="calendar-section">
      <div className="calendar-container">
        <h2 className="calendar-date">2026.03.28</h2>
        <p className="calendar-time">토요일 오후 12시 30분</p>

        <div className="calendar-grid">
          <div className="calendar-weekdays">
            {weekDays.map((day, index) => (
              <div
                key={day}
                className={`weekday ${index === 0 ? 'sunday' : ''} ${index === 6 ? 'saturday' : ''}`}
              >
                {day}
              </div>
            ))}
          </div>

          <div className="calendar-days">
            {days.map((day, index) => (
              <div
                key={index}
                className={`day ${day === null ? 'empty' : ''} ${day === weddingDay ? 'wedding-day' : ''} ${day !== null && index % 7 === 0 ? 'sunday' : ''} ${day !== null && index % 7 === 6 ? 'saturday' : ''}`}
              >
                {day === weddingDay ? (
                  <div className="wedding-day-content">
                    <span className="flower flower-top-left">✿</span>
                    <span className="flower flower-top-right">✿</span>
                    <span className="day-number">{day}</span>
                    <span className="wedding-label">결혼식</span>
                    <span className="flower flower-bottom-left">✿</span>
                    <span className="flower flower-bottom-right">✿</span>
                  </div>
                ) : (
                  day
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendarSection;
