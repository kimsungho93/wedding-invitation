import React, { useState, useEffect } from "react";
import mainImage from "../../../assets/image/main.jpg";
import mainImage2 from "../../../assets/image/main2.jpg";
import mainImage3 from "../../../assets/image/main3.jpg";
import "./MainSection.css";

const images = [mainImage, mainImage2, mainImage3];

const MainSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="main-section">
      <div className="image-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Wedding ${index + 1}`}
            className={`main-image ${
              index === currentImageIndex ? "active" : ""
            }`}
          />
        ))}
        <div className="overlay-content">
          <h1 className="main-title">We're Getting Married</h1>
        </div>
        <div className="bottom-info">
          <div className="wedding-info">
            <p className="venue">아모르아트컨벤션</p>
            <p className="hall">2층 그랜드홀</p>
            <p className="datetime">2026.03.28 | 토요일 | 12:30PM</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
