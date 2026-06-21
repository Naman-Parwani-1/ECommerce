import "./Visionaries.css";

import {BadgeCheck} from "lucide-react";

import {FaLinkedin} from "react-icons/fa";

function Visionaries({ data }) {
  if (!data) return null;

  return (
    <section className="visionaries">

      <h2 className="visionaries-title">
        {data.title}
      </h2>

      <div className="visionaries-line" />

      <p className="visionaries-subtitle">
        {data.subtitle}
      </p>

      <div className="visionaries-grid">

        {data.members.map((member) => (
          <div
            key={member.id}
            className="visionary-card"
          >

            <div className="visionary-image-wrap">

              <img
                src={member.image}
                alt={member.name}
                className="visionary-image"
              />

              <div className="verified-badge">
                <BadgeCheck size={18} />
              </div>

            </div>

            <h3>
              {member.name}
            </h3>

            <h4>
              {member.designation}
            </h4>

            <p className="visionary-description">
              {member.description}
            </p>

            <a
              href={member.linkedin}
              target="_blank"
              rel="noreferrer"
              className="linkedin-link"
            >
              <FaLinkedin size={14} />
              Connect on LinkedIn
            </a>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Visionaries;