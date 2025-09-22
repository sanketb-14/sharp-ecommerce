

import { useCart } from '../context/CartContext';
import { productsArr } from '../data';
const Products = () => {
  const { addToCart } = useCart();


  return (
    <div className="min-h-screen bg-base-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {productsArr.map((product, index) => (
            <div key={index} className="card bg-base-300 shadow-xl">
              <figure className="px-4 pt-4">
                <img 
                  src={product.imageUrl} 
                  alt={product.title} 
                  className="rounded-xl h-48 object-cover w-full" 
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.title}</h2>
                <p className="text-lg font-semibold text-indigo-600">${product.price}</p>
                <div className="card-actions justify-end">
                  <button 
                    className="btn btn-primary"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;