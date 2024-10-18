import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div className="flex flex-col">
          <h2 className="text-lg font-bold uppercase mb-4">
            About The Hosebed
          </h2>
          <p className="text-sm">
            The Hosebed is a blog dedicated to exploring the front-line
            experiences of firefighters and first responders. Stay updated with
            expert insights and stories from the field.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col">
          <h2 className="text-lg font-bold uppercase mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:text-gray-300">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-300">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-gray-300">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col">
          <h2 className="text-lg font-bold uppercase mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <Link href="https://facebook.com" className="hover:text-gray-300">
              Facebook
            </Link>
            <Link href="https://twitter.com" className="hover:text-gray-300">
              Twitter
            </Link>
            <Link href="https://instagram.com" className="hover:text-gray-300">
              Instagram
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-gray-500">
        &copy; 2024 The Hosebed. All rights reserved.
      </div>
    </footer>
  );
}
