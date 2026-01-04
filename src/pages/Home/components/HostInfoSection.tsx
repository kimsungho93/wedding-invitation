import React from "react";
import "./HostInfoSection.css";

const HostInfoSection: React.FC = () => {
  return (
    <section className="host-info-section">
      <div className="host-info-container">
        <div className="host-item">
          <div className="host-line">
            <span className="parent-name">김종혁</span> ∙{" "}
            <span className="parent-name">신현옥</span> 아들{" "}
            <span className="child-name">김성호</span>
          </div>
        </div>

        <div className="host-item">
          <div className="host-line">
            <span className="parent-name">이준덕</span> ∙{" "}
            <span className="parent-name">유용옥</span>
            <span style={{ marginLeft: "0.5em" }}>딸</span>{" "}
            <span className="child-name" style={{ marginLeft: "0.65em" }}>
              이다영
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostInfoSection;
