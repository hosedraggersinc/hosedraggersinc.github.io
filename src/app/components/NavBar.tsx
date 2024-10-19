import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="relative z-20 bg-gradient-to-r from-zinc-900 text-white w-full">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        {/* Logo or Brand Name */}
        <div className="text-xl uppercase font-bold">
          <Link href="/">Hose Draggers Inc.</Link>
        </div>
        {/* Nav Links */}
        <ul className="flex space-x-6">
          <li>
            <Link
              href="/"
              className="px-4 uppercase bg-transparent text-white hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-500 hover:bg-clip-text hover:text-transparent transition-all duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="px-4 uppercase bg-transparent text-white hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-500 hover:bg-clip-text hover:text-transparent transition-all duration-300"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="px-2 uppercase bg-transparent text-white hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-500 hover:bg-clip-text hover:text-transparent transition-all duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
