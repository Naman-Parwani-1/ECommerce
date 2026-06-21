import "./ContactInfoGrid.css";

import {
  Mail,
  Leaf,
  Users,
  Megaphone,
  Gift,
} from "lucide-react";

function ContactInfoGrid({
  cards = [],
}) {

  const getIcon = (icon) => {
    switch (icon) {
      case "mail":
        return <Mail size={20} />;

      case "leaf":
        return <Leaf size={20} />;

      case "users":
        return <Users size={20} />;

      case "megaphone":
        return <Megaphone size={20} />;

      case "gift":
        return <Gift size={20} />;

      default:
        return <Mail size={20} />;
    }
  };

  return (
    <section className="contact-grid">

      {cards.map((card) => (

        <div
          key={card.id}
          className="contact-card"
        >

          <div className="contact-card-title">

            {getIcon(card.icon)}

            <h3>
              {card.title}
            </h3>

          </div>

          {card.description && (
            <p className="contact-description">
              {card.description}
            </p>
          )}

          {card.emails.map((email) => (

            <a
              key={email}
              href={`mailto:${email}`}
              className="contact-email"
            >
              {email}
            </a>

          ))}

        </div>

      ))}

    </section>
  );
}

export default ContactInfoGrid;