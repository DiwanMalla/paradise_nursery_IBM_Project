import { useCart } from "../useContext/cartContext";
import { Link } from "react-router-dom";
import Header from "./Header";

const CartPage = () => {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity } =
    useCart(); // Get cart state and functions from context

  // Calculate total price
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-4">
      <Header />
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>
          Your cart is empty.{" "}
          <Link to="/home" className="text-blue-500">
            Continue Shopping
          </Link>
        </p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="border p-4 rounded-lg flex justify-between items-center"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover"
                  />
                  <div>
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-gray-700">
                      Unit Price: ${item.price.toFixed(2)}
                    </p>
                    <div className="flex items-center space-x-2 mt-2">
                      <button
                        onClick={() => decrementQuantity(item.id)}
                        className="bg-gray-300 px-2 py-1 rounded"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => incrementQuantity(item.id)}
                        className="bg-gray-300 px-2 py-1 rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p>Total: ${(item.quantity * item.price).toFixed(2)}</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 mt-2"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <p className="text-xl font-bold">
              Total Price: ${totalPrice.toFixed(2)}
            </p>
            <div className="mt-4 flex space-x-4">
              <Link
                to="/home"
                className="bg-gray-300 text-black px-4 py-2 rounded"
              >
                Continue Shopping
              </Link>
              <button className="bg-green-500 text-white px-4 py-2 rounded">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
