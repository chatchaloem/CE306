import React, { useState } from "react";
import ProductCard from "./components/ProductCard";

const App: React.FC = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      imageUrl:
        "https://www.luxurycarrentalindubai.com/images/products/luxury-car-rental-dubai-lamborghini-aventador-s-2019.jpg",
      title: "LAMBROGHINI",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      price: 159000,
    },
    {
      id: 2,
      imageUrl:
        "https://images.autox.com/uploads/2024/08/McLaren-750S-Monaco-White.jpg",
      title: "MCLAREN",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      price: 899000,
    },
    {
      id: 3,
      imageUrl:
        "https://i.pinimg.com/736x/16/0f/81/160f81b25be36781d3c02396c263fe95.jpg",
      title: "FERRARI",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      price: 150000,
    },
  ]);

  const handleAddToCart = (id: number) => {
    alert(`Product with id ${id} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
        รายการสินค้าของเรา
      </h1>

      <div className="flex flex-wrap justify-center gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            imageUrl={product.imageUrl}
            title={product.title}
            description={product.description}
            price={product.price}
            onAddToCart={() => handleAddToCart(product.id)}
          />
        ))}
      </div>
    </div>
  );
};






// import React from "react";
// import Navbar from "./components/Navbar";

// const App: React.FC = () => {
//   return (
//     <div>
//       <Navbar />
//       <main className="pt-20 px-6 grid justify-center items-center">
//         <section id="home" className="min-h-screen py-12">
//           <h1 className="text-3xl font-bold text-gray-800 mb-4 grid justify-center">เนื้อหาหลักของหน้าเว็บ</h1>
//           <p className="text-gray-600">
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, nam laudantium nostrum temporibus consectetur ipsa?
//           </p>
//         </section>
//       </main>
//     </div>
//   );
// };

export default App;








// import Button from "./components/Button";

// const App: React.FC = () => {
//   const handleButtonClick = (type: string) => {
//     alert(`${type} button clicked!`);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6 space-y-4">
//       <h1 className="text-3xl font-bold text-gray-700 mb-6">Button Component Test</h1>

//       <div className="bg-green-200 border border-green-500 text-green-700 p-4 rounded-md mb-6">
//         If you see this box styled, Tailwind base setup is likely working.
//       </div>

//       <div className="space-x-2">
//         <Button variant="primary" size="sm" onClick={() => handleButtonClick('Primary SM')}>
//           Primary SM
//         </Button>
//         <Button variant="primary" size="md" onClick={() => handleButtonClick('Primary MD')}>
//           Primary MD
//         </Button>
//         <Button variant="primary" size="lg" onClick={() => handleButtonClick('Primary LG')}>
//           Primary LG
//         </Button>
//       </div>

//       <div className="space-x-2 mt-4">
//         <Button variant="secondary" size="sm" onClick={() => handleButtonClick('Secondary SM')}>
//           Secondary SM
//         </Button>
//         <Button variant="secondary" size="md" onClick={() => handleButtonClick('Secondary MD')}>
//           Secondary MD (Default Size)
//         </Button>
//       </div>

//       <div className="space-x-2 mt-4">
//         <Button variant="danger" size="lg" onClick={() => handleButtonClick('Danger LG')}>
//           Danger LG
//         </Button>
//         <Button variant="danger" size="md" disabled>
//           Danger Disabled
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default App;
