import React from 'react';

const Card = () => {
  const cards = [
    {
      title: 'Contract for Farmers',
      description: 'Manage and track farming contracts with detailed analytics and reporting.',
      image: 'https://via.placeholder.com/400x200?text=Farmland+1',
      buttonText: 'Contract for Farmers',
    },
    {
      title: 'Land Available for Contract Farming',
      description: 'Browse and register agricultural lands available for contract farming.',
      image: 'https://via.placeholder.com/400x200?text=Farmland+2',
      buttonText: 'Land Available for Contract Farming',
    },
    {
      title: 'Land for Rent',
      description: 'Purchase or rent farming equipment and tools from verified suppliers.',
      image: 'https://via.placeholder.com/400x200?text=Farming+Tools',
      buttonText: 'Land for Rent',
    },
    {
      title: 'Product Available',
      description: 'Access agricultural experts and support services for your farming needs.',
      image: 'https://via.placeholder.com/400x200?text=Crops+Growth',
      buttonText: 'Product Available',
    },
  ];

  return (
    <div className="bg-[#f9f9f9] py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Complete Farming Solutions</h2>
      <p className="text-center text-gray-600 mb-10">
        Explore our comprehensive modules designed to streamline your farming operations
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden transition-transform transform hover:scale-105"
          >
            <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-600 mb-4">{card.description}</p>
              <button className="text-green-600 font-medium hover:underline">{card.buttonText}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
