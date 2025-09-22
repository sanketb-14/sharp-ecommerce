import { useCart } from "../context/CartContext";

const Cart = ({ isOpen, toggleCart }) => {

    const {cartItems , removeProduct} = useCart()
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  console.log(cartItems);
  

  return (
    <>
      {isOpen && (
        <aside className="fixed right-0 top-0 h-full w-80 bg-base-300 p-4 z-20 shadow-xl">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Your Cart</h2>
            <button
              className="btn btn-sm btn-circle btn-secondary"
              onClick={toggleCart}
            >
              ✕
            </button>
          </div>

          {!cartItems.length ? (
            <div className="text-center py-8">
              <p className="text-lg">Your cart is empty</p>
            </div>
          ) : (
            <>
              <ul className="space-y-4 max-h-96 overflow-y-auto">
                {cartItems.map((item) => (
                  <li
                    key={item.id}
                    className="card card-side bg-base-100 shadow-sm p-3"
                  >
                    <img
                      className="w-16 h-16 rounded-lg object-cover"
                      src={item.imageUrl}
                      alt={item.title}
                    />
                    <div className="card-body p-2 flex-1">
                      <h3 className="card-title text-sm">{item.title}</h3>
                      <div className="flex justify-between text-xs">
                        <span>
                          ${item.price} × {item.quantity}
                        </span>
                        <span>${item.price * item.quantity}</span>
                      </div>
                      <button
                        className="btn btn-error btn-xs mt-1"
                        onClick={() => removeProduct(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="border-t mt-4 pt-4">
                <div className="flex justify-between text-lg font-bold mb-4">
                  <span>Total:</span>
                  <span>${totalAmount.toFixed(2)}</span>
                </div>
                <button className="btn btn-primary w-full">Checkout</button>
              </div>
            </>
          )}
        </aside>
      )}
    </>
  );
};

export default Cart;
