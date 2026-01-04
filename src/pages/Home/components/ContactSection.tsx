import React, { useState } from "react";
import "./ContactSection.css";
import ContactModal from "./ContactModal";

const ContactSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="contact-section">
      <div className="contact-container">
        <button
          className="contact-button"
          onClick={() => setIsModalOpen(true)}
        >
          연락하기
        </button>
      </div>
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default ContactSection;
