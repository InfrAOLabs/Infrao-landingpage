import React from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  alt: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, bio, image, alt }) => {
  return (
    <div className="team-member">
      <img src={image} alt={alt} className="member-photo" />
      <h3>{name}</h3>
      <p className="member-role">{role}</p>
      <p className="member-bio">{bio}</p>
    </div>
  );
};

export default TeamMember;
