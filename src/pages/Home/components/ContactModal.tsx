import React from "react";
import "./ContactModal.css";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ContactInfo {
  role: string;
  name: string;
  phone: string;
}

const groomContacts: ContactInfo[] = [
  { role: "신랑", name: "김성호", phone: "01024413846" },
  { role: "신랑 아버지", name: "김종혁", phone: "01085973690" },
  { role: "신랑 어머니", name: "신현옥", phone: "01077959563" },
];

const brideContacts: ContactInfo[] = [
  { role: "신부", name: "이다영", phone: "01036183447" },
  { role: "신부 아버지", name: "이준덕", phone: "01091016501" },
  { role: "신부 어머니", name: "유용옥", phone: "01050383439" },
];

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleCall = (phone: string) => {
    window.open(`tel:${phone}`, "_self");
  };

  const handleCopy = async (phone: string) => {
    try {
      await navigator.clipboard.writeText(phone);
      alert("전화번호가 복사되었습니다.");
    } catch {
      alert("복사에 실패했습니다.");
    }
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const renderContactItem = (contact: ContactInfo) => (
    <div className="contact-item" key={contact.role}>
      <div className="contact-info">
        <span className="contact-role">{contact.role}</span>
        <span className="contact-name">{contact.name}</span>
      </div>
      <div className="contact-actions">
        <button
          className="action-button call-button"
          onClick={() => handleCall(contact.phone)}
          aria-label={`${contact.name}에게 전화하기`}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
        </button>
        <button
          className="action-button copy-button"
          onClick={() => handleCopy(contact.phone)}
          aria-label={`${contact.name} 전화번호 복사하기`}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
            <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
          </svg>
        </button>
      </div>
    </div>
  );

  return (
    <div className="contact-modal-backdrop" onClick={handleBackdropClick}>
      <div className="contact-modal">
        <div className="contact-modal-header">
          <h2 className="contact-modal-title">Contact</h2>
          <button className="close-button" onClick={onClose} aria-label="닫기">
            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
        </div>

        <div className="contact-modal-content">
          <div className="contact-group">
            <h3 className="contact-group-title">신랑측</h3>
            {groomContacts.map(renderContactItem)}
          </div>

          <div className="contact-group">
            <h3 className="contact-group-title">신부측</h3>
            {brideContacts.map(renderContactItem)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
