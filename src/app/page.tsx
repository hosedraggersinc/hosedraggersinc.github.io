import NavBar from "@/app/components/NavBar"; // Ensure this path is correct
import Footer from "@/app/components/Footer"; // Ensure this path is correct

export default function Home() {
  return (
    <div className="grid grid-cols-1 w-full min-h-screen">
      <main className="relative flex flex-col w-full min-h-screen">
        {/* Navigation Menu */}
        <NavBar />

        {/* Background Image (optional) */}
        <div className="jumbo absolute inset-0"></div>

        {/* Overlay (optional) */}
        {/* <div className="absolute inset-0 bg-black opacity-60"></div> */}

        {/* Nested Grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 w-full h-full px-4 lg:px-28">
          {/* Left Column */}
          <div className="flex flex-col items-center justify-center h-full py-8 lg:py-0">
            <div className="grid rounded lg:pl-28 items-center content-center text-left h-3/6 w-full">
              {/* Grid for future use */}
            </div>
          </div>

          {/* Center column for spacing on large screens */}
          <div className="hidden lg:flex items-center justify-center h-full"></div>

          {/* Right Column */}
          <div className="flex flex-col items-left justify-center h-full py-8 lg:py-0">
            {/*<h1 className="text-3xl sm:text-4xl lg:text-5xl uppercase font-bold text-white">
              The Hosebed
            </h1>*/}
            {/*<p className="mt-4 text-lg sm:text-xl lg:text-2xl text-left text-white">
              At The Hosebed, we explore front-line experiences and in-depth
              discussions on fire safety, tactics, and technology. Whether
              you're a seasoned firefighter, an aspiring first responder, or
              simply passionate about learning more, we bring you expert
              insights, stories from the field, and the latest industry updates.
              <br />
              <br />
              Join us as we honor the bravery, skill, and dedication of those
              who serve, while keeping you informed and prepared for whatever
              comes next.
            </p>*/}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
