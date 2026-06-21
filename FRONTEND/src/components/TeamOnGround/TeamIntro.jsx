import "./TeamIntro.css";

function TeamIntro({ intro }) {
  if (!intro) return null;

  return (
    <section className="team-intro">

      <p>

        <span className="highlight">
          {intro.highlight}
        </span>

        {" "}

        {intro.text}

      </p>

    </section>
  );
}

export default TeamIntro;