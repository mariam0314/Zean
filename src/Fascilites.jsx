import React from "react";

function Services() {
  return (
    <section className="w-full py-16 px-6 md:px-20 bg-gray-50">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-12">Our Facilities & Services</h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Service 1 */}
        <div className="bg-white shadow-lg rounded-xl p-6 text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2933/2933189.png"
            alt="Spa"
            className="w-20 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Luxury Spa</h3>
          <p className="text-gray-600">
            Relax and rejuvenate with world-class spa treatments in a serene environment.
          </p>
        </div>

        {/* Service 2 */}
        <div className="bg-white shadow-lg rounded-xl p-6 text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
            alt="Pool"
            className="w-20 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Infinity Pool</h3>
          <p className="text-gray-600">
            Enjoy breathtaking views while lounging by our temperature-controlled pool.
          </p>
        </div>

        {/* Service 3 */}
        <div className="bg-white shadow-lg rounded-xl p-6 text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/888/888064.png"
            alt="Restaurant"
            className="w-20 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Fine Dining</h3>
          <p className="text-gray-600">
            Experience gourmet cuisine and exceptional service in our signature restaurant.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
