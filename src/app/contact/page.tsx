import NavBar from "@/app/components/NavBar"; // Ensure this path is correct
import Footer from "@/app/components/Footer"; // Ensure this path is correct

export default function Contact() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Navigation Menu */}
      <NavBar />

      {/* Contact Section */}
      <main className="flex-grow flex flex-col items-center justify-center bg-gray-100 py-10 px-5">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8">
          Contact Us
        </h1>

        <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8">
          <form className="flex flex-col space-y-6">
            {/* Name */}
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-sm font-semibold text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="text-sm font-semibold text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Message"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
