import React from 'react';
import SkillTag from './SkillTag';
import Button from './Button';

export interface UserData {
    id: string | number;
    name: string;
    avatarUrl?: string;
    email: string;
    isOnline: boolean;
    skills: { name: string; level?: 'Beginner' | 'Intermediate' | 'Advanced' }[];
}

interface UserProfileCardProps {
    user: UserData;
    onViewDetails: (userId: string | number) => void;
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({ user, onViewDetails }) => {
    return (
        <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '16px', width: '100%' ,maxWidth:'360px'
            , boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)', margin:'16px'
         }}>

            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                <img
                    src={user.avatarUrl || 'https://via.placeholder.com/100'}
                    alt={user.name}
                    style={{ borderRadius: '50%', width: '70px', height: '70px', marginRight: '16px' }}
                />
                <div>
                    <h3 style={{ margin: '0 0 4px 0' }}>{user.name}</h3>
                    <p style={{ margin: '0 0 4px 0' }}>{user.email}</p>
                    <p style={{ margin: 0, color: 'black', fontWeight: 500 }}>
                        <span style={{ color: user.isOnline ? '#26FF2A' : 'gray' }}>●</span> {user.isOnline ? 'Online' : 'Offline'}
                    </p>
                </div>
            </div>

            {/* Skills */}
            <div style={{ marginBottom: '12px' }}>
                <strong>Skills:</strong>
                <div style={{ marginTop: '4px' }}>
                    {user.skills.map((skill, index) => (
                        <SkillTag key={index} skillName={skill.name} level={skill.level} />
                    ))}
                </div>
            </div>

            {/* ปุ่ม View Details */}
            <Button onClick={() => onViewDetails(user.id)}>View Details</Button>
        </div>
    );
};

export default UserProfileCard;