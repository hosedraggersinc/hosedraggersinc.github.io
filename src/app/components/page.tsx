import VentBlogThumbnail from "../components/VentBlogThumbnail";
import HoseBlogThumbnail from "../components/HoseBlogThumbnail";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <div className="w-full min-h-screen">
      <main className="relative flex flex-col w-full min-h-screen">
        {/* Navigation Menu */}
        <div className="absolute top-0 left-0 w-full">
          <NavBar />
        </div>

        {/* Hero Section */}
        <div className="hero flex flex-col items-center justify-start py-72 md:py-60 text-center">
          <h1 className="uppercase text-3xl md:text-4xl text-zinc-300 mb-4">
            Hosebed Chronicles: Exploring the World of Quarterbacking
          </h1>
          <div>
            <a href="#readmore">
              <button
                type="button"
                className="mt-4 px-6 py-2 rounded bg-gradient-to-r from-zinc-500 to-slate-500 hover:from-pink-500 hover:to-rose-500 transition duration-300"
              >
                Read More
              </button>
            </a>
          </div>
        </div>

        {/* Blog Thumbnails Section */}
        <div className="flex flex-col p-4 w-full h-full">
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full h-full">
            <div className="flex flex-col items-center justify-start">
              <div className="pt-4" id="readmore"></div>
              <VentBlogThumbnail />
            </div>
            <div className="flex flex-col items-center justify-start">
              <div className="pt-4" id="readmore"></div>
              <HoseBlogThumbnail />
            </div>
            <div className="flex flex-col items-center justify-start"></div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
