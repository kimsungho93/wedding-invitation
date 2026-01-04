import React, { useState } from 'react';
import './LocationSection.css';
import mapImage from '../../../assets/image/지도.png';

const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const address = '충북 청주시 흥덕구 남석로 579';
  const phoneNumber = '0507-1426-1040';

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy address:', err);
    }
  };

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <section className="location-section">
      <div className="location-container">
        <h2 className="location-title">Location</h2>

        <p className="location-venue">아모르아트컨벤션</p>

        <div className="location-address-row">
          <span className="location-address">{address}</span>
          <button
            className="location-copy-button"
            onClick={handleCopyAddress}
            aria-label="주소 복사"
          >
            {copied ? (
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
              </svg>
            )}
          </button>
        </div>

        <button className="location-call-button" onClick={handleCall}>
          <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
          <span>{phoneNumber}</span>
        </button>

        <div className="location-map">
          <img src={mapImage} alt="오시는 길 지도" />
        </div>

        <div className="location-info">
          <div className="location-info-item">
            <div className="location-info-label">
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z"/>
              </svg>
              <span>버스</span>
            </div>
            <div className="location-info-detail">
              <p className="location-info-text">702, 813번</p>
              <div className="location-info-sub">
                <span className="location-info-tag">타는 곳</span>
                <span>고속버스터미널 정류장(청신운수 방면) 다이소 옆</span>
              </div>
              <div className="location-info-sub">
                <span className="location-info-tag">내리는 곳</span>
                <span>호암마을 입구 정류장 하차 후 큰길 건너면 바로 웨딩홀</span>
              </div>
            </div>
          </div>

          <div className="location-info-item">
            <div className="location-info-label">
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
              </svg>
              <span>자차</span>
            </div>
            <p className="location-info-text">
              강서IC에서 나오시면 웨딩홀 근방으로 가장 빠릅니다
            </p>
          </div>

          <div className="location-info-notice">
            <div className="traffic-light">
              <div className="traffic-light-body">
                <div className="light red"></div>
                <div className="light yellow"></div>
                <div className="light green"></div>
              </div>
            </div>
            <p>웨딩홀 앞 좌회전 신호 대기가 길 수 있으니<br />조금 여유있게 출발해 주세요</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
