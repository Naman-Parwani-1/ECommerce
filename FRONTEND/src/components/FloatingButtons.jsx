import { BsWhatsapp } from "react-icons/bs";
import { BiBot } from "react-icons/bi";

import "./FloatingButtons.css";

function FloatingButtons() {
  return (
    <>
      {/* Chatbot Button */}

      <button
        className="chatbot-btn"
        onClick={() => alert("Chatbot Coming Soon")}
      >
        <BiBot size={30} />
      </button>

      {/* WhatsApp Button */}

      <a
        href="https://wa.me/9509440936"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-btn"
      >
        <BsWhatsapp size={30} />
      </a>
    </>
  );
}

export default FloatingButtons;