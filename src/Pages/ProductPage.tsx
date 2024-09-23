import { useCart } from "../useContext/cartContext";
import Header from "./Header";

const products = [
  { id: 1, name: "Aloe Vera", price: 25, image: "/aloe-vera.jpg" },
  {
    id: 2,
    name: "Fiddle Leaf Fig",
    price: 30,
    image: "/fiddle-leaf-fig.jpg",
  },
  { id: 3, name: "Snake Plant", price: 20, image: "/snake-plant.jpg" },
  { id: 4, name: "Lavender", price: 35, image: "/lavender.jpg" },
  { id: 5, name: "Rosemary", price: 15, image: "/rosemary.jpg" },
  { id: 6, name: "Spider Plant", price: 10, image: "/spider-plant.jpg" },
];

const ProductListingPage = () => {
  const { addToCart } = useCart(); // Access the addToCart function from context

  return (
    <div className="p-4">
      <Header />
      <h1 className="text-3xl font-bold mb-6">Our Houseplants</h1>
      <div className="grid grid-cols-2 gap-4">
        {products.map((plant) => (
          <div key={plant.id} className="border rounded-lg p-4 shadow-md">
            <img
              src={plant.image}
              alt={plant.name}
              className="w-full h-40 object-cover"
            />
            <h2 className="text-lg font-semibold mt-2">{plant.name}</h2>
            <p className="text-gray-700">${plant.price.toFixed(2)}</p>
            <button
              onClick={() => {
                addToCart(plant);
                alert(`${plant.name} added to cart!`);
              }}
              className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;
