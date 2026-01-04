import React from 'react';
import './InvitationSection.css';

const InvitationSection: React.FC = () => {
  return (
    <section className="invitation-section">
      <div className="invitation-container">
        <h2 className="invitation-title">Invitation</h2>
        <div className="divider"></div>
        <p className="invitation-subtitle">초대합니다</p>
        <p className="invitation-message">
          소중한 분들을 모시고
          <br />
          새로운 출발을 함께하고자 합니다.
          <br />
          저희 두 사람의 약속이
          <br />
          사랑으로 더욱 빛날 수 있도록 오셔서
          <br />
          따뜻한 격려와 축복을 부탁드립니다.
        </p>
      </div>
    </section>
  );
};

export default InvitationSection;
