import Link from "next/link";
import NavBar from "../app/components/NavBar";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="grid grid-cols-1 w-full min-h-screen">
      <main className="relative flex flex-col w-full min-h-screen">
        {/* Navigation Menu */}
        <NavBar />
        {/* Background Image (optional) */}
        <div className="jumbo absolute inset-0"></div>

        {/* Overlay */}
        {/*<div className="absolute inset-0 bg-black opacity-60"></div>*/}

        {/* Nested Grid */}
        <div className="relative pr-28 z-10 grid grid-cols-3 w-full h-full">
          <div className="flex flex-col items-center justify-center h-full">
            <div className="grid rounded pl-28 items-center content-center text-left h-3/6 w-full">
              {/* Grid for future use */}
            </div>
          </div>
          <div className="flex items-center justify-center h-full"></div>
          <div className="flex flex-col items-left justify-center h-full">
            <div className="text-5xl uppercase font-bold text-white">
              {/*The Hosebed*/}
            </div>
            <p className="mt-4 text-xl text-left text-white">
              {/*At The Hosebed, we explore front-line experiences to in-depth
              discussions on fire safety, tactics, and technology. Whether
              you're a seasoned firefighter, an aspiring first responder, or
              simply passionate about learning more, we bring you expert
              insights, stories from the field, and the latest industry updates.{" "}
              <br />
              <br />
              Join us as we honor the bravery, skill, and dedication of those
              who serve, while keeping you informed and prepared for whatever
              comes next.*/}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
