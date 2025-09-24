import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  variant = "primary",
  size = "md",
}) => {
  const baseStyle =
    "rounded-md font-medium focus:outline-none transition-colors duration-200";

  const variantStyles: Record<string, string> = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-300 text-gray-800 hover:bg-gray-400",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  const sizeStyles: Record<string, string> = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variantStyles[variant]} ${sizeStyles[size]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {children}
    </button>
  );
};

export default Button;


// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//     variant?: 'primary' | 'secondary' | 'danger' | 'outline' ;
//     size?: 'sm' | 'md' | 'lg' ;
//     children: React.ReactNode;
// }

// const Button: React.FC<ButtonProps> = ({
//     children,
//     variant = 'primary',
//     size = 'md',
//     className,
//     disabled,
//     ...props
// }) => {
//     const baseStyles: string = `
//         font-semibold rounded-lg focus:outline-none
//         focus:ring-2 focus:ring-offset-2 focus:ring-opacity-75
//         transition-all duration-150 ease-in-out
//         border
//         disabled:opacity-60 disabled:cursor-not-allowed
//     `;

//     let variantStyles: string = '';
//     switch (variant) {
//         case 'primary':
//             variantStyles = `
//                 bg-blue-600 text-white border-blue-600
//                 hover:bg-blue-700 hover:border-blue-700
//                 focus:ring-blue-500
//                 disabled:hover:bg-blue-600 disabled:hover:border-blue-600
//             `;
//             break;
//         case 'secondary':
//             variantStyles = `
//                 bg-blue-600 text-white border-blue-600
//                 hover:bg-blue-700 hover:border-blue-700
//                 focus:ring-gray-500
//                 disabled:hover:bg-gray-600 disabled:hover:border-gray-600
//             `;
//             break;
//         case 'danger':
//             variantStyles = `
//                 bg-blue-600 text-white border-blue-600
//                 hover:bg-blue-700 hover:border-blue-700
//                 focus:ring-red-500

//             `;
//             break;
//         case 'outline':
//             variantStyles = `
//                 bg-blue-600 text-white border-blue-600
//                 hover:bg-blue-700 hover:border-blue-700
//                 focus:ring-blue-500

//             `;
//             break;
//         default:
//             variantStyles = `
//                 bg-blue-600 text-white border-blue-600
//                 hover:bg-blue-700 hover:border-blue-700
//                 focus:ring-blue-500

//             `;
//     }


//     let sizeStyles: string = '';
//     switch (size) {
//         case 'sm':
//             sizeStyles = 'px-3 py-1.5 text-sm';
//             break;
//         case 'md':
//             sizeStyles = 'px-4 py-2 text-base';
//             break;
//         case 'lg':
//             sizeStyles = 'px-6 py-3 text-lg';
//             break;
//         default:
//             sizeStyles = 'px-4 py-2 text-base';
//     }


//     const combinedClassName: string = `
//         ${baseStyles}
//         ${variantStyles}
//         ${sizeStyles}
//         ${className || ''}
//     `.replace(/\s+/g, ' ').trim();


//     return (
//         <button
//             type='button'
//             className = {combinedClassName}
//             disabled = {disabled}
//             {...props}
//             >
//                 {children}
//         </button>
//     );
// };

// export default Button;