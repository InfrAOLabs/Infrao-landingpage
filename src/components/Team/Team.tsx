import React from 'react';
import TeamMember from './TeamMember';

interface TeamMemberType {
  name: string;
  role: string;
  bio: string;
  image: string;
  alt: string;
}

interface TeamProps {
  title?: string;
  description?: string;
  members: TeamMemberType[];
}

const Team: React.FC<TeamProps> = ({
  title = 'Our Team',
  description = 'We are a team of passionate engineers, designers, and infrastructure experts committed to innovation.',
  members
}) => {
  return (
    <div className="team-section">
      <h2>{title}</h2>
      <p>{description}</p>
      
      <div className="team-grid">
        {members.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            role={member.role}
            bio={member.bio}
            image={member.image}
            alt={member.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
