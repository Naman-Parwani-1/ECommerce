import "./ContactSupportCard.css";

import { Phone } from "lucide-react";

function ContactSupportCard({ data }) {
  return (
    <section className="support-card">

      <div className="support-header">

        <Phone
          size={28}
          strokeWidth={2.5}
        />

        <h2>
          Phone & WhatsApp Support
        </h2>

      </div>

      <p className="support-phone">
        {data.phone}
      </p>

      <p className="support-hours">
        {data.hours}
      </p>

      <div className="support-actions">

        <a
          href={`tel:${data.phone}`}
          className="support-btn"
        >
          Call Now
        </a>

        <a
          href="https://wa.me/917406753753"
          className="support-btn"
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>

      </div>

    </section>
  );
}

export default ContactSupportCard;