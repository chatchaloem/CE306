// import React, { useState } from "react";
// import { Menu, X } from "lucide-react";

// const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const links = ["Home", "About", "Services", "Contact"];

//   return (
//     <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
//       <div className="container mx-auto px-6 py-4 flex justify-between items-center">
//         <div className="text-2xl font-bold text-blue-600">💔</div>

//         <div className="hidden md:flex space-x-6">
//           {links.map((link) => (
//             <a
//               key={link}
//               href={"#" + link.toLowerCase()}
//               className="text-gray-800 hover:text-blue-600 transition-colors"
//             >
//               {link}
//             </a>
//           ))}
//         </div>

//         <div className="md:hidden">
//           <button onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {isOpen && (
//         <div className="md:hidden bg-white shadow-md transition-all">
//           <div className="flex flex-col space-y-2 px-6 py-4">
//             {links.map((link) => (
//               <a
//                 key={link}
//                 href={"#" + link.toLowerCase()}
//                 className="text-gray-700 hover:text-blue-600 transition-colors"
//               >
//                 {link}
//               </a>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
