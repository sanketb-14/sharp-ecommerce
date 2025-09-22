import { useState } from "react";
import Cart from "./components/Cart";
import { cartElements, productsArr } from "./data";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const [cartItems , setCartItem] = useState(cartElements || [])


  function removeProduct(id){
    setCartItem(prev => prev.filter(item => item.id !== id))
  }

  function toggleCart(){
    setIsOpen(!isOpen)
  }
  return (
    <div className="min-h-screen bg-base-100">
      {/* Header */}
      <header className="bg-base-200 shadow-sm">
        <Cart  isOpen={isOpen} toggleCart={toggleCart} cartItems={cartItems} removeProduct={removeProduct}/>
        <div className="navbar container mx-auto px-4 py-3">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl font-bold text-primary">
              ArtStore
            </a>
          </div>
          <div className="flex-none">
            <button className="btn btn-ghost btn-circle">
              <div className="indicator" onClick={toggleCart}>
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
                <span className="badge badge-sm indicator-item bg-secondary text-white">
                  {cartItems.length}
                </span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-base-100 to-primary text-base-content py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Premium Colors Collection
          </h1>
          <p className="text-xl mb-8">
            Discover our exclusive range of vibrant color artworks
          </p>
          <button className="btn btn-outline btn-accent text-white border-white hover:bg-white hover:text-primary">
            Shop Now
          </button>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-base-content">
            Featured Products
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productsArr.map((product, index) => (
              <div key={index} className="card bg-base-200 shadow-xl">
                <figure className="px-4 pt-4">
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="rounded-xl h-48 object-cover w-full"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{product.title}</h2>
                  <p className="text-lg font-semibold text-primary">
                    ${product.price}
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <aside>
          <p className="font-bold text-lg">ArtStore</p>
          <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
        </aside>
      </footer>
    </div>
  );
}

export default App;
