import { Link } from "react-router-dom";

const ParadiseNursery = () => {
  return (
    <div
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/background-image.jpg')", // Replace with the actual image URL
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      {/* Dark overlay */}
      <div className="relative z-10 text-white flex flex-col md:flex-row items-center md:items-start md:space-x-16 p-6">
        {/* Left Section - Title */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome To <br /> Paradise Nursery
          </h1>
          <p className="text-lg mb-8">Where Green Meets Serenity</p>
          <Link to={"/home"}>
            <button className="bg-green-500 text-white px-6 py-2 rounded-full text-lg hover:bg-green-600">
              Get Started
            </button>
          </Link>
        </div>

        {/* Right Section - Paragraph */}
        <div className="mt-8 md:mt-0 max-w-md text-center md:text-left">
          <p className="text-lg mb-4">
            At Paradise Nursery, we are passionate about bringing nature closer
            to you. Our mission is to provide a wide range of high-quality
            plants that not only enhance the beauty of your surroundings but
            also contribute to a healthier and more sustainable lifestyle. From
            air-purifying plants to aromatic fragrant ones, we have something
            for every plant enthusiast.
          </p>
          <p className="text-lg mb-4">
            Our team of experts is dedicated to ensuring that each plant meets
            our strict standards of quality and care. Whether you're a seasoned
            gardener or just starting your green journey, we're here to support
            you every step of the way. Feel free to explore our collection, ask
            questions, and let us help you find the perfect plant for your home
            or office.
          </p>
          <p className="text-lg">
            Join us in our mission to create a greener, healthier world. Visit
            Paradise Nursery today and experience the beauty of nature right at
            your doorstep.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ParadiseNursery;
