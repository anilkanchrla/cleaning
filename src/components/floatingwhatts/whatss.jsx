import React from "react";
import "./whats.css";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/917801078485"   // 👉 replace with your WhatsApp number
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
     <FaWhatsapp size={32} color="white" />
    </a>
  );
};

export default WhatsAppFloat;
