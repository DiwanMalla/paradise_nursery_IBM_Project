import { useCart } from "../useContext/cartContext"; // Import the useCart hook
import { Link } from "react-router-dom"; // Assuming you are using react-router for navigation

// Path to your cart icon image
import cartIcon from "/cart-icon.png"; // Update the path to your image

const Header = () => {
  const { cart } = useCart(); // Get the cart state from the context

  // Calculate the total quantity of items in the cart
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      {/* Company name */}
      <Link to="/" className="text-2xl font-bold">
        Paradise Nursery
      </Link>

      {/* Navigation */}
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link to="/products" className="text-gray-700 hover:text-gray-900">
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="relative text-gray-700 hover:text-gray-900"
            >
              <img src={cartIcon} alt="Cart" className="w-8 h-8" />

              {/* Display number of items in the cart */}
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-2 py-1">
                  {totalItems}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
