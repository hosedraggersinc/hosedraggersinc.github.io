import Image from "next/image";

// Functional component for displaying a blog thumbnail
const HoseBlogThumbnail = () => {
  return (
    <div className="w-full max-w-md p-6 bg-zinc-900 rounded-lg shadow-md">
      {/* Link to the blog post */}
      <a href="/blog/post-slug">
        <Image
          src="/images/jay-heike-PdEieK6e3CM-unsplash.png" // Path to image in the public folder
          alt="Ladder Vent Blog Thumbnail"
          className="rounded-lg"
          width={600}
          height={400}
          priority // Improve loading performance for critical images
        />
      </a>
      <div className="mt-4">
        <h2 className="text-xl uppercase pt-4 font-bold text-white">
          Hose Deployment
        </h2>
        <p className="mt-2 text-gray-600">Coming Soon!</p>
        {/* Link to read more about Vent Operations */}
        <a href="#">
          <button
            type="button"
            className="mt-4 px-4 py-2 rounded bg-gradient-to-r from-zinc-500 to-slate-500 hover:from-pink-500 hover:to-rose-500"
          >
            Read
          </button>
        </a>
      </div>
    </div>
  );
};

export default HoseBlogThumbnail;
