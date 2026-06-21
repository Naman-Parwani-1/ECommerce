import "./TeamMembers.css";

import TeamMemberCard from "./TeamMemberCard";

function TeamMembers({
  members = [],
}) {
  return (
    <section className="team-members">

      <h2 className="team-members-title">
        KRUSHI BANDHU
      </h2>

      <div className="team-members-grid">

        {members.map((member) => (
          <TeamMemberCard
            key={member.id}
            member={member}
          />
        ))}

      </div>

    </section>
  );
}

export default TeamMembers;