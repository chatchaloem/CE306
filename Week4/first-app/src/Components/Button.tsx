import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
        onClick={onClick}
        style={{
        margin: '12px auto 0',         // 👈 margin auto = center แนวนอน
        padding: '10px 120px',         // 👈 ยังคงกว้างแบบที่คุณต้องการ
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        display: 'block',
      }}
    >
      {children}
    </button>
  );
};

export default Button;