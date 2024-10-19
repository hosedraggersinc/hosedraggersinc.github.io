import Image from "next/image";

const VentBlogThumbnail = () => {
  return (
    <div className="w-full max-w-md p-6 bg-zinc-900 rounded-lg shadow-md">
      <a href="/blog/post-slug">
        <div className="cursor-pointer">
          <Image
            src="/images/ladder-vent.png" // Path to image in the public folder
            alt="Ladder Vent Blog Thumbnail"
            className="rounded-lg"
            width={600}
            height={400}
          />
        </div>
      </a>
      <div className="mt-4">
        <h2 className="text-xl uppercase font-bold text-white-800">
          Vertical Venting Operations
        </h2>
        <p className="mt-2 text-gray-600">
          We look at an example of vertical venting from a video posted by
          @bluecollarfiremen and review some of the comments by the Monday
          Quarterbacks.
        </p>
        <a href="/blog/VentOps">
          <button
            type="button"
            className="mt-4 px-4 py-2 rounded bg-gradient-to-r from-zinc-500 to-slate-500 hover:from-pink-500 hover:to-rose-500"
          >
            Read More
          </button>
        </a>
      </div>
    </div>
  );
};

export default VentBlogThumbnail;
