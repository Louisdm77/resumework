import img from "../assets/img/fr.jpg";

export default function Hero() {
  return (
    <section className="bg-white py-20 md:py-28 font-sans" id="hero">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <div className="text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 leading-snug tracking-tight">
            Helping Professionals <span className="text-blue-700">Unlock</span>{" "}
            Their Career Potential
          </h1>
          <p className="text-lg text-gray-500 mb-8 max-w-xl leading-relaxed">
            I craft powerful, keyword-optimized resumes and LinkedIn profiles
            that elevate your professional brand, help you stand out, and open
            doors to new opportunities.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg shadow hover:bg-blue-800 transition"
            >
              Work With Me
            </a>
            <a
              href="#packages"
              className="px-6 py-3 bg-gray-100 text-gray-800 font-medium rounded-lg shadow hover:bg-gray-200 transition"
            >
              View Packages
            </a>
          </div>
        </div>

        {/* Right: Image with Decorative Border */}
               <div className="flex justify-center md:justify-end">
          <div className="p-[6px] rounded-xl bg-gradient-to-tr from-blue-700 via-blue-400 to-cyan-400 shadow-lg">

            <img
              src="https://i.pinimg.com/1200x/94/c7/20/94c720a1069394fecf5773084934898b.jpg"
              alt="Professional Resume Assistance"
              className="relative w-72 h-72 md:w-96 md:h-96 rounded-lg object-cover shadow-xl border-4 border-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
