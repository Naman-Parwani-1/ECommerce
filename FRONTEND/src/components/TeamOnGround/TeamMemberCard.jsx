import "./TeamMemberCard.css";

function TeamMemberCard({
  member,
}) {
  return (
    <article className="team-member-card">

      <div className="member-header">

        {member.name}

        {member.location && (
          <>
            {" "}
            ({member.location})
          </>
        )}

      </div>

      <img
        src={member.image}
        alt={member.name}
        className="member-image"
      />

      <div className="member-content">

        <div className="quote-mark">
          ❝
        </div>

        <p className="member-story">
          {member.story}
        </p>

      </div>

    </article>
  );
}

export default TeamMemberCard;