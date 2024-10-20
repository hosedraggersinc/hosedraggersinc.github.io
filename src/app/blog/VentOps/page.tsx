import Image from "next/image";
import Link from "next/link";
import NavBar from "../../components/NavBar";
import VentBlog from "@/app/components/VentBlog";

export default function Home() {
  return (
    <div className="grid grid-cols-1 w-full min-h-screen bg-black">
      <main className="relative flex flex-col w-full min-h-screen">
        {/* Navigation Menu */}
        <div className="absolute top-0 left-0 w-full">
          <NavBar />
        </div>
        <div className="ventops_hero flex flex-col items-center justify-center py-10">
          <div className="relative p-28 grid grid-cols-1 w-full h-full">
            <div className="flex flex-col items-left">
              <div className="uppercase px-28 text-3xl text-zinc-300 text-left">
                {/* TOPIC */}
                We look an example of vertical venting from a video posted by
                &nbsp;
                <span className="bg-gradient-to-r from-rose-500 to-indigo-900 bg-clip-text text-transparent">
                  @bluecollarfiremen{" "}
                </span>
                and review some of the comments by the Monday Morning
                Quarterbacks.
                <div className="">
                  <Link href="#readmore">
                    <button
                      type="button"
                      className="mt-4 px-4 py-2 text-sm rounded bg-gradient-to-r from-zinc-500 to-slate-500 hover:from-pink-500 hover:to-rose-500"
                    >
                      Continue Reading
                    </button>
                  </Link>
                </div>
                <div
                  className="italic"
                  style={{
                    fontSize: "1.5rem",
                    marginTop: "50px",
                    paddingTop: "50px",
                  }}
                >
                  "Why does LA Fire love to hang out on the roof after they
                  vent?"
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center"></div>
          </div>
        </div>
        <VentBlog />
      </main>
    </div>
  );
}
