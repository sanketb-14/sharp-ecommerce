import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Welcome to ArtStore</h1>
          <p className="text-xl mb-8">Discover beautiful color artworks for your space</p>
          <Link to="/products" className="btn btn-primary btn-lg">
            Shop Now
          </Link>
        </div>
      </section>

   
    
    </div>
  );
};

export default Home;