import React, { useState, useEffect } from 'react';
import './CalendarSection.css';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CalendarSection: React.FC = () => {
  const year = 2026;
  const month = 3; // March
  const weddingDay = 28;

  // 결혼식 날짜: 2026년 3월 28일 오후 12시 30분
  const weddingDate = new Date(2026, 2, 28, 12, 30, 0);

  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date();
    const difference = weddingDate.getTime() - now.getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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

        <div className="countdown">
          <p className="countdown-title">결혼식까지</p>
          <div className="countdown-boxes">
            <div className="countdown-box">
              <span className="countdown-number">{timeLeft.days}</span>
              <span className="countdown-label">DAYS</span>
            </div>
            <div className="countdown-box">
              <span className="countdown-number">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="countdown-label">HOURS</span>
            </div>
            <div className="countdown-box">
              <span className="countdown-number">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="countdown-label">MINS</span>
            </div>
            <div className="countdown-box">
              <span className="countdown-number">{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span className="countdown-label">SECS</span>
            </div>
          </div>
          <p className="countdown-heart">♥</p>
        </div>
      </div>
    </section>
  );
};

export default CalendarSection;
