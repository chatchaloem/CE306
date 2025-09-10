import React from 'react';
import UserProfileCard from './Components/UserProfileCard';
import type { UserData } from './Components/UserProfileCard';
import WelcomeBanner from './Components/WelcomeBanner';
const users: UserData[] = [
  {
    id: 1,
    name: 'Ivy Handsome',
    email: 'Handsome.@example.com',
    avatarUrl: 'https://cdn.pixabay.com/photo/2020/03/13/15/43/cat-4928270_1280.jpg',
    isOnline: true,
    skills: [
      { name: 'React', level: 'Advanced' },
      { name: 'TypeScript', level: 'Intermediate' },
      { name: 'CSS', level: 'Advanced' },
    ],
  },
  {
    id: 2,
    name: 'Wuttipong Pee',
    email: 'Peepoo.@example.com',
    avatarUrl: 'https://cdn.pixabay.com/photo/2016/06/13/20/59/rabbit-1455140_1280.jpg',
    isOnline: false,
    skills: [
      { name: 'Project Management', level: 'Advanced' },
      { name: 'Construction', level: 'Beginner' },
    ],
  },
  {
    id: 3,
    name: 'Basla yahuuu',
    email: 'Jorvin.@example.com',
    avatarUrl: 'https://cdn.pixabay.com/photo/2023/01/03/16/00/dog-7694676_1280.jpg',
    isOnline: true,
    skills: [
      { name: 'Vue.js' },
      { name: 'Node.js', level: 'Intermediate' },
    ],
  },
];

const App: React.FC = () => {
  const handleViewDetails = (userId: string | number) => {
    console.log('User ID:', userId);
  };

  return (
    <div style={{ padding: '24px', fontFamily: 'Arial'}}>
      <WelcomeBanner />
      <div style={{ display: 'flex', gap: '24px', justifyContent: 'center'}}>
        {users.map((user) => (
          <UserProfileCard key={user.id} user={user} onViewDetails={handleViewDetails} />
        ))}
      </div>
    </div>
  );
};

export default App;