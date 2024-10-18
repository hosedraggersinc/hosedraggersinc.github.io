import VentBlogThumbnail from "../components/VentBlogThumbnail";
import HoseBlogThumbnail from "../components/HoseBlogThumbnail";
import NavBar from "../components/NavBar";

export default function Page() {
  return (
    <div className="grid grid-cols-1 w-full min-h-screen">
      <main className="relative flex flex-col w-full min-h-screen">
        {/* Nested Grid */}
        <div className="hero flex flex-col items-center justify-center py-10">
          {/* Navigation Menu */}
          <div className="absolute top-0 left-0 w-full">
            <NavBar />
          </div>
          <div className="uppercase text-3xl text-zinc-300">
            Hosebed Chronicles: Exploring the World of Quarterbacking
          </div>
          <div>
            <a href="#readmore">
              <button
                type="button"
                className="mt-4 px-4 py-2 rounded bg-gradient-to-r from-zinc-500 to-slate-500 hover:from-pink-500 hover:to-rose-500"
              >
                Read More
              </button>
            </a>
          </div>
        </div>

        <div className="flex flex-col p-10 w-full h-full">
          <div className="relative pr-28 grid grid-cols-3 gap-6 w-full h-full">
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
    </div>
  );
}
