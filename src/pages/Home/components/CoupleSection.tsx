import React from 'react';
import './CoupleSection.css';

const CoupleSection: React.FC = () => {
  return (
    <section className="couple-section">
      <div className="couple-container">
        <div className="couple-info">
          <div className="person groom">
            <p className="role">Groom</p>
            <p className="name">김성호</p>
          </div>
          <div className="ring-icon">
            <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="silverRing" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#e8e8e8"/>
                  <stop offset="50%" stopColor="#c0c0c0"/>
                  <stop offset="100%" stopColor="#a8a8a8"/>
                </linearGradient>
              </defs>
              {/* 실버 링 */}
              <ellipse cx="32" cy="40" rx="14" ry="9" fill="none" stroke="url(#silverRing)" strokeWidth="2.5"/>
              {/* 미니멀 다이아몬드 */}
              <circle cx="32" cy="24" r="8" fill="none" stroke="#b0b0b0" strokeWidth="1.5"/>
              <circle cx="32" cy="24" r="5" fill="none" stroke="#c8c8c8" strokeWidth="1"/>
              <circle cx="32" cy="24" r="2" fill="#a0a0a0" opacity="0.5"/>
              {/* 반짝임 */}
              <circle cx="29" cy="21" r="1.2" fill="#d0d0d0" opacity="0.8"/>
            </svg>
          </div>
          <div className="person bride">
            <p className="role">Bride</p>
            <p className="name">이다영</p>
          </div>
        </div>
      </div>
      <div className="wedding-details">
        <p className="venue">아모르아트컨벤션</p>
        <p className="hall">2층 그랜드홀</p>
        <p className="datetime">2026.03.28 | 토요일 | 12:30PM</p>
      </div>
    </section>
  );
};

export default CoupleSection;
