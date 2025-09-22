import React, { Suspense, useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

import Cart from "./components/Cart";
import { useCart } from "./context/CartContext";

// Lazy load the About page
const About = React.lazy(() => import("./pages/About"));
const Home = React.lazy(() => import("./pages/Home"));
const Products = React.lazy(() => import("./pages/Products"));

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const {cartItems}  = useCart()

  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (

      <Router>
        <div className="min-h-screen bg-base-100">
          {/* Navigation */}
          <nav className="bg-base-200 shadow-sm">
            <div className="navbar container mx-auto px-4 py-3">
              <div className="flex-1">
                <NavLink
                  to="/"
                  className={({isActive}) => `btn btn-ghost text-xl font-bold ${isActive ? 'text-indigo-600 underline' : 'text-base-content'}` }
                >
                  ArtStore
                </NavLink>
              </div>
              <div className="flex-none">
                <div className="flex items-center space-x-4">
                  <NavLink 
                    to="/" 
                    end
                    className={({ isActive }) => 
                      `btn btn-ghost ${isActive ? 'text-indigo-600 bg-indigo-50' : 'text-base-content'}`
                    }
                  >
                    Home
                  </NavLink>
                  <NavLink 
                    to="/products" 
                    end
                    className={({ isActive }) => 
                      `btn btn-ghost ${isActive ? 'text-indigo-600 bg-indigo-50' : 'text-base-content'}`
                    }
                  >
                    Products
                  </NavLink>
                  <NavLink 
                    to="/about" 
                    end
                    className={({ isActive }) => 
                      `btn btn-ghost ${isActive ? 'text-indigo-600 bg-indigo-50' : 'text-base-content'}`
                    }
                  >
                    About
                  </NavLink>

                  {/* Cart Button */}
                  <button
                    className="btn btn-ghost btn-circle"
                    onClick={toggleCart}
                  >
                    <div className="indicator">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <span className="badge badge-sm indicator-item bg-primary text-white">
                        {cartItems.length}
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </nav>

        
          <Suspense
            fallback={
              <div className="flex justify-center items-center h-64">
                <div className="loading loading-spinner loading-lg text-primary-content"></div>
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Suspense>

          {/* Cart Component */}
          <Cart isOpen={isCartOpen} toggleCart={toggleCart} />

          {/* Footer */}
          <footer className="footer footer-center p-10 bg-base-200 text-base-content">
            <aside>
              <p className="font-bold text-lg">ArtStore</p>
              <p>
                Copyright © {new Date().getFullYear()} - All rights reserved
              </p>
            </aside>
          </footer>
        </div>
      </Router>
    
  );
}

export default App;
