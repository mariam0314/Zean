import React from "react";

function Home() {
  return (
    <div className="w-full">

      {/* ✅ Hero Section */}
      <div
        className="h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/4a/52/17/4a5217993d5e064bdc21d7b885809335.jpg')",
        }}
      >
        <div className="bg-red-950 p-10 rounded-lg text-center">
          <h1 className="text-white text-5xl font-bold mb-4">
            Welcome to Zean 
          </h1>
          <p className="text-white text-lg">
            Luxury. Comfort. Excellence.
          </p>
        </div>
      </div>

      {/* ✅ About / Welcome Section */}
      <section className="py-16 px-6 md:px-20 bg-white flex flex-col md:flex-row items-center gap-10">
        <img
          src="https://images.unsplash.com/photo-1558959357-685f9c7ace7b"
          alt="Lobby"
          className="w-full md:w-1/2 rounded-xl shadow-md"
        />
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Your Perfect Stay</h2>
          <p className="text-gray-700 text-lg">
            Enjoy an unforgettable experience in our luxury hotel located in the
            heart of the city. Our modern rooms, exquisite dining, and premium
            service make us the perfect choice for both business and leisure
            travelers.
          </p>
        </div>
      </section>

 
      <section className="py-16 px-6 md:px-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-10">Explore Our Rooms</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img
              src="https://i.pinimg.com/736x/fe/1c/bc/fe1cbcfe645c4a514586900056255e91.jpg"
              alt="Deluxe Room"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Deluxe Room</h3>
              <p className="text-gray-600">$200/night</p>
            </div>
          </div>
     
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img
              src="https://i.pinimg.com/736x/1f/3f/fa/1f3ffa0fcd547684066422a36cef530c.jpg"
              alt="Suite"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Executive Suite</h3>
              <p className="text-gray-600">$350/night</p>
            </div>
          </div>
     
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img
              src="https://i.pinimg.com/736x/8c/16/80/8c168089a4017cc77c29c6edcedaae6b.jpg"
              alt="Presidential Suite"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Presidential Suite</h3>
              <p className="text-gray-600">$500/night</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-orange-300 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Book Your Stay?</h2>
        <p className="mb-6 text-lg">Contact us now or book online.</p>
        <a href="/contact">
        <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100">
          Book Now
        </button>
        </a>
      </section>
    </div>
  );
}

export default Home;
