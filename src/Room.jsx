import React from "react";

function Room() {
  return (
    <section className="w-full py-16 px-6 md:px-20 bg-white">
      
      <h2 className="text-4xl font-bold text-center mb-12">About Our Hotel</h2>


      <div className="flex flex-col md:flex-row items-center gap-10">
        
        <img
          src="https://i.pinimg.com/736x/7a/a1/94/7aa19415266b8ad0ad570b7d2ecc3e8e.jpg"
          alt="About Hotel"
          className="w-full md:w-1/2 rounded-xl shadow-lg"
        />

      
        <div className="md:w-1/2">
          <h3 className="text-2xl font-semibold mb-4">Experience the Best Hospitality</h3>
          <p className="text-gray-700 text-lg mb-4">
          Welcome to Zean, where comfort meets convenience. Located in the heart of Mumbai, we offer stylish rooms, modern amenities, and warm hospitality to make your stay truly memorable. Whether you're here for business or leisure, we ensure a relaxing and enjoyable experience.
          </p>
          <p className="text-gray-600 text-md">
            We are located in the heart of the city with easy access to popular
            attractions, transport, and shopping areas.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Room;
