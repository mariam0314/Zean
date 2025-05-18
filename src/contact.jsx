import React from "react";

function Contact() {
  return (
    <section className="w-full py-16 px-6 md:px-20 bg-white">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Contact Form */}
        <div className="md:w-2/3 bg-gray-100 p-8 rounded-xl shadow-lg">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                placeholder="Your message..."
                className="w-full p-3 border border-gray-300 rounded-md h-32"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="md:w-1/3 space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Hotel Address</h3>
            <p className="text-gray-600">Bandra,Hill Road<br /> Mumbai</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-gray-600">+91 87748-78457</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-600">info@zeanhotel.com</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
            <p className="text-gray-600">Facebook | Instagram | Twitter</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
