import Link from "next/link";
import NavBar from "../../components/NavBar";
import VentBlog from "@/app/components/VentBlog";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-black">
      <main className="relative flex flex-col w-full min-h-screen">
        {/* Navigation Menu */}
        <div className="absolute top-0 left-0 w-full">
          <NavBar />
        </div>

        {/* Hero Section */}
        <div className="ventops_hero flex flex-col items-center justify-center py-40 md:py-20">
          <div className="relative px-4 md:px-28 grid grid-cols-1 w-full h-full">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              {/* Heading */}
              <h1 className="uppercase text-2xl md:text-4xl text-zinc-300">
                We look at an example of vertical venting from a video posted by{" "}
                <span className="bg-gradient-to-r from-rose-500 to-indigo-900 bg-clip-text text-transparent">
                  @bluecollarfiremen
                </span>{" "}
                and review some of the comments by the Monday Morning
                Quarterbacks.
              </h1>

              {/* Continue Reading Button */}
              <div className="mt-6">
                <Link href="#readmore">
                  <button
                    type="button"
                    className="px-4 py-2 md:px-6 md:py-2 text-sm md:text-base rounded bg-gradient-to-r from-zinc-500 to-slate-500 hover:from-pink-500 hover:to-rose-500 transition duration-300"
                  >
                    Continue Reading
                  </button>
                </Link>
              </div>

              {/* Quote */}
              <div
                className="italic text-base md:text-xl mt-6 md:mt-10"
                style={{ lineHeight: "1.5" }}
              >
                "Why does LA Fire love to hang out on the roof after they vent?"
              </div>
            </div>
          </div>
        </div>

        {/* VentBlog Component */}
        <VentBlog />
      </main>
    </div>
  );
}
