import React from 'react';

interface SkillTagProps {
  skillName: string;
  level?: 'Beginner' | 'Intermediate' | 'Advanced';
}

const levelColor = {
  Beginner: '#72CC74',
  Intermediate: '#FAC34D',
  Advanced: '#FF5433',
};

const SkillTag: React.FC<SkillTagProps> = ({ skillName, level }) => {
  const backgroundColor = level ? levelColor[level] : '#e2e3e5';

  return (
    <span
      style={{
        backgroundColor,
        borderRadius: '8px',
        padding: '4px 8px',
        margin: '4px',
        display: 'inline-block',
        fontSize: '0.9rem',
      }}
    >
      {skillName}
      {level && ` (${level})`}
    </span>
  );
};

export default SkillTag;