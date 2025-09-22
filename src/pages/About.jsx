import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-base-100 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">About ArtStore</h1>
          
          <div className="bg-base-300 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Our Story</h2>
            <p className="text-gray-100 mb-4">
              ArtStore was founded in 2020 with a simple mission: to make beautiful, 
              high-quality color artworks accessible to everyone. We believe that art 
              should be an integral part of every space, inspiring creativity and 
              bringing joy to daily life.
            </p>
            <p className="text-gray-200">
              Our collection features carefully curated color artworks from talented 
              artists around the world. Each piece is selected for its unique ability 
              to transform spaces and evoke emotions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-base-300 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">Our Mission</h3>
              <p className="text-gray-100">
                To democratize art ownership by providing affordable, high-quality 
                color artworks that inspire creativity and enhance living spaces.
              </p>
            </div>
            
            <div className="bg-base-300 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-indigo-500">Our Vision</h3>
              <p className="text-gray-100">
                To become the leading platform for color art enthusiasts, connecting 
                artists with art lovers worldwide.
              </p>
            </div>
          </div>

          <div className="bg-base-300 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-500">Why Choose Us?</h2>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-100">Premium quality color artworks</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-100">Affordable prices for everyone</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-100">Carefully curated collections</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-100">Fast and secure shipping</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-100">Excellent customer support</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;